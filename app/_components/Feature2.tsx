"use client";
import {
  ArrowRight,
  BadgeDollarSign,
  Cpu,
  Hourglass,
  Sparkle,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type row = {
  link: string;
  name: string;
};

type card = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const firstRow: row[] = [
  {
    link: "/svgs/slack.svg",
    name: "slack-image",
  },
  {
    link: "/svgs/notion.svg",
    name: "notion-image",
  },
  {
    link: "/svgs/trello.svg",
    name: "trello-image",
  },
  {
    link: "/svgs/airtable.svg",
    name: "airtable-image",
  },
];

const secondRow: row[] = [
  {
    link: "/svgs/adx.svg",
    name: "adx-image",
  },
  {
    link: "/svgs/asana.svg",
    name: "asana-image",
  },
  {
    link: "/svgs/mailchimp.svg",
    name: "mailchimp-image",
  },
  {
    link: "/svgs/zapier.svg",
    name: "zapier-image",
  },
  {
    link: "/svgs/angular.svg",
    name: "angular-image",
  },
];

const thirdRow: row[] = [
  {
    link: "/svgs/google.svg",
    name: "google-image",
  },
  {
    link: "/svgs/monday.svg",
    name: "monday-image",
  },
  {
    link: "/svgs/grammarly.svg",
    name: "grammarly-image",
  },
  {
    link: "/svgs/zendesk.svg",
    name: "zendesk-image",
  },
];

const cards: card[] = [
  {
    icon: <Hourglass size={40} className="text-amber-100 mb-6" />,
    title: "Improve time to value",
    description:
      "Solve customer problems right away, rather than configuring software.",
  },
  {
    icon: <Cpu size={40} className="text-amber-100 mb-6" />,
    title: "Reduce effort per ticket",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa!",
  },
  {
    icon: <BadgeDollarSign size={40} className="text-amber-100 mb-6" />,
    title: "Keep costs low",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, ipsamillum.",
  },
];

const Feature2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className="bg-[#08272A] pb-24 xl:pb-28 flex items-center justify-center flex-col rounded-3xl pt-24 mt-2 "
    >
      <div className="flex items-center    justify-center flex-col">
        <p className="text-[#17A566]     font-semibold text-[14px] flex gap-1 items-center">
          <Sparkle size={15} />
          MODERN & SCALABLE
        </p>
        <div className="flex flex-col items-center     max-w-xl font-semibold mt-4 text-white">
          <span className=" text-center px-2 sm:px-0 text-[30px]/10 xl:text-[38px]/16 ">
            Scale, flex, and innovate
          </span>
          <p className="text-center text-[#fff]/70  mt-6  font-medium px-4   lg:text-[16px]  xl:text-[17px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto.
          </p>
        </div>
      </div>

      <div className="bg-[#E3FFCD] max-w-7xl rounded-2xl px-5 sm:px-20 mt-16 py-8 xl:py-14 w-[80%] grid  xl:grid-cols-2">
        <div className="   ">
          <p className="text-2xl md:text-[38px] font-semibold">
            Integrates with tools
          </p>
          <p className=" text-[#273F43]/80 text-[17px]   xl:w-[85%] mt-2">
            Seamlessly connect the databases and applications you rely on to
            scale your business.
          </p>
          <button className="w-32 h-12 relative group overflow-hidden cursor-pointer   py-3 px-6 text-yellow-50 mt-5 mb-8 xl:mt-14 xl:mb-0 rounded-4xl bg-[#0A373C]   border-[0.5px] border-yellow-50/30 ">
            <span className="absolute inset-0 inline-flex items-center justify-center gap-2 -translate-x-full group-hover:translate-x-0 transition-transform duration-300">
              Discover
              <ArrowRight size={20} />
            </span>
            <span className="inline-flex absolute inset-0 group-hover:translate-x-full transition-transform duration-300 justify-center items-center gap-2 ">
              Explore <ArrowRight size={20} />
            </span>
          </button>
        </div>
        <div className="relative  ">
          <div
            className="hidden absolute xl:block  left-0 top-0 bottom-0 w-40 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, #E3FFCD 0%, transparent 100%)",
            }}
          ></div>

          <div
            className="hidden absolute xl:block  right-0 top-0 bottom-0 w-40 pointer-events-none"
            style={{
              background:
                "linear-gradient(to left, #E3FFCD 0%, transparent 100% )",
            }}
          ></div>

          <div className="flex flex-col  h-full items-center justify-center  gap-4">
            <div className="flex gap-4   justify-center items-center">
              {firstRow.map((value) => {
                return (
                  <div
                    key={value.name}
                    className="rounded-2xl p-1 sm:p-2 xl:p-3 bg-white"
                  >
                    <Image
                      src={value.link}
                      alt={value.name}
                      height={200}
                      width={200}
                      className="h-8 w-8 sm:h-10 sm:w-10"
                    />{" "}
                  </div>
                );
              })}
            </div>
            <div className="flex gap-4  justify-center items-center">
              {secondRow.map((value) => {
                return (
                  <div
                    key={value.name}
                    className="rounded-2xl p-1 sm:p-2 xl:p-3 bg-white"
                  >
                    <Image
                      src={value.link}
                      alt={value.name}
                      height={200}
                      width={200}
                      className="h-8 w-8 sm:h-10 sm:w-10"
                    />{" "}
                  </div>
                );
              })}
            </div>
            <div className="flex gap-4  justify-center items-center">
              {thirdRow.map((value) => {
                return (
                  <div
                    key={value.name}
                    className="rounded-2xl p-1 sm:p-2 xl:p-3 bg-white"
                  >
                    <Image
                      src={value.link}
                      alt={value.name}
                      height={200}
                      width={200}
                      className="h-8 w-8 sm:h-10 sm:w-10"
                    />{" "}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mt-1 lg:mt-0 xl:grid-cols-3 gap-3  xl:gap-2  pt-2 w-[80%] grid lg:grid-cols-2">
        {cards.map((value) => {
          return (
            <div
              key={value.title}
              className="rounded-xl p-10 flex flex-col bg-[#0A373C]  "
            >
              {value.icon}
              <p className="text-white text-[18px] font-medium mb-2">
                {value.title}
              </p>
              <p className="w-[100%]  text-[#fff]/70 text-[14px]  ">
                {value.description}
              </p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Feature2;
