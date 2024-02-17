"use client";

import React, { useState } from "react";
// import { FormInput } from "../form/form-input";
import { FormSubmit } from "../form/form-submit";
import { Eye, EyeOff, X } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next13-progressbar";
import { useAction } from "@/hooks/use-action";
import { login } from "@/actions/login";
import { toast } from "sonner";
import { Session, User } from "@supabase/supabase-js";
import { useAuth } from "@/hooks/use-auth";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { login: authLogin } = useAuth();

  const { execute, isLoading, fieldErrors } = useAction(login, {
    onSuccess: (data: { user: User; session: Session }) => {
      const { user } = data;
      authLogin(user);
      return router.push("/");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error);
    },
  });

  const onSubmit = async (formData: FormData) => {
    const identifier = formData.get("identifier") as string;
    const password = formData.get("password") as string;
    const data = {
      identifier,
      password,
    };
    await execute(data);
  };
  return (
    <form
      action={onSubmit}
      className="flex flex-col justify-between w-full gap-3 -mt-3"
    >
      {/* <FormInput
        id="identifier"
        label="Email address or Phone"
        placeholder="Email address or Phone"
        errors={fieldErrors}
      />
      <div className="relative">
        <FormInput
          id="password"
          label="Password"
          placeholder="Enter password"
          errors={fieldErrors}
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 bottom-[6px] cursor-pointer outline-none"
        >
          {showPassword ? (
            <Eye className="w-5 text-slate-600" />
          ) : (
            <EyeOff className="w-5 text-slate-600" />
          )}
        </button>
      </div> */}

      <Link href="/forgot-password" className="hover:text-blue-700">
        forgot password?
      </Link>
      <FormSubmit className="mt-2" disabled={isLoading}>
        Submit
      </FormSubmit>
      <div className="flex items-center ">
        <span className="text-sm text-neutral-700 mr-1">New to PaperAdda?</span>{" "}
        <Link
          key="register"
          href="/register"
          className="text-blue-700 hover:underline"
        >
          Register
        </Link>
      </div>
      <Button
        size="sm"
        type="button"
        key="root"
        variant="ghost"
        onClick={() => router.push("/")}
        className="text-neutral-700 opacity-70 absolute top-10 right-10 lg:right-32 p-2"
      >
        <X className="w-7 h-7" />
      </Button>
    </form>
  );
};

export default LoginForm;
