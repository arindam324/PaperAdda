"use client";

import { Rubik_Dirt } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useRouter } from "next13-progressbar";
import { linksData } from "@/constant/links-data";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { FormSubmit } from "../form/form-submit";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetTrigger } from "../ui/sheet";
import MobileSidebar from "./mobile-sidebar";
import { User } from "@supabase/supabase-js";

export const fontSans = Rubik_Dirt({ weight: "400", subsets: ["cyrillic"] });
interface HeaderProps {
  user: User | null;
}
const Index = ({ user }: HeaderProps) => {
  const router = useRouter();
  
  return (
    <header className="flex top-0 left-0 px-0 lg:px-28 w-full z-50 bg-gray-50 py-4 items-center justify-between fixed border-b-2">
      <div className="flex items-center space-x-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="sm" variant="ghost">
              <MenuIcon className=" text-gray-800 h-6 w-6" />
            </Button>
          </SheetTrigger>
          <MobileSidebar />
        </Sheet>

        <h2
          className={cn(
            "text-3xl font-semibold tracking-wide",
            fontSans.className
          )}
        >
          PaperAdda
        </h2>
      </div>

      <nav className="items-center space-x-12 hidden lg:flex">
        {linksData.map((link) => (
          <Link href={link.route} key={link.id}>
            {link.title}
          </Link>
        ))}
        <Link href={``}></Link>
      </nav>

      {!user && (
        <div className={"flex items-center space-x-5"}>
          <Button
            className={cn(fontSans.className)}
            onClick={() => router.push("/login")}
          >
            Login
          </Button>
          <Button
            className="border"
            variant="ghost"
            onClick={() => router.push("/register")}
          >
            Register
          </Button>
        </div>
      )}
      {user && (
        <div className="flex items-center gap-5 pr-5">
          <Link href='/dashboard' className="border px-3 py-1 hover:bg-gray-100 rounded-full">Dashboard</Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/user-icon.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                <div className="flex items-center justify-start gap-1">
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height="32"
                    src="/user-icon.svg"
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width="25"
                  />
                  <span className="text-[12px]">{user.email}</span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <form
                  action="/api/auth/logout"
                  method="POST"
                  className="w-full"
                >
                  <FormSubmit className="w-full border">Logout</FormSubmit>
                </form>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </header>
  );
};

export default Index;
