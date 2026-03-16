import * as z from "zod";

export const CreateTransactionSchema = z.object({
  amount: z.number(),
  description: z.string(),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
  category: z.string(),
  type: z.enum(["income", "expense"]),
});

export const UpdateTransactionSchema = z.object({
  amount: z.number().optional(),
  description: z.string().optional(),
  date: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date format",
    })
    .optional(),
  category: z.string().optional(),
  type: z.enum(["income", "expense"]).optional(),
});

export type CreateTransactionData = z.infer<typeof CreateTransactionSchema>;
export type UpdateTransactionData = z.infer<typeof UpdateTransactionSchema>;
