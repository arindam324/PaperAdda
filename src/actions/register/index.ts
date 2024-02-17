"use server";
import { revalidatePath } from "next/cache";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";

import { InputType, ReturnType } from "./types";
import { createSafeAction } from "@/lib/create-safe-action";
import { RegisterSchema } from "./schema";
import { cookies } from "next/headers";
import isEmail from "@/lib/isEmail";
import { supabase } from "@/supabase";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { confirmPassword, identifier, password } = data;
  let registerData = null;
  try {
    if (password !== confirmPassword)
      return { error: "Password should be matched" };

    // const cookieStore = cookies();
    // const supabase = createServerActionClient({ cookies: () => cookieStore });

    // const { data, error } = await supabase.auth.getSession();

    // if (!error) {
    //   return {
    //     error: "Existing user",
    //   };
    // }
    if (isEmail(identifier)) {
      const { error, data: regData } = await supabase.auth.signUp({
        email: identifier,
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
    } else {
      const { error, data: regData } = await supabase.auth.signUp({
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
      error: "Failed to register!",
    };
  }
  revalidatePath(`/`);
  return { data: registerData };
};

export const register = createSafeAction(RegisterSchema, handler);
