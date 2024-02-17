import Helper from "@/components/auth/Helper";
import { Separator } from "@/components/ui/separator";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className=" min-h-screen flex items-center justify-center bg-white">
      {children}
    </div>
  );
}
