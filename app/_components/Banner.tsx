"use client";
import { Sparkle } from "lucide-react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className="bg-[#08272A]  rounded-3xl mt-2 flex flex-col  lg:flex-row gap-8 lg:gap-16 lg:px-5  xl:px-28 py-8 sm:py-10 lg:py-24 items-center justify-center "
    >
      <div className="flex max-w-7xl  lg:w-[55%]   flex-col">
        <p className="text-[#17A566] justify-center lg:justify-start    font-semibold text-[14px] flex gap-1 items-center">
          <Sparkle size={15} />
          JOIN THE BEST
        </p>

        <span className="text-[25px]/10 px-6 sm:px-0  sm:text-[30px]/10 text-center lg:text-left  lg:text-[42px]/13  font-semibold mt-4 text-white ">
          The Best Free CRM Solution for Your Business
        </span>
      </div>

      <div className="flex gap-5  max-w-7xl     lg:pt-5       ">
        <button className="w-[152px] h-[56px] relative overflow-hidden cursor-pointer group   py-4 px-9 text-[#0A373C] font-semibold  rounded-4xl bg-[#ECFFDD] gap-2   border-[0.5px] border-yellow-50/30 ">
          <span className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            Let&apos;s Go
          </span>
          <span className="absolute inset-0 flex items-center justify-center group-hover:-translate-y-full transition-transform duration-300 ">
            {" "}
            Get Started
          </span>
        </button>

        <button className="w-[152px] h-[56px] relative group overflow-hidden cursor-pointer text-[15px] font-medium  text-yellow-50  py-4 px-9  rounded-4xl gap-2 border-[0.5px] border-yellow-50/30 ">
          <span className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 duration-300 transition-transform">
            Try Now
          </span>
          <span className="absolute inset-0 flex  justify-center items-center group-hover:-translate-y-full transition-transform duration-300">
            View Demo
          </span>
        </button>
      </div>
    </motion.div>
  );
};

export default Banner;
