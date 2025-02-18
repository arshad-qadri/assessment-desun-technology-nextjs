import React from "react";
import { RxEnterFullScreen } from "react-icons/rx";
import { LuBellDot } from "react-icons/lu";
import Image from "next/image";

const Hero = ({ children }) => {
  return (
    <div className="w-full bg-gray-100 p-6 overflow-y-auto">
      <div className="w-full flex justify-end items-center gap-x-8">
        <div className="opacity-75 cursor-pointer">
          <RxEnterFullScreen size={25} />
        </div>
        <div className="opacity-65 cursor-pointer">
          <LuBellDot size={25} />
        </div>
        <div className="relative">
          <Image
            className="rounded-full overflow-hidden border border-gray-500 cursor-pointer"
            src={"/user2.avif"}
            width={40}
            height={40}
            alt="Profile Image"
          />
          <div className="w-3 h-3 rounded-full bg-green-500 absolute bottom-0 right-0 border-2 border-white"></div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Hero;

