import { z } from "zod";

import { ActionState } from "@/lib/create-safe-action";

import { LoginSchema } from "./schema";

export type InputType = z.infer<typeof LoginSchema>;
export type ReturnType = ActionState<InputType, any>;
