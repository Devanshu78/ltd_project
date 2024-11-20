import React from "react";

const ProgressBar = () => {
  return (
    <div className="w-full sm:w-[90%] my-10 h-5 px-2 sm:px-5 flex justify-between">
      <div className="bg-[#e49effd0] rounded-3xl w-[28.58%] h-[1.25rem] flex justify-between">
        <div className="flex-1 relative h-full">
          <span className="h-full w-5 bg-black/10 absolute right-0 rounded-full"></span>
        </div>
        <div className="flex-1 relative h-full">
          <span className="h-full w-5 bg-black/10 absolute right-0 rounded-full"></span>
        </div>
      </div>
      <div className="flex-1 relative">
        <span className="h-full w-5 bg-black/10 absolute right-0 rounded-full"></span>
      </div>
      <div className="flex-1 relative">
        <span className="h-full w-5 bg-black/10 absolute right-0 rounded-full"></span>
      </div>
      <div className="flex-1 relative">
        <span className="h-full w-5 bg-black/10 absolute right-0 rounded-full"></span>
      </div>
      <div className="flex-1 relative">
        <span className="h-full w-5 bg-black/10 absolute right-0 rounded-full"></span>
      </div>
      <div className="flex-1 relative">
        <span className="h-full w-5 bg-black/10 absolute right-0 rounded-full"></span>
      </div>
    </div>
  );
};

export default ProgressBar;
