export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  date: string;
  category: string;
  description?: string;
  type: "income" | "expense";
  createdAt: string;
  updatedAt: string;
}
