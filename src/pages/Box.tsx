"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const Box = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    router.push("/otpverification");
  };

  return (
    <div>
      <div className="w-[600px]  bg-white rounded-2xl font-source_sans px-20 py-10 text-center flex flex-col gap-4 items-center">
        <div>
          <h1 className="text-3xl pb-2">Welcome!</h1>
          <p>Promotional line by Eshway; Promotional line by Eshway;</p>
        </div>
        <div className="rounded-lg w-full h-10 mt-8 bg-[rgb(247,247,247)] border-2 border-slate-300 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill="#64748b"
            className="w-6 ml-6"
          >
            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
          </svg>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Work email"
            className="flex-1 border-none outline-none bg-transparent ml-3 text-black/50 font-bold"
          />
        </div>

        <p className="text-sm text-slate-500">Or continue with:</p>

        <div className="w-full font-sans">
          <SocialIcon />
        </div>

        <button
          className="rounded-2xl w-full h-10 bg-[#1B232E] text-white shadow-lg font-semibold mt-6"
          onClick={handleSubmit}
        >
          <p className="flex items-center justify-center h-full">Sign up</p>
        </button>

        <p className="text-blue-500">
          Already have an LTD account? <a href="">Log In</a>
        </p>

        <p className="w-full border-b border-slate-400"></p>

        <img src="eshway_logo.png" alt="eshway logo" className="h-10 w-fit" />
        <p className="text-sm">
          Promotional line by Eshway; Promotional line by Eshway;
        </p>
      </div>
    </div>
  );
};

export default Box;

const SocialIcon = () => {
  const router = useRouter();
  const handleClick = async (Title: string) => {
    if (Title === "Google") {
      try {
        await signIn("google", { redirectTo: "/otpverification" });
      } catch (error: any) {
        console.log("signin error : ", error.message);
      }
    }
  };

  const iconList = [
    {
      img: "google.png",
      Title: "Google",
    },
    {
      img: "microsoft.png",
      Title: "Microsoft",
    },
    {
      img: "linkedin.png",
      Title: "Linkedin",
    },
  ];

  return (
    <>
      {iconList.map((icon, index) => (
        <button
          key={index}
          className="w-full mb-4 bg-[rgb(247,247,247)] border-2 border-slate-300 rounded-lg h-10 flex items-center"
          onClick={() => handleClick(icon.Title)}
        >
          <div className="flex items-center gap-2 w-1/4 m-auto">
            <img src={icon.img} alt={icon.Title} className="h-7" />
            <p className="font-semibold text-sm text-slate-500">{icon.Title}</p>
          </div>
        </button>
      ))}
    </>
  );
};
function handleClick(Title: string): void {
  throw new Error("Function not implemented.");
}
