import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { Order } from "../types/types";

interface Props {
  order: Order;
}

export function KanbanCard({ order }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: order.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="cursor-grab rounded bg-white p-4 shadow hover:shadow-lg"
    >
      <p className="font-bold">
        #{order.id} - {order.customerName}
      </p>
      <p>Total: R$ {order.total.toFixed(2)}</p>
    </div>
  );
}
