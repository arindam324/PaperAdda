"use client";
import { Separator } from "@/components/ui/separator";
import { courseCompletionData } from "@/lib/data";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export function CourseCompletion() {
  return (
    <div className="flex flex-col rounded-md p-5 gap-2 w-full bg-white">
      <h2 className="font-bold text-lg text-gray-700">Course completion</h2>
      <Separator />
      <ul className="flex items-center flex-wrap gap-6 justify-center h-[300px] overflow-y-auto w-full">
        {courseCompletionData.map(({ id, label, lessons, progress }) => (
          <li key={id}>
            <Card key={id} className="bg-gray-100 flex-1">
              <CardContent className="flex items-center justify-center gap-3 py-3">
                <div className="w-[50px] h-[50px]">
                  <CircularProgressbar value={progress} text={`${progress}%`} />
                </div>
                <div>
                  <h3 className="font-bold text-sm w-[150px] truncate text-slate-700">
                    {label}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {lessons} Lessons
                  </span>
                </div>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
