"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type OrderStatus = "new" | "preparing" | "delivering" | "delivered";
type ConsumptionMethod = "local" | "delivery" | "pickup";

type Order = {
  id: number;
  customerName: string;
  customerCpf: string;
  total: number;
  status: OrderStatus;
  consumptionMethod: ConsumptionMethod;
  createdAt: string;
  updatedAt: string;
};

interface OrdersTableProps {
  orders: Order[];
}

export function OrdersTable({ orders }: OrdersTableProps) {
  return (
    <div className="mt-4 rounded-md border p-4">
      <h2 className="mb-4 text-lg font-semibold">Pedidos Realizados</h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nome do Cliente</TableHead>
              <TableHead>CPF</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Método</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Criado em</TableHead>
              <TableHead>Atualizado em</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customerName}</TableCell>
                <TableCell>{order.customerCpf}</TableCell>
                <TableCell>
                  <span
                    className={`rounded px-2 py-1 text-xs ${
                      order.status === "new"
                        ? "bg-green-100 text-green-700"
                        : order.status === "preparing"
                          ? "bg-blue-100 text-blue-700"
                          : order.status === "delivering"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </TableCell>
                <TableCell>{order.consumptionMethod}</TableCell>
                <TableCell>R$ {order.total.toFixed(2)}</TableCell>
                <TableCell>
                  {new Date(order.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {new Date(order.updatedAt).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
