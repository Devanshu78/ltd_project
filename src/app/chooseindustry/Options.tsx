import React from "react";
import { useRouter } from "next/navigation";

const Options = () => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 px-5 md:px-10 xl:px-20">
      {industryList.map((item, index) => (
        <div
          key={index}
          className="border border-black/25 rounded-3xl md:rounded-[3.5rem] px-4 md:px-10 py-2 space-y-1 cursor-pointer"
          onClick={() => router.push("/teamsize")}
        >
          <h1 className="font-bold text-xl text-black/75">{item.name}</h1>
          <p className="text-black/50">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Options;

const industryList = [
  {
    name: "Sofatware development",
    description: "Plan, build and ship agile projects",
  },
  {
    name: "Marketing",
    description: "Drive a marketing campaign from idea to execution",
  },
  {
    name: "IT Support",
    description: "Manage requests and incidents",
  },
  {
    name: "Operations",
    description: "Track activities and tasks to streamline processes",
  },
  {
    name: "Design",
    description: "Track and manage design requests at scale",
  },
  {
    name: "Sales",
    description: "Track leads and potential customers to achieve goals",
  },
  {
    name: "Customer Service",
    description: "Deliver exceptional service experiences",
  },
  {
    name: "Finance",
    description: "Manage requests like budgets and reports",
  },
  {
    name: "HR",
    description: "Track talent pipelines and streamline processes",
  },
  {
    name: "Other",
    description: "Organize tasks for a team or personal project",
  },
];
