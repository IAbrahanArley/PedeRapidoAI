"use client";

import { closestCorners, DndContext, DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";

import { Column, Order } from "../types/types";
import { KanbanColumn } from "./KanbanColumn";

const columns: Column[] = [
  {
    id: "new",
    title: "Novo Pedido",
    color: "bg-green-500",
    lightColor: "bg-green-100",
  },
  {
    id: "preparing",
    title: "Em Preparo",
    color: "bg-blue-500",
    lightColor: "bg-blue-100",
  },
  {
    id: "delivering",
    title: "Em Entrega",
    color: "bg-yellow-500",
    lightColor: "bg-yellow-100",
  },
  {
    id: "delivered",
    title: "Entregue",
    color: "bg-purple-500",
    lightColor: "bg-purple-100",
  },
];

interface KanbanBoardProps {
  orders: Order[];
  onStatusChange?: (updatedOrders: Order[]) => void;
}

export function KanbanBoard({
  orders: initialOrders,
  onStatusChange,
}: KanbanBoardProps) {
  const [orders, setOrders] = useState<Order[]>(initialOrders);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    const activeOrder = orders.find((order) => order.id === activeId);
    if (!activeOrder) return;

    const isOverColumn = columns.some((col) => col.id === overId);
    let newStatus = activeOrder.status;

    if (isOverColumn) {
      newStatus = overId as Order["status"];
    } else {
      const overOrder = orders.find((order) => order.id === overId);
      if (overOrder) {
        newStatus = overOrder.status;
      }
    }

    if (activeOrder.status !== newStatus) {
      const updated = orders.map((order) =>
        order.id === activeId ? { ...order, status: newStatus } : order,
      );
      setOrders(updated);
      onStatusChange?.(updated);
    }
  };

  return (
    <div className="rounded-md border p-4">
      <h2 className="mb-4 text-lg font-semibold">Status Pedidos</h2>
      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-4">
          {columns.map((column) => {
            const columnOrders = orders.filter((o) => o.status === column.id);
            return (
              <SortableContext
                key={column.id}
                items={columnOrders.map((o) => o.id)}
                strategy={verticalListSortingStrategy}
              >
                <KanbanColumn
                  id={column.id}
                  title={column.title}
                  color={column.color}
                  lightColor={column.lightColor}
                  orders={columnOrders}
                />
              </SortableContext>
            );
          })}
        </div>
      </DndContext>
    </div>
  );
}
