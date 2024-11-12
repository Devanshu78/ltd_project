import React from "react";
import Link from "next/link";

const DetailBox = () => {
  return (
    <div>
      <div className="w-[600px]  bg-white rounded-2xl font-source_sans px-20 py-10 text-center flex flex-col gap-4 items-center relative">
        <Link href={"/otpverification"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill="#00000050"
            className="h-7 absolute top-5 left-7"
          >
            <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
          </svg>
        </Link>
        <div>
          <h1 className="text-3xl pb-2">Welcome!</h1>
          <p>Promotional line by Eshway; Promotional line by Eshway;</p>
        </div>

        <Link
          href="/details"
          className="rounded-2xl w-full h-10 bg-[#1B232E] text-white shadow-lg font-semibold mt-10"
        >
          <p className="flex items-center justify-center h-full">Sign up</p>
        </Link>
        <p className="text-sm text-[#315EFF]">Already have an account?Log In</p>

        <p className="w-full border-b border-black/25"></p>

        <img src="eshway_logo.png" alt="eshway logo" className="h-10 w-fit" />
        <p className="text-sm">
          Promotional line by Eshway; Promotional line by Eshway;
        </p>
      </div>
    </div>
  );
};

export default DetailBox;
