"use client";
import { CircleFlag } from "react-circle-flags";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

type columnType = {
  title: string;
  list: string[];
};

const column: columnType[] = [
  {
    title: "Products",
    list: [
      "Pricing",
      "Joule for Service",
      "Joule for Sales",
      "Integrations",
      "System Status",
    ],
  },

  {
    title: "Resources",
    list: ["Pricing", "Joule for Service", "Joule for Sales", "Integrations"],
  },

  {
    title: "Company",
    list: [
      "Pricing",
      "Joule for Service",
      "Joule for Sales",
      "Integrations",
      "System Status",
      "Integrations",
      "System Status",
    ],
  },
  {
    title: "Trending",
    list: ["Pricing", "Joule for Service", "Joule for Sales", "Integrations"],
  },
];

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className="bg-[#F7F7F7]  rounded-4xl mt-2 pt-16 px-5  lg:px-10 xl:px-20 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col max-w-7xl lg:flex-row  justify-between w-full  pb-14 gap-8 lg:gap-20">
        <div className="w-full lg:w-[20%]   text-center lg:text-left">
          <span className="text-[#273F43] cursor-pointer font-semibold text-2xl">
            LOGO
          </span>
          <p className="text-[#273F43]/70 mt-2 text-[15px] font-medium leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            voluptate?
          </p>

          <div className="flex gap-4  mt-8 items-center justify-center lg:justify-start">
            <AiFillInstagram
              size={20}
              color="#273F43"
              className="cursor-pointer"
            />
            <FaFacebook size={20} color="#273F43" className="cursor-pointer" />
            <FaLinkedinIn
              size={20}
              color="#273F43"
              className="cursor-pointer"
            />
            <FaYoutube size={20} color="#273F43" className="cursor-pointer" />
          </div>
        </div>

        <div className="grid grid-cols-2  xl:pl-20 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 w-full mt-10 lg:mt-0">
          {column.map((value) => {
            return (
              <div key={value.title}>
                <span className="text-[#273F43] font-semibold text-[17px]">
                  {value.title}
                </span>
                <ul className="flex flex-col mt-3  text-[15px] text-[#273F43]/70  gap-3">
                  {value.list.map((item, index) => {
                    return (
                      <li className="cursor-pointer" key={index}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col max-w-7xl md:flex-row justify-between items-center w-full mt-8 md:mt-5 pb-4 gap-y-4 lg:gap-x-20 xl:gap-x-44 text-center md:text-left">
        <div className="flex gap-8">
          <div className="flex items-center gap-2">
            <CircleFlag countryCode="gb-eng" style={{ width: "15px" }} />{" "}
            <span className="underline cursor-pointer text-[#273F43] font-medium text-[15px]">
              English
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CircleFlag countryCode="de" style={{ width: "15px" }} />{" "}
            <span className="text-[#273F43]/70 cursor-pointer text-[15px]">
              Germany
            </span>
          </div>
        </div>

        <div className="text-[#273F43]/70 text-[15px] font-medium">
          &copy; Growio 2025. All rights reserved.
        </div>

        <div className="flex gap-5 text-[#273F43] font-medium text-[15px]">
          <span className="cursor-pointer">Privacy Policy</span>
          <span className="cursor-pointer">Terms of Use</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
