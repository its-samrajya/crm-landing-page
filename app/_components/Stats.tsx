import React from "react";

type dataType = {
  number: string;
  msg: string;
};

const data: dataType[] = [
  {
    number: "+24%",
    msg: "Higher leads",
  },
  {
    number: "99%",
    msg: "Customer satisfaction score",
  },
  {
    number: "4B+",
    msg: "Daily API calls",
  },
  {
    number: "35B",
    msg: "Messages sent in 2025",
  },
];

const Stats = () => {
  return (
    <div className="bg-[#F7F7F7] flex  items-center  justify-center  rounded-4xl mt-2 ">
      <div className="grid max-w-7xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-12  items-center justify-center py-12">
        {data.map((value, index) => {
          return (
            <div key={index} className="flex  flex-col  items-center  ">
              <span className="text-[44px] font-medium">{value.number}</span>
              <p className="text-[15px] text-[#273F43]/70 font-medium">
                {value.msg}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
