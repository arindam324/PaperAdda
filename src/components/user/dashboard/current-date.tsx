import { Calendar } from "lucide-react";
import React from "react";

export function CurrentDate() {
  const date = new Date();
  const currentDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <div className="border rounded-md px-2 py-2 text-center flex items-center justify-center">
      <Calendar className="w-4 h-4 inline-block mr-1 -mt-0.5" />
      <h3 className="text-sm font-medium leading-6 text-gray-900">
        {currentDate}
      </h3>
    </div>
  );
}
