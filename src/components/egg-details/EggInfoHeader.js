"use client";
import { useOverlay } from "@/context/OverlayContext";
import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const EggInfoHeader = () => {
  const { setOverlay } = useOverlay();
  return (
    <div className="w-full bg-white rounded-md shadow-md my-5 p-4">
      <div className="w-full grid grid-cols-[250px,auto]">
        <div className=" rounded-md overflow-hidden w-full h-[220px] relative">
          <Image
            src={
              "https://www.birdsville.net.au/wp-content/uploads/2011/07/Chattering-lori.jpg"
            }
            alt="image"
            width={300}
            height={180}
          />
          <div className="absolute h-24 bg-black/25 w-full bottom-0 left-0 p-2">
            <h2 className="text-base text-white  tracking-wide">
              Rainbow Lorikeet
            </h2>
            <p className="text-white text-sm tracking-wide">
              Trichoglossus Moluccanus
            </p>
            <div className="mt-6 flex justify-start items-center gap-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center p-4">
            <h2 className="text-gray-600 text-4xl font-semibold tracking-wide">
              0273 /24
            </h2>
            <div className="flex justify-center items-center gap-x-8">
              <div className="flex justify-center items-center gap-x-2">
                <div className="">
                  <Image
                    className="rounded-full overflow-hidden border border-gray-500 cursor-pointer"
                    src={"/user2.avif"}
                    width={40}
                    height={40}
                    alt="Profile Image"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">
                    Jordan Steveson
                  </h3>
                  <small className="text-gray-400">Update on 1 Apr 2024</small>
                </div>
              </div>
              <div>
                <button className="uppercase border border-gray-500 py-2 px-6 rounded-md mr-2 text-green-800">
                  Discard
                </button>
                <button
                  className="uppercase border bg-green-500 border-green-500 py-2 px-6 rounded-md text-white"
                  onClick={() => setOverlay(true)}
                >
                  Allocate
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-5 p-4">
            {/* card 1 */}          
            <div className="bg-[#fdf7c6] h-[90px] w-full rounded-md p-2 flex justify-start items-center gap-x-2">
              <div className=" bg-[#1c4a53] px-5 py-2 rounded-md flex justify-center items-center flex-col gap-0 w-[68px]" >
                <div className="text-2xl text-white font-semibold">1</div>
                <div className="text-sm text-white font-semibold">Day</div>
              </div>
              <div>
                <h2 className="text-xl text-gray-600 font-semibold">1 Apr 2024</h2>
                <small className="text-gray-400">Found date</small>
              </div>
            </div>
            {/* card 2 */}
            <div className="bg-[#e7faf9] h-[90px] w-full rounded-md p-2 flex justify-start items-center gap-x-2">
              <div className=" bg-[#00d6c9] px-2 py-2 rounded-md flex justify-center items-center" >
              <Image src={"/meter.png"} width={80} height={60} alt="meter" />
              </div>
              <div className="flex justify-between items-center  w-full">
                <div>
                <h2 className="text-xl text-gray-600 font-semibold">Not Added</h2>
                <small className="text-green-400 font-semibold">Current weight</small>
                </div>
                <IoIosArrowForward size={20} color="#00d6c9" />
              </div>
            </div>
            {/* card 3 */}
            <div className="bg-[#e7faf9] h-[90px] w-full rounded-md p-2 flex justify-start items-center gap-x-2">
              <div className=" bg-[#37bd69] px-2 py-2 rounded-md flex justify-center items-center h-[70px] w-[95px]" >

                <Image src={"/egg.png"} width={70} height={60} alt="Egg" />
              </div>
              <div className=" w-full">
                <div>
                <h2 className="text-xl text-gray-600 font-semibold">Intact</h2>
                <small className="text-green-400 font-semibold">Warm Condition</small>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EggInfoHeader;
