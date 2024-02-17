"use client";

import { Input } from "../ui/input";
import { Card, CardContent } from "../ui/card";
import {
  BookIcon,
  BuildingIcon,
  CalculatorIcon,
  ClipboardListIcon,
  FlaskRoundIcon,
  SchoolIcon,
  SearchIcon,
  SyringeIcon,
  TargetIcon,
} from "lucide-react";
import { Button } from "../ui/button";

const CategoriesSection = () => {
  const categories = [
    {
      id: 0,
      title: "Engineering",
      Icon: BookIcon,
      color: "green",
    },
    {
      id: 1,
      title: "Medical",
      Icon: SyringeIcon,
      color: "blue",
    },
    {
      id: 2,
      title: "Management",
      Icon: BuildingIcon,
      color: "purple",
    },
    {
      id: 3,
      title: "Law",
      Icon: CalculatorIcon,
      color: "red",
    },
    {
      id: 4,
      title: "Design",
      Icon: ClipboardListIcon,
      color: "yellow",
    },
    {
      id: 5,
      title: "Science",
      Icon: SchoolIcon,
      color: "indigo",
    },
    {
      id: 6,
      title: "Commerce",
      Icon: FlaskRoundIcon,
      color: "green",
    },
    {
      id: 7,
      title: "Arts",
      Icon: TargetIcon,
      color: "blue",
    },
  ];

  return (
    <section className="my-5 w-full px-10">
      <div className="bg-white py-12">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl leading-9 font-extrabold text-gray-900">
              Select your goal / exam
            </h2>
            <p className="mt-3 text-base leading-6 text-gray-500">
              200+ exams available for your preparation
            </p>
          </div>
          <div className="mb-12">
            <div className="relative w-full max-w-lg">
              <SearchIcon className="absolute left-3 mt-[0.65rem] text-gray-600 h-5 w-5" />
              <Input
                placeholder="Type the goal / exam you're preparing for"
                type="text"
                className="pl-10"
              />
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Popular goals
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map(({ Icon, id, title, color }) => (
                <Card key={id} className="w-full py-8 cursor-pointer hover:bg-gray-100">
                  <CardContent>
                    <Icon className={`h-12 w-12 mx-auto text-${color}-600`} />
                    <div className="mt-4 text-center">
                      <p className="text-sm leading-5 font-medium text-gray-900">
                        {title}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="mt-10 w-full flex">
            <Button variant="outline">See all goals (200+)</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
