import React, { ReactNode } from "react";

interface LoginLayoutProps {
  children: ReactNode;
}
export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <div className=" relative flex items-center w-full justify-center border min-h-screen">
      {children}
    </div>
  );
}
