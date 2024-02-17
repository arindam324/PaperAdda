"use server";
import { revalidatePath } from "next/cache";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";

import { InputType, ReturnType } from "./types";
import { createSafeAction } from "@/lib/create-safe-action";
import { LoginSchema } from "./schema";
import { cookies } from "next/headers";
import isEmail from "@/lib/isEmail";
import { supabase } from "@/supabase";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { identifier, password } = data;
  let registerData = null;
  try {
    
    if (isEmail(identifier)) {
      const { error, data: regData } = await supabase.auth.signInWithPassword({
        email: identifier,
        password,
      });
      if (error)
        return {
          error: error.message,
        };
      registerData = regData;
    } else {
      const { error, data: regData } = await supabase.auth.signInWithPassword({
        phone: identifier,
        password,
        options: {
          data: data,
        },
      });
      if (error)
        return {
          error: error.message,
        };
      registerData = regData;
    }
  } catch (error) {
    return {
      error: "Failed to Login!",
    };
  }
  revalidatePath(`/`);
  return { data: registerData };
};

export const login = createSafeAction(LoginSchema, handler);
