import * as z from "zod";

export const UserProfileSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.email(),
  // z.sting().email is deprecated. We use z.email() instead.
});

export type UserProfile = z.infer<typeof UserProfileSchema>;
