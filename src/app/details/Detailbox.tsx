"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "../../lib/store";

const DetailBox = () => {
  const router = useRouter();
  const golbalEmail = useStore((state) => state.golbalEmail);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleContinue = () => {
    toSentenceCase(username);
    console.log(username, password);
    setUsername("");
    setPassword("");
  };

  function toSentenceCase(str: string) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  return (
    <div>
      <div className="bg-white rounded-2xl font-source_sans px-5 lg:px-10 py-5 xl:px-20 xl:py-10 text-center flex flex-col gap-4 items-center relative">
        <button onClick={() => router.push("/")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill="#00000050"
            className="h-7 absolute top-5 left-7"
          >
            <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
          </svg>
        </button>
        <div>
          <h1 className="text-3xl pb-2">Welcome!</h1>
          <p>Promotional line by Eshway; Promotional line by Eshway;</p>
        </div>

        <div className="rounded-lg w-full h-10 mt-4 xl:mt-8 bg-[rgb(247,247,247)] border-2 border-slate-300 flex items-center">
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
            readOnly
            placeholder={`${golbalEmail}` || "email is not provided"}
            className="flex-1 border-none outline-none bg-transparent ml-3 text-black/50 font-bold"
          />
        </div>
        <div className="w-full mt-6">
          <div className="rounded-lg w-full h-10 mt-4 xl:mt-8 bg-[rgb(247,247,247)] border-2 border-slate-300 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="#64748b"
              className="w-6 ml-6"
            >
              <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
            </svg>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(toSentenceCase(e.target.value))}
              placeholder="Enter Full Name"
              className="flex-1 border-none outline-none bg-transparent ml-3 text-black/50 font-bold"
            />
          </div>
          <div className="rounded-lg w-full h-10 mt-4 xl:mt-8 bg-[rgb(247,247,247)] border-2 border-slate-300 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="#64748b"
              className="w-6 ml-6"
            >
              <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
            </svg>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create Password"
              className="flex-1 border-none outline-none bg-transparent mx-3 text-black/50 font-bold"
            />
            <button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  fill="#64748b"
                  className="w-6 mr-4"
                >
                  <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  fill="#64748b"
                  className="w-6 mr-4"
                >
                  <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
                </svg>
              )}
            </button>
          </div>
          <p className="text-sm text-[#315EFF] mt-2">
            Already have an account?Log In
          </p>
        </div>

        <button
          onClick={handleContinue}
          className="rounded-2xl w-full h-10 bg-[#1B232E] text-white shadow-lg font-semibold my-10"
        >
          Continue
        </button>

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
