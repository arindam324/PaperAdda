import { z } from "zod";

export const LoginSchema = z.object({
  identifier: z.string(),
  password: z.string().min(7, "Weak password"),
});
