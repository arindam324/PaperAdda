import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BookOpenIcon,
  CameraIcon,
  ClockIcon,
  RadioIcon,
  UsersIcon,
} from "lucide-react";

export function CustomerSupportScreen() {
  return (
    <div className="w-full mt-4 flex mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-6 w-[40%] col-span-1">
        <h1 className="text-4xl font-bold leading-tight text-gray-900">
          Start learning with PaperAdda
        </h1>
        <p className="text-base text-gray-600">
          Get unlimited access to structured courses & doubt clearing sessions
        </p>
        <Button className="bg-green-500 text-white">Start learning</Button>
      </div>
      <div className="grid grid-cols-3 gap-4 w-full">
        <Card className="flex flex-col col-span-1 items-start p-6 bg-white rounded-lg border border-gray-200">
          <BookOpenIcon className="text-yellow-400 w-6 h-6 mb-4" />
          <h5 className="text-xl font-semibold mb-2">Exam categories</h5>
          <p className="text-3xl font-bold text-green-600">60+</p>
        </Card>
        <Card className="flex flex-col col-span-1 items-start p-6 bg-white rounded-lg border border-gray-200">
          <UsersIcon className="text-blue-400 w-6 h-6 mb-4" />
          <h5 className="text-xl font-semibold mb-2">Educators</h5>
          <p className="text-3xl font-bold text-green-600">14k+</p>
        </Card>
        <Card className="flex flex-col items-start p-6 bg-white rounded-lg border border-gray-200">
          <CameraIcon className="text-orange-400 w-6 h-6 mb-4" />
          <h5 className="text-xl font-semibold mb-2">Video lessons</h5>
          <p className="text-3xl font-bold text-green-600">1M+</p>
        </Card>
        <Card className="flex flex-col items-start p-6 bg-white rounded-lg border border-gray-200">
          <RadioIcon className="text-pink-400 w-6 h-6 mb-4" />
          <h5 className="text-xl font-semibold mb-2">Daily live classes</h5>
          <p className="text-3xl font-bold text-green-600">1.5k+</p>
        </Card>
        <Card className="flex flex-col items-start p-6 bg-white rounded-lg border border-gray-200">
          <ClockIcon className="text-teal-400 w-6 h-6 mb-4" />
          <h5 className="text-xl font-semibold mb-2">Mins. watched</h5>
          <p className="text-3xl font-bold text-green-600">3.2B+</p>
        </Card>
      </div>
    </div>
  );
}

export default CustomerSupportScreen;
