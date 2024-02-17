import { cn } from "@/lib/utils";
import { Rubik_Dirt } from "next/font/google";
import React from "react";

export const fontSans = Rubik_Dirt({ weight: "400", subsets: ["cyrillic"] });

const Helper = () => {
  return (
    <div className="flex items-center gap-2 w-full">
      {/* <div className="relative w-[25px] h-[25px]">
          <Image src="/Logo.ico" alt="Paisa dekho" fill priority />
          <span>PaperAdd</span>
        </div> */}
      <h2
        className={cn(
          "text-3xl font-semibold tracking-wide",
          fontSans.className
        )}
      >
        PaperAdda
      </h2>
    </div>
  );
};

export default Helper;
