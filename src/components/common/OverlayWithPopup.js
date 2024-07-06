import { useOverlay } from "@/context/OverlayContext";
import React from "react";
import { IoClose } from "react-icons/io5";
import { TbDeviceIpadHorizontalPlus } from "react-icons/tb";
import Dropdown from "./Dropdown";
const OverlayWithPopup = () => {
  const { overlay, setOverlay } = useOverlay();
  return (
    <div
      className={`absolute h-full w-full top-0 transition-transform duration-500 bg-[#1f515bb7] ${
        overlay ? "translate-x-0" : "translate-x-full"
      } grid grid-cols-[60%,auto]`}
    >
      <div></div>
      <div className="w-full h-screen">
        <div className="bg-gray-200 px-4 pb-4 rounded-t-lg h-full w-full overflow-y-auto">
          <header className="flex justify-between items-center sticky top-0 bg-gray-200 py-4 z-30">
            <div className="flex justify-start items-center gap-3">
              <TbDeviceIpadHorizontalPlus
                size={30}
                className="text-gray-700 "
              />
              <h1 className="text-2xl text-gray-700 font-[500]">
                Send For Incubation
              </h1>
            </div>
            <button className="cursor-pointer"  onClick={() => setOverlay(false)}>
              <IoClose size={28} className="text-gray-700 " />
            </button>
          </header>
          <div className="w-full bg-white rounded-md border border-gray-400 p-4 my-5">
            <div className="relative">
              <label className="absolute z-20 bg-white text-xs -top-1 left-2  px-2 text-gray-400">
                Current State
              </label>
              <Dropdown placeholder={"Fertile"} custClass="h-14" />
            </div>
            <div className="relative mt-5">
              <label className="absolute z-20 bg-white text-xs -top-1 left-2  px-2 text-gray-400">
                Condition
              </label>
              <Dropdown placeholder={"Warm"} custClass="h-14" />
            </div>
          </div>
          <h2 className="text-xl text-gray-600 font-[500]">
            Incubator Selection
          </h2>
          <div className="w-full bg-white rounded-md border border-gray-400 p-4 my-5">
            <div className="relative">
              <label className="absolute z-20 bg-white text-xs -top-1 left-2  px-2 text-gray-400">
                Select Nursery
              </label>
              <Dropdown placeholder={"Nursery Name"} custClass="h-14" />
            </div>
            <div className="relative mt-5">
              <label className="absolute z-20 bg-white text-xs -top-1 left-2  px-2 text-gray-400">
                Select Room
              </label>
              <Dropdown placeholder={"24 D"} custClass="h-14" />
            </div>
            <div className="relative mt-5">
              <label className="absolute z-20 bg-white text-xs -top-1 left-2  px-2 text-gray-400">
                Select Incubator
              </label>
              <Dropdown placeholder={"INC0002341"} custClass="h-14" />
            </div>
          </div>

          <div className="flex justify-between items-center">
            {" "}
            <h2 className="text-xl text-gray-600 font-[500]">
              Egg Measurements
            </h2>
            <button className="text-xl text-green-500 font-semibold">Get Values</button>
          </div>
          <div className="w-full bg-white rounded-md border border-gray-400 p-4 my-5">
            <div className="relative">
              <label className="absolute z-20 bg-white text-xs -top-1 left-2  px-2 text-gray-400">
                Select Nursery
              </label>
              <Dropdown placeholder={"Nursery Name"} custClass="h-14" />
            </div>
            <div className="relative mt-5">
              <label className="absolute z-20 bg-white text-xs -top-1 left-2  px-2 text-gray-400">
                Select Room
              </label>
              <Dropdown placeholder={"24 D"} custClass="h-14" />
            </div>
            <div className="relative mt-5">
              <label className="absolute z-20 bg-white text-xs -top-1 left-2  px-2 text-gray-400">
                Select Incubator
              </label>
              <Dropdown placeholder={"INC0002341"} custClass="h-14" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlayWithPopup;
