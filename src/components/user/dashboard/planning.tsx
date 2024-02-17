import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { planningData } from "@/lib/data";
import { cn } from "@/lib/utils";
import React from "react";

export function Planning() {
  return (
    <div className="flex flex-col rounded-md p-5 gap-2 w-full bg-white">
      <h2 className="font-bold text-lg text-gray-700">My Planning</h2>
      <Separator />
      <ul className="flex items-center flex-wrap gap-6 justify-center h-[500px] overflow-y-auto w-full">
        {planningData.map(({ date, id, label }) => (
          <li key={id}>
            <Card key={id} className="bg-blue-50">
              <CardContent className="flex items-center justify-center gap-3 py-3">
                <div
                  className={cn(
                    "w-12 h-10 rounded-md border bg-gradient-to-l from-blue-500 rom-blue-500 to-green-500"
                  )}
                />
                <div>
                  <h3 className="font-bold text-sm text-slate-700">{label}</h3>
                  <span className="text-xs text-muted-foreground">{date}</span>
                </div>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
