"use client";
import { CircleCheck, Sparkle } from "lucide-react";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className=" bg-white h-[1900px] sm:h-[2100px] md:h-[1540px] xl:h-[1000px] mt-2"
    >
      <div className="h-full  ">
        <div className="flex gap-2 h-full  relative ">
          <div className="bg-[#F7F7F7] hidden xl:block w-[15%] rounded-4xl  "></div>
          <div className="bg-[#F7F7F7] w-full xl:w-[70%] rounded-4xl    ">
            <div className="flex items-center mt-24 justify-center flex-col">
              <p className="text-[#17A566]     font-semibold text-[14px] flex gap-1 items-center">
                <Sparkle size={15} />
                PLANS & PRICING
              </p>
              <div className="flex flex-col items-center   max-w-xl font-semibold mt-2 text-[#273F43]">
                <span className=" text-center px-2 sm:px-0 text-[30px]/10 xl:text-[38px]/16 ">
                  Transparent pricing for all
                </span>
                <p className="text-center text-[#273F43]/70 mt-6  font-medium px-4   lg:text-[16px]  xl:text-[17px]">
                  Every business is unique, find the perfect plan for you
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#F7F7F7] hidden xl:block w-[15%] rounded-4xl "></div>

          <div className="absolute inset-x-0  top-72  lg:top-80  px-4 md:px-8 lg:px-16 xl:px-28">
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
              <div className="flex flex-col border-8 rounded-2xl bg-white border-white">
                <div className="bg-[#ECFFDD] rounded-xl p-5 sm:p-7">
                  <p className="font-semibold text-[18px] sm:text-[20px] pb-2">
                    Personal
                  </p>
                  <p className="pb-4 text-[15px] sm:text-[16px] font-medium text-[#273F43]/80 max-w-xs">
                    Designed for personal use and freelancers.
                  </p>
                  <p>
                    <span className="font-semibold text-[45px] sm:text-[50px]">
                      $64
                    </span>
                    <span className="text-[15px] sm:text-[16px] text-[#273F43]/80 font-medium pl-2">
                      /month
                    </span>
                  </p>
                  <div className="flex cursor-pointer hover:bg-[#0A373C]/80  justify-center items-center py-3 sm:py-4 px-6 text-yellow-50 mt-4 rounded-4xl bg-[#0A373C] border-[0.5px] border-yellow-50/30">
                    Get Started
                  </div>
                </div>
                <div className="bg-white p-5 sm:p-7">
                  <p className="pb-3 font-semibold text-[17px] sm:text-[18px]">
                    Features
                  </p>
                  <ul className="flex flex-col gap-2 sm:gap-3">
                    <li className="flex items-center gap-2 text-[#273F43]/90 text-[14px] sm:text-[15px] font-medium">
                      <CircleCheck
                        fill="#0A373C"
                        size={25}
                        className="text-white"
                      />
                      Ticketing system
                    </li>
                    <li className="flex items-center gap-2 text-[#273F43]/90 text-[14px] sm:text-[15px] font-medium">
                      <CircleCheck
                        fill="#0A373C"
                        size={25}
                        className="text-white"
                      />
                      Email, chat, voice, and more
                    </li>
                    <li className="flex items-center gap-2 text-[#273F43]/90 text-[14px] sm:text-[15px] font-medium">
                      <CircleCheck
                        fill="#0A373C"
                        size={25}
                        className="text-white"
                      />
                      1,000+ apps & integrations
                    </li>
                    <li className="flex items-center gap-2 text-[#273F43]/90 text-[14px] sm:text-[15px] font-medium">
                      <CircleCheck
                        fill="#E3E4E8"
                        size={25}
                        className="text-white"
                      />
                      Multiple ticket forms
                    </li>
                    <li className="flex items-center gap-2 text-[#273F43]/90 text-[14px] sm:text-[15px] font-medium">
                      <CircleCheck
                        fill="#E3E4E8"
                        size={25}
                        className="text-white"
                      />
                      Customer satisfaction (CAST)
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col border-8 rounded-2xl bg-white border-white">
                <div className="bg-[#0A373C] rounded-xl p-5 sm:p-7  ">
                  <div className="flex gap-2">
                    <p className="font-semibold text-white text-[18px] sm:text-[20px] pb-2">
                      Growth
                    </p>
                    <div className="bg-[#31555B] h-5 px-2 mt-[3px] rounded-md flex items-center">
                      <span className="text-yellow-50 text-[11px] sm:text-[12px] tracking-widest">
                        MOST POPULAR
                      </span>
                    </div>
                  </div>
                  <p className="pb-4 text-[15px] sm:text-[16px] font-medium text-[#fff]/70 max-w-xs">
                    Best for small to medium-sized business.
                  </p>
                  <p>
                    <span className="font-semibold text-white text-[45px] sm:text-[50px]">
                      $115
                    </span>
                    <span className="text-[15px] sm:text-[16px] text-[#fff]/70 font-medium pl-2">
                      /month
                    </span>
                  </p>
                  <div className="flex cursor-pointer hover:bg-[#ECFFDD]/90  justify-center items-center py-3 sm:py-4 px-6 text-[#0A373C] font-semibold mt-4 rounded-4xl bg-[#ECFFDD] border-[0.5px] border-yellow-50/30">
                    Get Started
                  </div>
                </div>
                <div className="bg-white p-5 sm:p-7">
                  <p className="pb-3 font-semibold text-[17px] sm:text-[18px]">
                    Features
                  </p>
                  <ul className="flex flex-col gap-2 sm:gap-3">
                    <li className="flex items-center gap-2 text-[#273F43]/90 text-[14px] sm:text-[15px] font-medium">
                      <CircleCheck
                        fill="#0A373C"
                        size={25}
                        className="text-white"
                      />
                      Ticketing system
                    </li>
                    <li className="flex items-center gap-2 text-[#273F43]/90 text-[14px] sm:text-[15px] font-medium">
                      <CircleCheck
                        fill="#0A373C"
                        size={25}
                        className="text-white"
                      />
                      Email, chat, voice, and more
                    </li>
                    <li className="flex items-center gap-2 text-[#273F43]/90 text-[14px] sm:text-[15px] font-medium">
                      <CircleCheck
                        fill="#0A373C"
                        size={25}
                        className="text-white"
                      />
                      1,000+ apps & integrations
                    </li>
                    <li className="flex items-center gap-2 text-[#273F43]/90 text-[14px] sm:text-[15px] font-medium">
                      <CircleCheck
                        fill="#0A373C"
                        size={25}
                        className="text-white"
                      />
                      Multiple ticket forms
                    </li>
                    <li className="flex items-center gap-2 text-[#273F43]/90 text-[14px] sm:text-[15px] font-medium">
                      <CircleCheck
                        fill="#0A373C"
                        size={25}
                        className="text-white"
                      />
                      Customer satisfaction (CAST)
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col border-8 rounded-2xl bg-white border-white">
                <div className="bg-[#ECFFDD] rounded-xl p-5 sm:p-7 ">
                  <p className="font-semibold text-[18px] sm:text-[20px] pb-2">
                    Professional
                  </p>
                  <p className="pb-4 text-[15px] sm:text-[16px] font-medium text-[#273F43]/80 max-w-xs">
                    Perfect for large corporations and startup.
                  </p>
                  <p>
                    <span className="font-semibold text-[45px] sm:text-[50px]">
                      $149
                    </span>
                    <span className="text-[15px] sm:text-[16px] text-[#273F43]/80 font-medium pl-2">
                      /month
                    </span>
                  </p>
                  <div className="flex cursor-pointer hover:bg-[#0A373C]/80  justify-center items-center py-3 sm:py-4 px-6 text-yellow-50 mt-4 rounded-4xl bg-[#0A373C] gap-2 border-[0.5px] border-yellow-50/30">
                    Get Started
                  </div>
                </div>
                <div className="bg-white p-5 sm:p-7">
                  <p className="pb-3 font-semibold text-[17px] sm:text-[18px]">
                    Features
                  </p>
                  <ul className="flex flex-col gap-2 sm:gap-3">
                    <li className="flex items-center gap-2 text-[#273F43]/90 text-[14px] sm:text-[15px] font-medium">
                      <CircleCheck
                        fill="#0A373C"
                        size={25}
                        className="text-white"
                      />
                      Ticketing system
                    </li>
                    <li className="flex items-center gap-2 text-[#273F43]/90 text-[14px] sm:text-[15px] font-medium">
                      <CircleCheck
                        fill="#0A373C"
                        size={25}
                        className="text-white"
                      />
                      Email, chat, voice, and more
                    </li>
                    <li className="flex items-center gap-2 text-[#273F43]/90 text-[14px] sm:text-[15px] font-medium">
                      <CircleCheck
                        fill="#0A373C"
                        size={25}
                        className="text-white"
                      />
                      1,000+ apps & integrations
                    </li>
                    <li className="flex items-center gap-2 text-[#273F43]/90 text-[14px] sm:text-[15px] font-medium">
                      <CircleCheck
                        fill="#0A373C"
                        size={25}
                        className="text-white"
                      />
                      Multiple ticket forms
                    </li>
                    <li className="flex items-center gap-2 text-[#273F43]/90 text-[14px] sm:text-[15px] font-medium">
                      <CircleCheck
                        fill="#0A373C"
                        size={25}
                        className="text-white"
                      />
                      Customer satisfaction (CAST)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Pricing;
