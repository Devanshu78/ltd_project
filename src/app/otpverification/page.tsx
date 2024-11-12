import React from "react";
import OtpBox from "./OtpBox";
import { authConfig } from "@/auth";
import { getServerSession } from "next-auth";

const page = async ({ params }: { params: { email: string } }) => {
  const session = await getServerSession(authConfig);
  return (
    <>
      <div className="min-h-screen flex  bg-white text-black">
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="text-center">
            <p className="font-sans text-2xl p-2">We believe in</p>
            <h1 className="text-center text-4xl font-libre">
              {" "}
              Better <span className="text-[#D674FF] font-bold">team work</span>
              , <br />
              makes the dream work.{" "}
            </h1>
          </div>
          <img src="group_illustrator.png" alt="group illustrator" />
        </div>
        <div className="flex items-center justify-center flex-1 rounded-l-[96px] bg-gradient-to-t from-[#d674ff] to-[#edd7f7]">
          <OtpBox data={session} />
        </div>
      </div>
    </>
  );
};

export default page;
