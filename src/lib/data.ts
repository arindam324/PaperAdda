import {
  BookCopy,
  BookOpenCheck,
  BookOpenText,
  CircleDot,
  Fuel,
  LucideProps,
} from "lucide-react";
import React from "react";

import { createElement } from "react";

interface UserStat {
  id: number;
  Icon: React.FunctionComponent<LucideProps>;
  count: number;
  label: string;
}
export const userStats: UserStat[] = [
  {
    id: 1,
    Icon: BookOpenText,
    count: 120,
    label: "Enrolled courses",
  },
  {
    id: 2,
    Icon: BookCopy,
    count: 17,
    label: "Active courses",
  },
  {
    id: 3,
    Icon: BookOpenCheck,
    count: 64,
    label: "Completed courses",
  },
  {
    id: 4,
    Icon: Fuel,
    count: 22000,
    label: "Total points earned",
  },
  {
    id: 5,
    Icon: CircleDot,
    count: 20,
    label: "Total completed quiz",
  },
];

export const planningData = [
  {
    id: 1,
    label: "3D animation learning",
    date: "Dec 14, 2024 08:30 PM",
  },
  {
    id: 2,
    label: "Handle ux research",
    date: "Dec 15, 2024 08:30 PM",
  },
  {
    id: 3,
    label: "Machine learning",
    date: "Dec 16, 2024 06:30 PM",
  },
  {
    id: 4,
    label: "Web development",
    date: "Dec 19, 2024 02:30 PM",
  },
  {
    id: 5,
    label: "Cloud computing",
    date: "Dec 25, 2024 08:30 PM",
  },
];

export const courseCompletionData = [
  {
    id: 1,
    progress: 50,
    label: "Data with python",
    lessons: 10,
  },
  {
    id: 2,
    progress: 67,
    label: "Code foundation",
    lessons: 5,
  },
  {
    id: 3,
    progress: 30,
    label: "Styling with css",
    lessons: 13,
  },
  {
    id: 4,
    progress: 92,
    label: "DSA",
    lessons: 20,
  },
];
