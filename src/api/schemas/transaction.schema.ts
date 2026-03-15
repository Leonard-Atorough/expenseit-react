import * as z from "zod";

export const CreateTransactionSchema = z.object({
  amount: z.number(),
  description: z.string(),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
  category: z.string(),
  // userId will be set on the server side, so we don't include it in the schema for client input
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
});

export type CreateTransactionData = z.infer<typeof CreateTransactionSchema>;
export type UpdateTransactionData = z.infer<typeof UpdateTransactionSchema>;
