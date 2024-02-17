import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { LogOut, Settings, User, X } from "lucide-react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export const userArr = [
  {
    Icon: User,
    title: "Profile",
    slug: "/user/profile",
    type: "link",
  },
  {
    Icon: Settings,
    title: "Setting",
    slug: "/user/setting",
    type: "link",
  },
  { Icon: LogOut, title: "Logout", type: "button" },
];

export function UserImformation() {
  return (
    <div className="flex items-center justify-center">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <h3 className="text-xs font-bold text-gray-700">Type</h3>
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <div className="flex items-center justify-center">
              <span className="inline-block text-sm text-left whitespace-nowrap font-medium text-gray-700 dark:text-gray-700">
                Vikas Kumar
              </span>
              <ChevronDown className="w-4 h-4 ml-2 -mt-1" aria-hidden="true" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="relative mr-5 outline-none">
            <nav className="">
              <ul className="flex flex-col">
                {userArr.map(({ Icon, title, type, slug }) => (
                  <li key={title}>
                    {type == "link" && (
                      <Link
                        href={slug!}
                        className="flex items-center justify-start gap-1 w-full hover:bg-gray-100 py-2 rounded-md px-2"
                      >
                        <Icon className="w-4 h-4 mr-2" aria-hidden="true" />
                        <span className="text-sm font-medium text-gray-700">
                          {title}
                        </span>
                      </Link>
                    )}
                    {type == "button" && (
                      <Button
                        type="button"
                        className="outline-none p-2 flex justify-start gap-1 w-full"
                        variant={"ghost"}
                      >
                        <Icon className="w-4 h-4 mr-2" aria-hidden="true" />
                        <span className="text-sm font-medium text-gray-700">
                          {title}
                        </span>
                      </Button>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
