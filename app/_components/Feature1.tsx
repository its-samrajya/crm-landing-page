import { ArrowRight, Layers, Mails, Sparkle, UserPlus } from "lucide-react";
import React from "react";

type contentType = {
  icon: React.ReactNode;
  title: string;
  description: string;
  button: string;
};

const content: contentType[] = [
  {
    icon: <Mails size={40} className="text-amber-100 mb-6" />,
    title: "Universal Inbox",
    description: "Manage all your communications from one universal.",
    button: "Explore",
  },
  {
    icon: <UserPlus size={40} className="text-amber-100 mb-6" />,
    title: "Contact Management",
    description:
      "Create contact records, log sales activities, and view interactions.",
    button: "Explore",
  },
  {
    icon: <Layers size={40} className="text-amber-100 mb-6" />,
    title: "Pipeline Management",
    description:
      "Easily add your deals, assign tasks to your team, and track your prospects.",
    button: "Explore",
  },
];

const Feature1 = () => {
  return (
    <div className="bg-[#F7F7F7] pt-24 flex flex-col justify-center items-center rounded-4xl mt-2">
      <div className="flex items-center max-w-7xl   justify-center flex-col">
        <p className="text-[#17A566]     font-semibold text-[14px] flex gap-1 items-center">
          <Sparkle size={15} />
          SMART + FAST
        </p>
        <div className="flex flex-col items-center mb-5   max-w-xl font-semibold mt-4 text-[#273F43]">
          <span className=" text-center   px-2 sm:px-0 text-[30px]/10 xl:text-[38px]/16 ">
            Doing smarter, not harder
          </span>
          <p className="text-center text-[#273F43]/70 mt-6  font-medium px-4   lg:text-[16px]  xl:text-[17px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            ducimus eos veniam molestias. Architecto, fugiat.
          </p>
        </div>
      </div>

      <div className="grid sm:px-3 max-w-7xl sm:grid-cols-2 xl:grid-cols-3 gap-2  pb-28 p-10 md:px-16 lg:px-30 ">
        {content.map((value) => {
          return (
            <div
              key={value.title}
              className="rounded-xl  p-10 bg-[#0A373C] flex flex-col  "
            >
              {value.icon}
              <p className="text-white text-[22px] font-medium mb-2">
                {value.title}
              </p>
              <p className="  text-[#fff]/70 text-[15px]  ">
                {value.description}
              </p>
              <button className=" relative group overflow-hidden cursor-pointer  w-fit py-2 xl:py-2.5 px-5 text-yellow-50 mt-6 rounded-4xl border-[0.5px] border-yellow-50/30 ">
                <span className="absolute inset-0 w-full h-full bg-amber-100 transform scale-x-0 origin-left rounded-tr-full rounded-br-full group-hover:scale-x-100 transition-transform duration-700 ease-in-out z-0"></span>
                <span className="absolute  inset-0 w-full h-full bg-amber-100 transform scale-x-0 origin-right rounded-tl-full   group-hover:scale-x-100 transition-transform duration-700 ease-in-out z-0"></span>

                <span className="inline-flex   relative z-10 group-hover:text-black transition-colors duration-700  gap-2 justify-center items-center">
                  {value.button} <ArrowRight size={20} />
                </span>
              </button>
            </div>
          );
        })}

        {/* <div className="rounded-xl p-10 bg-[#0A373C] flex flex-col  ">

          <UserPlus size={40} className="text-amber-100 mb-6" />
          <p className="text-white text-[22px] font-medium mb-2">Contact Management</p>
          <p className="w-[90%]  text-[#fff]/70 text-[15px]  ">Create contact records, log sales activities, and view interactions.</p>
          <div className="inline-flex justify-center items-center w-fit py-2 px-5 text-yellow-50 mt-6 rounded-4xl gap-2 border-[0.5px] border-yellow-50/30 ">Explore <ArrowRight size={20} /></div>

        </div>
        <div className="rounded-xl p-10 bg-[#0A373C] flex flex-col  ">

          <Layers size={40} className="text-amber-100 mb-6" />
          <p className="text-white text-[22px] font-medium mb-2">Pipeline Management</p>
          <p className="w-[100%]  text-[#fff]/70 text-[15px]  ">Easily add your deals, assign tasks to your team, and track your prospects.</p>
          <div className="inline-flex justify-center items-center text-yellow-50 w-fit py-2 px-5 mt-6 rounded-4xl gap-2 border-[0.5px] border-yellow-50/30 ">Explore <ArrowRight size={20} /></div>

        </div> */}
      </div>
    </div>
  );
};

export default Feature1;
