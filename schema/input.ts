import { z } from "zod";

export const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(16),
  confirmPassword: z.string().min(8).max(16).optional(),
});
