import React from "react";
import Image from "next/image";
const AppTemplate = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="mt-4 mx-auto flex p-2 bg-[#151515] rounded-lg shadow-lg overflow-hidden">
        {/* <img
          className="w-full  object-cover object-center"
          src="/app_img.png"
          alt="App Image"
        /> */}

        <div className="w-[30%] h-[350px] relative">
          <Image src="/mobile_app.png" fill alt="" className="object-contain" />
        </div>
        <div className="p-6 flex  flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-200 mb-2">
            PaperAdda
          </h2>
          <p className="text-gray-400 text-base mb-4">
            Your app description goes here. Describe what your app does and its
            key features.
          </p>
          <div className="flex items-center justify-between">
            <a
              href="https://play.google.com/store/apps/details?id=your.app.package"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-emerald-600 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 inline-block mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 2.05v13.396l5.53 3.44c.582.361 1.336.044 1.336-.675V5.273c0-.72-.754-1.037-1.336-.675L9 2.05z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 15v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2"
                />
              </svg>
              Download on Google Play
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppTemplate;
