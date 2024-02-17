import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import HowItWorkSection from "@/components/Home/HowItWorkSection";
import CustomerSupportScreen from "@/components/Home/CustommerSupportScreen";
import { supabase } from "@/supabase";
import RecentUpdates from "@/components/Home/RecentUpdates";
import ExamQuiz from "@/components/Home/ExamQuiz";
import AppTemplate from "@/components/Home/AppDownloadTemplate";

import HomeSection from "@/components/Home/HomeSection";

const CategoriesSection = dynamic(
  () => import("@/components/Home/CategorieSection"),
  {
    ssr: false,
  }
);

const BrowseCourseSection = dynamic(
  () => import("@/components/Home/BrowseCourseSection")
);

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const { data } = await supabase.auth.getUser();
  console.log("data", data);
  await supabase.auth.getUser();
  return (
    <main>
      {/* <div className={"flex px-20 mt-10 space-x-8  items-center"}>
        <div className={"w-1/2"}>
          <h1
            className={cn(
              "text-5xl leading-normal tracking-wide font-bold",
              inter.className
            )}
          >
            Unlock Your Potential with Interactive Learning.
          </h1>
          <p className={"text-sm text-gray-400 mt-5 leading-6"}>
            Embark on a Journey of Knowledge Discovery: Unlock Your Potential,
            Transform Your Skills, and Shape Your Future with our Interactive
            Courses, Comprehensive Study Materials, and Engaging Assessments.
          </p>

          <div className={"mt-6"}>
            <Button className={"w-[160px] flex items-center space-x-2"}>
              <User />
              <p>Join PaperAdda</p>
            </Button>
          </div>
        </div>
        <div className={"w-1/2 relative h-[600px]"}>
          <div
            className={
              "absolute w-full h-full bg-gray-950 opacity-50 drop-shadow-lg  rounded-3xl"
            }
          ></div>
          <img
            alt={""}
            className={
              "w-full shadow-xl shadow-grey-200 h-full object-cover rounded-3xl rotate-12"
            }
            src={
              "https://images.pexels.com/photos/3563697/pexels-photo-3563697.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
          />
        </div>
      </div> */}

      <HomeSection />
      <Suspense fallback={<p>Loading...</p>}>
        <CategoriesSection />
      </Suspense>

      <HowItWorkSection />
      <BrowseCourseSection />
      <RecentUpdates />
      <ExamQuiz />

      <CustomerSupportScreen />
      <AppTemplate />
    </main>
  );
}
