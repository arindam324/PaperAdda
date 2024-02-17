import { Separator } from "@/components/ui/separator";
import React from "react";

export function Progress() {
  return (
    <div className="flex flex-col rounded-md p-5 gap-2 w-full h-[400px] bg-white">
      <h2 className="font-bold text-lg text-gray-700">Your Progress</h2>
      <Separator />
      <div className="flex items-center justify-center w-full">Empty Data</div>
    </div>
  );
}
