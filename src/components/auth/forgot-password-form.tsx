"use client";

import React from "react";
// import { FormInput } from "../form/form-input";
import { FormSubmit } from "../form/form-submit";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

const ForgotPasswordForm = () => {
  const router = useRouter();
  return (
    <form
      action="/api/auth/forgot-password"
      method="POST"
      className="flex flex-col gap-5"
    >
      {/* <FormInput
        id="email"
        label="Email"
        type="email"
        placeholder="Email address"
        labelClassName="text-lg"
      /> */}
      <FormSubmit variant="grey" className="w-[140px]">
        Reset password
      </FormSubmit>
      <Button
        type="button"
        size="sm"
        key="root"
        variant="ghost"
        onClick={() => router.push("/login")}
        className="text-neutral-700 opacity-70 absolute top-0 right-0 p-2"
      >
        <X className="w-7 h-7" />
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
