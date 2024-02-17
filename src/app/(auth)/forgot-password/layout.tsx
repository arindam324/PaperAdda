import React, { ReactNode } from "react";

interface ForgotPasswordLayoutProps {
  children: ReactNode;
}
export default function ForgotPasswordLayout({
  children,
}: ForgotPasswordLayoutProps) {
  return (
    <div className="flex items-center w-full justify-center border min-h-screen">
      {children}
    </div>
  );
}
