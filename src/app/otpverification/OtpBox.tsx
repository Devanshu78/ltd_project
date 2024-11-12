"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "./style.css";

let currentIndex: number = 0;
export default function OtpBox({ data }: any) {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const newOtp: string[] = [...otp];
    newOtp[currentIndex] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (!value) {
      currentIndex = Math.max(0, currentIndex - 1);
    } else {
      currentIndex = Math.min(5, currentIndex + 1);
    }
    setActive(currentIndex);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [active]);

  return (
    <div>
      <div className="w-[600px]  bg-white rounded-2xl font-source_sans px-20 py-10 text-center flex flex-col gap-4 items-center relative ">
        <Link href={"/"}>
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

        <div className="mt-5">
          <h1 className="text-2xl text-black/50 border-none outline-none p-6">
            We've emailed you a code
          </h1>

          <p className="text-black/50 pb-1">
            To complete the sign up process, enter the code sent on:
          </p>
          <p>{data?.user?.email || "founder@eshway.com"}</p>
        </div>

        <div className="flex gap-5 mt-5">
          {otp.map((_, index) => (
            <input
              ref={index == active ? inputRef : null}
              key={index}
              type="number"
              maxLength={1}
              value={otp[index]}
              onChange={(e) => {
                handleChange(e);
              }}
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  currentIndex = index;
                  setActive(currentIndex - 1);
                }
              }}
              className="w-12 h-12 bg-[#D9D9D933] rounded-lg outline-none text-center text-xl border-2 border-black/25 focus:border-black/75"
            />
          ))}
        </div>
        <p className="text-sm text-[#315EFF]">
          Didn't receive an email? Resend after 02:00
        </p>

        <Link
          href="/details"
          className="rounded-2xl w-full h-10 bg-[#1B232E] text-white shadow-lg font-semibold my-12"
        >
          <p className="flex items-center justify-center h-full">Sign up</p>
        </Link>

        <p className="w-full border-b border-black/25"></p>

        <img src="eshway_logo.png" alt="eshway logo" className="h-10 w-fit" />
        <p className="text-sm">
          Promotional line by Eshway; Promotional line by Eshway;
        </p>
      </div>
    </div>
  );
}
