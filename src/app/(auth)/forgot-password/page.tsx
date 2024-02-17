import ForgotPasswordForm from "@/components/auth/forgot-password-form";
import React from "react";

const ForgotPasswordPage = () => {
  return (
    <div className="relative flex flex-col gap-5 w-[400px]">
      <h2 className="font-bold text-2xl">Reset you password</h2>
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPasswordPage;
