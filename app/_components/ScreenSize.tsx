"use client";

import { useEffect, useState } from "react";

const getBreakPoint = (width: number) => {
  if (width >= 1536) return "2xl";
  if (width >= 1280) return "xl";
  if (width >= 1024) return "lg";
  if (width >= 768) return "md";
  if (width >= 640) return "sm";
  if (width >= 480) return "xs";
  if (width >= 400) return "xxs";
  return "<xxs";
};

const ScreenSize = () => {
  const [screenSize, setScreenSize] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      setScreenSize(getBreakPoint(window.innerWidth));
    };
    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);
  if (!screenSize) return null;
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-red-700 text-white p-2  text-sm rounded-full shadow-lg">
        {screenSize}
      </div>
    </div>
  );
};
export default ScreenSize;
