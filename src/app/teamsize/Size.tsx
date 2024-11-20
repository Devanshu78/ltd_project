import React from "react";
import { useRouter } from "next/navigation";
const sizeList = [
  "Only me",
  "2-5",
  "6-10",
  "11-15",
  "16-25",
  "26-50",
  "51-100",
  "101-500",
];

const Size = () => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-5 px-4 md:px-10 xl:px-20">
      {sizeList.map((item, index) => (
        <div
          key={index}
          className="font-soure_sans font-bold border border-black/25 py-3 px-6 rounded-2xl text-center text-black/75 cursor-pointer"
          onClick={() => router.push("/")}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Size;
