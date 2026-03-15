import * as z from "zod";

export const LoginSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
});

export const RegisterSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2).optional(),
  email: z.email(),
  password: z.string().min(6),
});

export type LoginData = z.infer<typeof LoginSchema>;
export type RegisterData = z.infer<typeof RegisterSchema>;
