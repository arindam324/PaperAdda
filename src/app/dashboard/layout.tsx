import { supabase } from "@/supabase";
import { notFound } from "next/navigation";
import React, { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
  admin: ReactNode;
  user: ReactNode;
  educator: ReactNode;
}

const DashboardLayout = ({
  admin,
  user,
  educator
}: DashboardLayoutProps) => {
  let role = "user";
  switch (role) {
    case 'user':
      return user;
    case 'educator':
      return educator;
    case 'admin':
      return admin;
    default:
      return notFound;
  }
}

export default DashboardLayout;
