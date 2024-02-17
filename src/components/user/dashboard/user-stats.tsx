import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { userStats } from "@/lib/data";
import React from "react";

export function UserStats() {
  return (
    <div className="flex flex-grow justify-between w-full">
      {userStats.map(({ Icon, count, id, label }) => (
        <Card key={id} className="group">
          <CardContent>
            <div className="flex items-center">
              <div className="group-hover:bg-gray-100 p-2 rounded-full">
                <Icon className="h-6 w-6 " />
              </div>

              <div className="ml-4 mt-5">
                <p className="text-3xl font-extrabold leading-9 text-primary-100">
                  {count}
                </p>
                <p className="text-xs font-medium leading-6 text-muted-foreground">
                  {label}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
