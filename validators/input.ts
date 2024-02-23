import { z } from "zod";

export const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {message: 'Password must contain at least 8 character(s)'}).max(16, {message: 'Password can not be longer than 16 character(s)'}),
  confirmPassword: z.string().min(8, {message: 'Password must contain at least 8 character(s)'}).max(16).optional(),
});
