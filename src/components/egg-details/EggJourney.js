import React from "react";
import { IoTimeOutline } from "react-icons/io5";
const EggJourney = () => {
  return (
    <div className="bg-white rounded-md shadow-md my-5 w-full p-4">
      <div className="flex justify-between items-center">
        <div className=" flex justify-start items-center gap-x-8">
          <h3 className="text-xl text-gray-700 font-semibold">Egg Journey</h3>
          <div className="flex justify-start items-center gap-4">
            <div className="flex justify-start items-center gap-x-1">
              <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-600"></div>
              <div className="text-sm font-semibold text-gray-500">
                Not Started
              </div>
            </div>
            <div className="flex justify-start items-center gap-x-1">
              <div className="w-3 h-3 rounded-full bg-green-500 border border-green-900"></div>
              <div className="text-sm font-semibold text-gray-500">
                Current Stage
              </div>
            </div>
            <div className="flex justify-start items-center gap-x-1">
              <div className="w-3 h-3 rounded-full bg-green-200 border border-green-500"></div>
              <div className="text-sm font-semibold text-gray-500">
               Completed
              </div>
            </div>
            <div className="flex justify-start items-center gap-x-1">
              <div className="w-3 h-3 rounded-full bg-red-200 border border-red-500"></div>
              <div className="text-sm font-semibold text-gray-500">
               Discard
              </div>
            </div>
          </div>
        </div>
        <button className="flex justify-center items-center gap-x-3">
          <span className="text-[#00afd6] font-semibold"> Activity log</span>{" "}
          <IoTimeOutline size={25} className="text-[#00afd6]" />
        </button>
      </div>
      <div className="py-3 px-5 bg-green-100 border border-gray-400 w-max mt-5 rounded-lg">
        <div className="text-green-500 font-semibold">Collected / Founded</div>
        <small className="text-gray-500">1 Apr 2024</small>
      </div>
    </div>
  );
};

export default EggJourney;
