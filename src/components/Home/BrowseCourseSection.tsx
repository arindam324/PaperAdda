// CoursesByCategory.js
import React from "react";
import CourseCard from "./CourseCard";

const CoursesByCategory = () => {
  // Replace with actual data
  const courses = [
    {
      title: "React Basics",
      description: "Learn the fundamentals of React.",
      category: "Web Development",
    },
    // ... more courses
  ];

  // Filter courses by category if needed
  const filterCoursesByCategory = (category: string) => {
    return courses.filter((course) => course.category === category);
  };

  // Example usage of filterCoursesByCategory
  const webDevelopmentCourses = filterCoursesByCategory("Web Development");

  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="flex flex-col items-center">
          <h2 className="max-w-3xl text-center leading-relaxed text-3xl font-bold md:text-5xl">
            Discover Our Best Performing Courses{" "}
          </h2>
          <p className="mb-12 mt-4 text-[#636262]">
            Explore Top-Rated Programs to Elevate Your Learning Experience{" "}
          </p>
          <div className="mb-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            <a
              href="#"
              className="flex w-full flex-col gap-4 rounded-md border border-solid border-[#dfdfdf] px-4 py-8 text-black md:max-w-xs md:px-0 md:py-0"
            >
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b3e73014d2b281b443989_Rectangle%2024.png"
                alt=""
                className="inline-block h-60 w-full object-cover"
              />
              <div className="px-6 py-4">
                <p className="mb-4 text-xs font-semibold uppercase text-[#636262]">
                  lifestyle
                </p>
                <p className="mb-4 text-xl font-semibold">
                  The latest news with Flowspark
                </p>
                <p className="mb-6 text-[#636262]">
                  Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit
                  amet luctus venenatis elit ut aliquam, purus sit amet luctus
                  venenatis
                </p>
                <div className="mx-auto flex max-w-lg flex-row items-start">
                  <img
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a0eedb55609a35a565a7e_Rectangle%2035.png"
                    alt=""
                    className="mr-4 inline-block h-16 w-16 rounded-full object-cover"
                  />
                  <div className="flex flex-col items-start">
                    <h6 className="text-base font-bold">Laila Bahar</h6>
                    <div className="flex flex-col items-start text-sm text-[#636262] lg:flex-row">
                      <p>Sept 28, 2022</p>
                      <p className="ml-2 mr-2 hidden lg:block">-</p>
                      <p>6 mins read</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="flex w-full flex-col gap-4 rounded-md border border-solid border-[#dfdfdf] px-4 py-8 text-black md:max-w-xs md:px-0 md:py-0"
            >
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b3e74b505e1c72d8ec615_Rectangle%2024-2.png"
                alt=""
                className="inline-block h-60 w-full object-cover"
              />
              <div className="px-6 py-4">
                <p className="mb-4 text-xs font-semibold uppercase text-[#636262]">
                  lifestyle
                </p>
                <p className="mb-4 text-xl font-semibold">
                  The latest news with Flowspark
                </p>
                <p className="mb-6 text-[#636262]">
                  Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit
                  amet luctus venenatis elit ut aliquam, purus sit amet luctus
                  venenatis
                </p>
                <div className="mx-auto flex max-w-lg flex-row items-start">
                  <img
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a0f4adfb4938a1a06002c_Rectangle%2035-2.png"
                    alt=""
                    className="mr-4 inline-block h-16 w-16 rounded-full object-cover"
                  />
                  <div className="flex flex-col items-start">
                    <h6 className="text-base font-bold">Laila Bahar</h6>
                    <div className="flex flex-col items-start text-sm text-[#636262] lg:flex-row">
                      <p>Sept 28, 2022</p>
                      <p className="ml-2 mr-2 hidden lg:block">-</p>
                      <p>6 mins read</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="flex w-full flex-col gap-4 rounded-md border border-solid border-[#dfdfdf] px-4 py-8 text-black md:max-w-xs md:px-0 md:py-0"
            >
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b3e771d90b7a0fab56547_Rectangle%2024-1.png"
                alt=""
                className="inline-block h-60 w-full object-cover"
              />
              <div className="px-6 py-4">
                <p className="mb-4 text-xs font-semibold uppercase text-[#636262]">
                  lifestyle
                </p>
                <p className="mb-4 text-xl font-semibold">
                  The latest news with Flowspark
                </p>
                <p className="mb-6 text-[#636262]">
                  Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit
                  amet luctus venenatis elit ut aliquam, purus sit amet luctus
                  venenatis
                </p>
                <div className="mx-auto flex max-w-lg flex-row items-start">
                  <img
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a0f4c654996022503979d_Rectangle%2035-1.png"
                    alt=""
                    className="mr-4 inline-block h-16 w-16 rounded-full object-cover"
                  />
                  <div className="flex flex-col items-start">
                    <h6 className="text-base font-bold">Laila Bahar</h6>
                    <div className="flex items-start max-[991px]:flex-col lg:items-center">
                      <p>Sept 28, 2022</p>
                      <p className="ml-2 mr-2 hidden lg:block">-</p>
                      <p>6 mins read</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <a
            href="#"
            className="flex flex-row items-center bg-[#276ef1] px-8 py-4 font-semibold text-white transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"
          >
            <p className="mr-6 font-bold">View More</p>
            <svg
              fill="currentColor"
              className="h-4 w-4 flex-none"
              viewBox="0 0 20 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Arrow Right</title>
              <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoursesByCategory;
