import * as z from "zod";

// Request schemas
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

export const RefreshTokenSchema = z.object({
  refreshToken: z.string(),
});

// Response schemas
export const registerResponseSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string().optional(),
  email: z.email(),
});

export const loginResponseSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string().optional(),
  email: z.email(),
  token: z.string(),
});

export type LoginData = z.infer<typeof LoginSchema>;
export type RegisterData = z.infer<typeof RegisterSchema>;
export type LoginResponse = z.infer<typeof loginResponseSchema>;
export type RegisterResponse = z.infer<typeof registerResponseSchema>;
export type UserResponse = RegisterResponse; // Same as RegisterResponse for now, can be changed if needed
