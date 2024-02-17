"use client";

import { Avatar, Typography } from "@material-tailwind/react";
import {
  LayoutDashboard,
  Library,
  PenLine,
  Settings,
  ClipboardCheck,
  MoreHorizontal,
} from "lucide-react";
import Link from "next/link";

import { usePathname } from "next/navigation";

const Sidebar = () => {
  const NavItems = [
    {
      id: 0,
      name: "DashBoard",
      href: "/user/dashboard",
      icon: <LayoutDashboard />,
    },
    {
      id: 1,
      name: "Courses",
      href: "/user/courses",
      icon: <Library />,
    },
    {
      id: 2,
      name: "Quiz & Exams",
      href: "/user/Quiz",
      icon: <PenLine />,
    },
    {
      id: 3,
      name: "Setting",
      href: "/user/settings",
      icon: <Settings />,
    },
    {
      id: 4,
      name: "Report",
      href: "/user/report",
      icon: <ClipboardCheck />,
    },
  ];

  const pathname = usePathname();

  return (
    <aside className="w-[250px]  relative h-screen flex flex-col items-center py-5 bg-white">
      <div>
        <h2 className="text-2xl font-semibold">PaperAdda</h2>
      </div>
      <nav className="mt-10 space-y-2 w-[80%] mx-auto">
        <p className="text-xs uppercase font-semibold text-gray-500 ">
          Main Menu
        </p>

        {NavItems.map((item) => (
          <Link
            className={`flex items-center p-2 rounded-md ${
              pathname === item.href && `bg-gray-100`
            } space-x-5  py-2 `}
            key={item.name}
            href={item.href}
          >
            {item.icon}
            <p className={`text-xs  ${pathname === item.href && `font-bold`}`}>
              {item.name}
            </p>
          </Link>
        ))}
      </nav>

      <div className="absolute w-[90%]  bottom-4">
        <div className="flex items-center justify-between">
          <Avatar
            size="sm"
            placeholder={"https://i.pravatar.cc/150?img=38"}
            src="https://i.pravatar.cc/150?img=11"
          />

          <p className="text-xs ">Arindam Roy</p>
          <MoreHorizontal />
        </div>
        <div className="border-t-[1px] mt-2 pt-1 flex items-center justify-between ">
          <p className="text-xs font-semibold">Dark Mode</p>

          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
          </label>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
