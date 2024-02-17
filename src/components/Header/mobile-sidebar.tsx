import React from "react";
import {
  SheetContent,
  SheetFooter,
  SheetHeader, 
  SheetTitle,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Rubik_Dirt } from "next/font/google";
import { cn } from "@/lib/utils";
import { linksData } from "@/constant/links-data";
import Link from "next/link";

export const fontSans = Rubik_Dirt({ weight: "400", subsets: ["cyrillic"] });

const MobileSidebar = () => {
  return (
    <SheetContent
      side="left"
      className="flex flex-col items-start gap-2 w-full"
    >
      <SheetHeader>
        <SheetTitle
          className={cn(
            "text-3xl font-semibold tracking-wide",
            fontSans.className
          )}
        >
          PaperAdda
        </SheetTitle>
      </SheetHeader>
      <div className="grid gap-4 py-4 mt-10 w-full ">
        <nav className=" flex flex-col gap-2 w-full">
          {linksData.map((link) => (
            <Link
              href={link.route}
              key={link.id}
              className="w-full rounded-md font-semibold text-gray-500 hover:text-gray-800 hover:bg-gray-100 py-2 px-5"
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
      <SheetFooter className="w-full">
        <Button size="default" variant="ghost" className="mt-10 px-5 w-full hover:text-gray-800 text-gray-500">
          <span className="w-full text-start font-semibold hover:text-gray-800 text-gray-500">
            Logout
          </span>
        </Button>
      </SheetFooter>
    </SheetContent>
  );
};

export default MobileSidebar;
