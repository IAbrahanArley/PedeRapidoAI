import { useDroppable } from "@dnd-kit/core";

import { Order } from "../types/types";
import { KanbanCard } from "./KanbanCard";

interface Props {
  id: string;
  title: string;
  color: string;
  lightColor: string;
  orders: Order[];
}

export function KanbanColumn({ id, title, color, lightColor, orders }: Props) {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`flex flex-col rounded p-2 shadow ${lightColor} h-[600px]`}
    >
      <h2
        className={`mb-2 rounded p-2 text-white ${color} text-center font-bold`}
      >
        {title}
      </h2>

      <div className="custom-scrollbar flex-1 space-y-2 overflow-y-auto overflow-x-hidden pr-2">
        {orders.map((order) => (
          <KanbanCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}
