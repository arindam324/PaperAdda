import Header from "@/components/user/dashboard/Header";
import Sidebar from "@/components/user/dashboard/Sidebar";
import { ActiveCourses } from "@/components/user/dashboard/active-courses";
import { CourseCompletion } from "@/components/user/dashboard/course-completion";
import { ExperienceIQ } from "@/components/user/dashboard/experience-iq";
import { HoursSpent } from "@/components/user/dashboard/hours-spent";
import { Planning } from "@/components/user/dashboard/planning";
import { Progress } from "@/components/user/dashboard/progress";
import { UserStats } from "@/components/user/dashboard/user-stats";

const ProgressBar = ({
  progressPercentage,
}: {
  progressPercentage: number;
}) => {
  return (
    <div className="h-1 w-full bg-gray-300">
      <div
        style={{ width: `${progressPercentage}%` }}
        className={`h-full ${
          progressPercentage < 70 ? "bg-red-600" : "bg-green-600"
        }`}
      ></div>
    </div>
  );
};

const CourseProgressWidget = ({ courseData }: any) => {
  const { progressPercentage, upcomingAssignments, modulesToComplete } =
    courseData;

  return (
    <div className="p-4 shadow rounded bg-white">
      <h2 className="text-xl font-bold mb-4">Course Progress</h2>
      <ProgressBar progressPercentage={progressPercentage} />
      <h3 className="mt-4 text-lg font-semibold">Upcoming Assignments</h3>
      <ul className="list-disc list-inside">
        {upcomingAssignments.map((assignment: any, index: number) => (
          <li key={index}>{assignment}</li>
        ))}
      </ul>
      <h3 className="mt-4 text-lg font-semibold">Modules to Complete</h3>
      <ul className="list-disc list-inside">
        {modulesToComplete.map((module: any, index: number) => (
          <li key={index}>{module}</li>
        ))}
      </ul>
    </div>
  );
};

const UserDashboard = () => {
  const courseData = {
    progressPercentage: 45,
    upcomingAssignments: ["Assignment  1", "Assignment  2"],
    modulesToComplete: ["Module  1", "Module  2"],
  };

  return (
    <section className="flex flex-col px-6 pt-6 gap-6 mb-6">
      <UserStats />
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 flex flex-col gap-6">
          <Progress />
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-4 h-[300px] rounded-md bg-white">
              <HoursSpent />
            </div>
            <div className="col-span-2 h-[500px] rounded-md bg-white">
              <Planning />
            </div>
          </div>
        </div>
        <aside className="col-span-1 gap-6 flex flex-col">
          <div className="w-full rounded-md bg-white h-[400px]">
            <ExperienceIQ />
          </div>
          <div className="w-full rounded-md bg-white h-[300px]">
            <ActiveCourses />
          </div>
          <div className="w-full rounded-md bg-white h-[400px]">
            <CourseCompletion />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default UserDashboard;
