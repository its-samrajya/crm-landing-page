"use client";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="bg-[#F7F7F7] w-full flex justify-center  items-center p-3 rounded-b-3xl"
      >
        <div className="flex justify-between   max-w-7xl w-full items-center">
          <div className="flex ">
            <div className="px-14">
              <h2 className="cursor-pointer">LOGO</h2>
            </div>
            <div className="hidden md:flex">
              <ul className="flex gap-10 ">
                <li className="flex cursor-pointer hover:text-[#757D88]/70  items-center font-medium font-figtree text-[16px] text-[#757D88]">
                  Software
                  <ChevronDown className="h-4 mt-1  " />
                </li>
                <li className="text-[#757D88] hover:text-[#757D88]/70  cursor-pointer font-medium font-figtree text-[16px]">
                  Pricing
                </li>
                <li className="flex items-center hover:text-[#757D88]/70  cursor-pointer font-medium font-figtree text-[16px] text-[#757D88]">
                  Resources
                  <ChevronDown className="h-4 mt-1" />
                </li>
              </ul>
            </div>
          </div>

          <div className="md:flex pr-14 hidden  gap-10 items-center">
            <div className="text-[#425459] hover:text-[#425459]/70 cursor-pointer font-figtree font-semibold">
              Log In
            </div>
            <button className="bg-white overflow-hidden group relative shadow-xs cursor-pointer text-[#273F43]  font-figtree font-bold rounded-full px-3 py-2">
              <span className="absolute bottom-0 left-0 w-0 h-0 bg-[#273F43] group-hover:w-full group-hover:h-full rounded-tr-lg transition-all duration-400 ease-in-out"></span>
              <span className="relative z-1 group-hover:text-white transition-colors duration-400">
                Get Started
              </span>
            </button>
          </div>
          <div
            className="md:hidden cursor-pointer  "
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            {!isOpen ? <Menu /> : <X />}
          </div>
        </div>
      </motion.nav>
      {isOpen && (
        <div className="absolute top-14 left-0 w-full shadow-lg  z-50 p-5 text-center rounded-3xl bg-[#F7F7F7]  md:hidden">
          <ul className="flex flex-col gap-2 text-[#757D88] ">
            <li>Login</li>
            <li>Software</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
