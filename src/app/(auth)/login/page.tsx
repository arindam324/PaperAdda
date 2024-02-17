import React from "react";
import GoogleAuthForm from "@/components/auth/google-auth";
import LoginForm from "@/components/auth/login-form";
import { Rubik_Dirt } from "next/font/google";
import { cn } from "@/lib/utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { supabase } from "@/supabase";
import Link from "next/link";

// export const fontSans = Rubik_Dirt({ weight: "400", subsets: ["cyrillic"] });

const LoginPage = async () => {
  const token = cookies().get("token")?.value as string;

  if (token) {
    const data = await supabase.auth.getUser(token);
    console.log("data", data);
  }
  return (
    <section>
      <div className="grid gap-0 md:h-screen md:grid-cols-2">
        <div className="flex items-center justify-center bg-[#f2f2f7]">
          <div className="mx-auto max-w-xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
            <div className="mb-5 flex h-14 w-14 flex-col items-center justify-center bg-white md:mb-6 lg:mb-8">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a949eade6cf7d_Vector-2.svg"
                alt=""
                className="inline-block"
              />
            </div>
            <p className="mb-8 text-sm sm:text-base md:mb-12 lg:mb-16">
              One of the most striking features of PaperAdda is its intuitive
              user interface. From the moment I logged in, I found myself
              impressed by the clean layout and easy-to-navigate design. The
              dashboard provides a centralized hub for accessing course
              materials, announcements, assignments, and grades, allowing for
              seamless navigation between different sections. The intuitive menu
              system and search functionality further streamline the user
              experience, making it effortless to find the resources I need.
            </p>
            <p className="text-sm font-bold sm:text-base">Pravin Sharma</p>
            <p className="text-sm sm:text-sm">UPSC aspirant</p>
          </div>
        </div>
        <div className="flex items-center justify-center px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="max-w-md text-center">
            <h2 className="mb-8 text-3xl font-bold md:mb-12 md:text-5xl lg:mb-16">
              Sign In to Paperadda
            </h2>
            <div className="mx-auto mb-4 max-w-[400px] pb-4">
              <form name="wf-form-password" method="get">
                <div className="relative">
                  <img
                    alt=""
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9455fae6cf89_EnvelopeSimple.svg"
                    className="absolute left-[5%] top-[26%] inline-block"
                  />
                  <input
                    type="email"
                    className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="relative mb-4">
                  <img
                    alt=""
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a946794e6cf8a_Lock-2.svg"
                    className="absolute left-[5%] top-[26%] inline-block"
                  />
                  <input
                    type="password"
                    className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-[#333333]"
                    placeholder="Password (min 8 characters)"
                    required
                  />
                </div>
                <label className="mb-6 flex items-center justify-start pb-12 pl-5 font-medium md:mb-10 lg:mb-1">
                  <input
                    type="checkbox"
                    name="checkbox"
                    className="float-left -ml-[20px] mt-1"
                  />
                  <label
                    className="ml-4 inline-block cursor-pointer text-sm"
                    htmlFor="checkbox"
                  >
                    I agree with the{" "}
                    <a href="#" className="font-bold text-[#0b0b1f]">
                      Terms &amp; Conditions
                    </a>
                  </label>
                </label>
                <input
                  type="submit"
                  value="Login"
                  className="inline-block w-full cursor-pointer items-center bg-black px-6 py-3 text-center font-semibold text-white"
                />
              </form>
            </div>
            <Link href={"/register"}>
              <p className="text-sm text-[#636262] sm:text-sm">
                Don&apos;t have an accoount ?{" "}
                <span className="font-bold text-[#0b0b1f]">Register now</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
