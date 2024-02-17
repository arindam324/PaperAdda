import { BarChart, LineChartIcon, PieChart } from "lucide-react";
import Image from "next/image";

const HowItWorkSection = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-10 bg-white p-10">
      <div className="grid grid-cols-3 gap-10">
        <div className="flex flex-col items-center space-y-4 rounded-lg bg-[#e6f7ff] p-6">
          <div className="relative h-[150px] w-full rounded-lg">
            <Image
              fill
              src="./daily-live-class.svg"
              alt="Daily live classes"
              priority={true}
            />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">Daily live classes</h3>
            <p className="text-sm text-gray-600">
              Chat with educators, ask questions, answer live polls, and get
              your doubts cleared - all while the class is going on
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4 rounded-lg bg-[#ffe6e9] p-6">
          <div className="relative h-[150px] w-full rounded-lg ">
            <Image
              fill
              src="./practive-and-revise.svg"
              alt="Daily live classes"
              priority={true}
            />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">Practice and revise</h3>
            <p className="text-sm text-gray-600">
              Learning isn&apos;t just limited to classes with our practice
              section, mock tests and lecture notes shared as PDFs for your
              revision
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4 rounded-lg bg-[#fff4e6] p-6">
          <div className="relative h-[150px] rounded-lg w-full">
            <Image
              src="./learn-anytime-anywhere.svg"
              alt="Daily live classes"
              fill
              priority={true}
              className="w-full"
            />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">Learn anytime, anywhere</h3>
            <p className="text-sm text-gray-600">
              One subscription gets you access to all our live and recorded
              classes to watch from the comfort of any of your devices
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorkSection;
