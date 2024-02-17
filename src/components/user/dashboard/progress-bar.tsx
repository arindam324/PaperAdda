import React from "react";

interface CircularProgressBar {
  radius?: number;
  strokeWidth?: number;
  progress: number;
}

export const CircularProgressBar = ({
  radius = 16,
  strokeWidth = 4,
  progress,
}: CircularProgressBar) => {
  // Calculate the circumference
  const circumference = 2 * Math.PI * radius;
  // Calculate the progress offset
  const progressOffset = circumference - (progress / 100) * circumference;

  return (
    <svg
      className="w-32 h-32"
      viewBox={`0 0 ${2 * radius} ${2 * radius}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle */}
      <circle
        className="text-gray-200"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx={radius}
        cy={radius}
      />
      {/* Progress circle */}
      <circle
        className="text-blue-500"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={progressOffset}
        strokeLinecap="round"
        fill="transparent"
        r={radius}
        cx={radius}
        cy={radius}
      />
      {/* Text inside the circle */}
      <text
        className="text-center text-gray-700 text-lg"
        x="50%"
        y="50%"
        dy=".3em"
        dominantBaseline="middle"
        textAnchor="middle"
      >
        {progress}%
      </text>
    </svg>
  );
};
