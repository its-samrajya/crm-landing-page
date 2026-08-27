"use client";
import { Coffee, Drill, Sparkle, TableColumnsSplit } from "lucide-react";
import Image from "next/image";
import Barchart from "./Barchart";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className="h-[650px] bg-white  xl:h-[650px] mt-2"
    >
      <div className="h-full ">
        <div className="flex gap-2 h-full relative ">
          <div className="bg-[#F7F7F7] w-[15%] hidden xl:block rounded-4xl  "></div>
          <div className="bg-[#F7F7F7] w-full xl:w-[70%] rounded-4xl  flex justify-center items-center  flex-col ">
            <div className="text-[#17A566]  font-semibold text-[14px] flex gap-1 items-center">
              <Sparkle size={15} />
              MODERN & SCALABLE{" "}
            </div>
            <div className="flex  flex-col items-center  max-w-xl font-semibold mt-4 text-[#273F43]">
              <span className=" text-center   px-2 sm:px-0 text-[30px]/10 xl:text-[58px]/16 ">
                Comprehensive CRM Tools for Your Team
              </span>
              <p className="text-center text-[#273F43]/70 mt-6  font-medium px-4   lg:text-[16px]  xl:text-[17px] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur minima ipsum iusto maiores voluptatibus? Optio,
                cupiditate similique eius impedit dolore facilis a quibusdam
                ut{" "}
              </p>
            </div>
            <div className="mt-10 ">
              <div className="flex gap-5 justify-center ">
                <button className="w-32 h-12 relative overflow-hidden group cursor-pointer rounded-3xl bg-[#273F43] text-white py-3 px-6">
                  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
                    Get Started
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                    Let&apos;s Go
                  </span>
                </button>
                <button className="shadow-lg w-32 h-12 cursor-pointer relative group overflow-hidden font-semibold rounded-3xl py-3 px-6 border border-[gray]/12 text-[#273F43]">
                  <span className="absolute inset-0 flex items-center justify-center group-hover:-translate-y-full transition-transform duration-300 ">
                    View Demo
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    Try Now
                  </span>
                </button>
              </div>

              <div className="flex gap-5 xl:gap-14   justify-center mt-13  text-[#757D88] text-[20px] font-semibold">
                <div className="flex gap-1   justify-center  items-center ">
                  <Drill /> descript
                </div>
                <div className="flex gap-1    justify-center  items-center">
                  <Coffee /> hotjar
                </div>
                <div className="flex gap-1 justify-center  items-center">
                  <TableColumnsSplit /> Segment
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F7F7F7] hidden xl:block  w-[15%] rounded-4xl "></div>
          <div className="acme-card absolute hidden xl:block left-24 pb-4  shadow-[-13px_-13px_5px_rgba(0,0,0,0.06)] bg-white rounded-xl bottom-[89px] border border-[gray]/12 px-6 py-4">
            <p className="font-semibold text-[18px]">
              $770.00 deal for Acme Inc.
            </p>
            <p className="text-[14px] font-semibold mt-1">
              <span className="text-[#757D88] mr-2">Close date:</span> June 6,
              2024
            </p>

            <div className="flex relative  h-16  items-end   ">
              <div className="border-2 border-white rounded-full absolute left-0 ">
                <Image
                  height={50}
                  width={50}
                  src="/cardImage/cat1.png"
                  className="h-10 w-10 rounded-full"
                  alt="cat1"
                />
              </div>
              <div className="border-2 border-white rounded-full absolute left-7 ">
                <Image
                  height={50}
                  width={50}
                  src="/cardImage/cat2.png"
                  className="h-10 w-10 rounded-full"
                  alt="cat2"
                />
              </div>
              <div className="border-2 border-white rounded-full absolute left-14">
                <Image
                  height={50}
                  width={50}
                  src="/cardImage/cat3.png"
                  className="h-10 w-10 rounded-full"
                  alt="cat3"
                />
              </div>
            </div>
          </div>

          <div className="contacts-card absolute w-[270px] hidden xl:block   right-24   shadow-[-13px_-13px_5px_rgba(0,0,0,0.06)] bg-white rounded-xl bottom-[89px] border-1 border-[gray]/12 px-6 py-4">
            <p className="font-semibold text-[18px]">76 new contacts</p>
            <Barchart />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
