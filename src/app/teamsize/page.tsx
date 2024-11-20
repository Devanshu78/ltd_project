"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ProgressBar from "./ProgressBar";
import Size from "./Size";

const Page = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#d574ffd0] to-[#f4e1f5a0] flex justify-center items-center font-source_sans">
      <div className="h-screen w-full sm:h-auto sm:w-auto bg-white sm:rounded-3xl">
        <div className="px-5 py-10 flex items-center flex-col relative">
          <button onClick={() => router.push("/chooseindustry")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="#00000050"
              className="h-7 absolute top-5 left-7"
            >
              <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
            </svg>
          </button>

          <img src="eshway_logo.png" alt="eshway logo" className="h-10 w-fit" />
          <p className="text-sm text-center">
            Promotional line by Eshway; Promotional line by Eshway;
          </p>

          <h1 className="text-2xl sm:text-3xl mt-10 text-center">
            How many people are in your team?
          </h1>

          <p className="text-black/50 mt-6 text-center">
            So that your personalized workspace can accommodate all of them.
          </p>
        </div>

        <Size />

        {/* //TODO: I don't know how to make this dynamic */}
        <ProgressBar />
      </div>
    </div>
  );
};

export default Page;
