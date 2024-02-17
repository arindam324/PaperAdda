"use client";
import React from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";

const GoogleAuthForm = () => {
  return (
    <form className="flex flex-col gap-2">
      <button
        type="submit"
        className="relative flex items-center w-full border rounded-md gap-2 group px-5 py-[6px] hover:bg-slate-100/90"
      >
        <div className="relative w-[28px] h-[28px]">
          <Image
            fill
            priority
            src="/google.svg"
            alt="Google"
            className="object-cover"
          />
        </div>
        <span className="text-sm text-neutral-700">Continue with Google</span>
        <MoveRight className="hidden group-hover:block w-4 absolute right-4 animate-in transition text-neutral-500" />
      </button>
    </form>
  );
};

export default GoogleAuthForm;
