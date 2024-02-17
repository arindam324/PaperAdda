import React, { ReactNode } from "react";

interface RegisterLayoutProps {
  children: ReactNode;
}
export default function RegisterLayout({ children }: RegisterLayoutProps) {
  return (
    <div className="relative flex items-center w-full justify-center border min-h-screen">
      {children}
    </div>
  );
}
