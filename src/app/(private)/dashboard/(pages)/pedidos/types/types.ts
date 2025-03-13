export interface Order {
  id: string;
  customerName: string;
  total: number;
  status: string;
}

export type ColumnId = "new" | "preparing" | "delivering" | "delivered";

export interface Column {
  id: ColumnId;
  title: string;
  color: string;
  lightColor: string;
}
