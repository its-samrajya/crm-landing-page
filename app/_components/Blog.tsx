import { ArrowRight, Sparkle } from "lucide-react";
import Image from "next/image";

const Blog = () => {
  return (
    <section className="bg-white h-[1440px] sm:h-[1380px] md:h-[1270px] lg:h-[980px] xl:h-[920px] mt-2">
      <div className="h-full  ">
        <div className="flex gap-2 h-full relative ">
          <div className="bg-[#F7F7F7] w-[15%] rounded-4xl hidden xl:block "></div>
          <div className="bg-[#F7F7F7] w-full xl:w-[70%] rounded-4xl ">
            <div className="flex items-center mt-24   justify-center flex-col">
              <p className="text-[#17A566]     font-semibold text-[14px] flex gap-1 items-center">
                <Sparkle size={15} />
                RESOURCES
              </p>
              <div className="flex flex-col items-center   max-w-xl font-semibold mt-2 text-[#273F43]">
                <span className=" text-center px-2 sm:px-0 text-[30px]/10 xl:text-[38px]/16 ">
                  All resources you need
                </span>
                <p className="text-center text-[#273F43]/70   mt-6  font-medium px-4   lg:text-[16px]  xl:text-[17px] ">
                  Articles on CRM, AI and Automation, Product and more.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#F7F7F7] w-[15%] rounded-4xl hidden xl:block "></div>

          <div className="absolute inset-x-0 top-72  lg:top-80 xl:top-72  px-4 md:px-8 lg:px-16 xl:px-36">
            <div className="grid gap-8 lg:gap-10 grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto">
              <div className="flex flex-col border-8 rounded-2xl bg-white border-white p-4">
                <div className="rounded-xl overflow-hidden w-full h-[200px] md:h-[250px] lg:h-[300px] relative">
                  <Image
                    src="/blogImage/blogimg1.jpg"
                    className="rounded-2xl object-cover"
                    fill
                    alt="Customer experience automation blog image"
                    sizes="(max-width: 1023px) 100vw, 50vw"
                  />
                </div>
                <div className="mt-6 flex-grow">
                  {" "}
                  <span className="block text-[22px] md:text-[28px] lg:text-[31px] leading-tight text-[#273F43] font-semibold">
                    Customer experience automation (CXA): Definition + examples
                  </span>
                </div>
                <span className="flex cursor-pointer items-center gap-2 mt-4 font-semibold text-[#126741] self-start">
                  Read More <ArrowRight size={20} />
                </span>
              </div>

              <div className="flex flex-col gap-8">
                <div className="border-8 rounded-2xl bg-white border-white p-4 flex flex-col md:flex-row gap-4 md:gap-6">
                  <div className="w-full  h-40 md:w-36 md:h-full flex-shrink-0 rounded-2xl relative overflow-hidden">
                    <Image
                      src="/blogImage/blogimg2.webp"
                      alt="Building AI-powered experiences blog image"
                      className="object-cover"
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 33vw, 10vw"
                    />
                  </div>
                  <div className="pt-2 flex flex-col flex-grow">
                    {" "}
                    <span className="block text-[18px] md:text-[20px] lg:text-[22px] leading-tight text-[#273F43] font-semibold">
                      Building AI-powered experiences for humans &mdash; with
                      Brent Pliskow
                    </span>
                    <button className="flex cursor-pointer items-center gap-2 mt-auto pt-4 md:mt-20 font-semibold text-[#126741] self-start">
                      Read More <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
                <div className="border-8 rounded-2xl bg-white border-white p-4 flex flex-col md:flex-row gap-4 md:gap-6">
                  <div className="w-full h-40 md:w-[147px] md:h-full flex-shrink-0 rounded-2xl relative overflow-hidden">
                    <Image
                      src="/blogImage/blogimg3.png"
                      alt="Employee recognition blog image"
                      className="object-cover"
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 33vw, 10vw"
                    />
                  </div>
                  <div className="pt-2 flex flex-col flex-grow">
                    {" "}
                    <span className="block text-[18px] md:text-[20px] lg:text-[22px] leading-tight text-[#273F43] font-semibold">
                      Employee recognition: Why it matters + how to deliver it
                    </span>
                    <button className="flex  cursor-pointer items-center gap-2 mt-auto pt-4 md:mt-20 font-semibold text-[#126741] self-start">
                      Read More <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
