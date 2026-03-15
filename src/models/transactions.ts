export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  date: string;
  category: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}
