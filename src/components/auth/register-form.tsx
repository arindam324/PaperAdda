"use client";

import React, { useState } from "react";
import { FormInput } from "../form/form-input";
import { FormSubmit } from "../form/form-submit";
import { Eye, EyeOff, X } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next13-progressbar";
import Link from "next/link";
import { useAction } from "@/hooks/use-action";
import { register } from "@/actions/register";
import { toast } from "sonner";
import { Session, User } from "@supabase/supabase-js";
import { useAuth } from "@/hooks/use-auth";
import {setCookie} from 'cookies-next';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();
  const {login} = useAuth();

  const { execute, isLoading, fieldErrors } = useAction(register, {
    onSuccess: (data:{user:User; session:Session}) => {
      const {user} = data;
      login(user);
      return router.push('/');
    },
    onError: (error) => {
      console.log(error);
      toast.error(error);
    },
  });

  fieldErrors

  const onSubmit = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const identifier = formData.get("identifier") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirm-password") as string;
    const data = {
      name,
      identifier,
      password,
      confirmPassword,
    };
    console.log(data);
    await execute(data);
  };
  return (
    <form
      action={onSubmit}
      className="flex flex-col justify-between w-full -mt-5 gap-3 "
    >
      <FormInput
        id="name"
        label="Full Name"
        placeholder="Enter full name"
        errors={fieldErrors}
      />

      <FormInput
        id="identifier"
        label="Email address or Phone"
        placeholder="Email address or Phone"
        errors={fieldErrors}
      />
      <div className="relative flex flex-col gap-1 w-full">
        <FormInput
          id="password"
          type={showPassword ? "password" : "text"}
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
      </div>
      <div className="relative flex flex-col gap-1 w-full">
        <FormInput
          id="confirm-password"
          type={showConfirmPassword ? "password" : "text"}
          label="Confirm password"
          placeholder="Enter confirm password"
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword((prev) => !prev)}
          className="absolute right-3 bottom-[6px] cursor-pointer outline-none"
        >
          {showConfirmPassword ? (
            <Eye className="w-5 text-slate-600" />
          ) : (
            <EyeOff className="w-5 text-slate-600" />
          )}
        </button>
      </div>

      <FormSubmit className="mt-3" disabled={isLoading}>
        Register
      </FormSubmit>
      <div className="flex items-center mt-2 gap-1">
        <span className="text-sm text-neutral-700">
          Already have an account?
        </span>
        <Link
          key="login"
          href="/login"
          className="text-blue-700 hover:underline"
        >
          Login
        </Link>
      </div>
      <Button
        type="button"
        key="root"
        onClick={() => router.push("/")}
        variant="ghost"
        size="sm"
        className="text-neutral-700 opacity-70 absolute top-10 right-10 lg:right-32 "
      >
        <X className="w-7 h-7" />
      </Button>
    </form>
  );
};

export default RegisterForm;
