import isPhoneNumber from "@/lib/is-phone-number";
import isEmail from "@/lib/isEmail";
import { z } from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(1, "Name is required"),
  identifier: z.string().refine((val) => {
    if (!isEmail(val) || !isPhoneNumber(val)) return true;
  }, "Invalid Email address or phone"),
  password: z.string().min(7, "Weak password"),
  confirmPassword: z.string(),
});
