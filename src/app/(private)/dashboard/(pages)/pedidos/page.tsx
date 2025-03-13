"use client";

import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import DashboardLayout from "../../components/dashboard";
import { KanbanBoard } from "./components/kanban-board";
import { OrdersTable } from "./components/order-table";
import { Order } from "./types/types";
const pedidos: Order[] = [
  {
    id: 1,
    customerName: "João Silva",
    customerCpf: "123.456.789-00",
    total: 99.9,
    status: "preparing",
    consumptionMethod: "delivery",
    createdAt: "2025-03-13T15:00:00Z",
    updatedAt: "2025-03-13T16:00:00Z",
  },
  {
    id: 2,
    customerName: "Maria Souza",
    customerCpf: "987.654.321-00",
    total: 45.0,
    status: "new",
    consumptionMethod: "local",
    createdAt: "2025-03-13T12:00:00Z",
    updatedAt: "2025-03-13T13:00:00Z",
  },
  {
    id: "3",
    customerName: "Carlos Santos",
    customerCpf: "321.654.987-00",
    total: 78.99,
    status: "delivering",
    consumptionMethod: "delivery",
    createdAt: "2025-03-13T11:00:00Z",
    updatedAt: "2025-03-13T12:00:00Z",
  },
];

export default function PedidosPage() {
  return (
    <DashboardLayout>
      <div className="mb-2">
        <h1 className="text-3xl font-bold">Meus Pedidos</h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href="/dashboard/home">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>Pedidos</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <KanbanBoard
        orders={pedidos.filter((p) => p.createdAt.startsWith("2025-03-13"))}
      />
      <OrdersTable orders={pedidos} />
    </DashboardLayout>
  );
}
