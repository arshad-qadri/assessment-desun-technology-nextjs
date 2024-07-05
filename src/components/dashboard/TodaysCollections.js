import React from "react";
import HorizontalBarChart from "../charts/HorizontalBarChart";

const TodaysCollections = () => {
  const collections = [
    { text: "In Nest", value: 48, color: "bg-[#4dc7e3]" , textColor: "text-[#4dc7e3]"},
    { text: "In Nursery", value: 99, color: "bg-[#73d196]", textColor: "text-[#73d196]"},
    { text: "Good Condition", value: 83, color: "bg-[#00d6c9]", textColor: "text-[#00d6c9]"},
    { text: "Discarded", value: 33, color: "bg-[#fca08c]", textColor: "text-[#fca08c]"},
  ];
  return (
    <div className="w-3/5 bg-white pb-4 pt-6 shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold text-gray-700 px-4">
        Todays collection - <span className="text-green-900">262 Eggs</span>
      </h1>
      <div className="grid grid-cols-2 gap-x-3">
        <HorizontalBarChart />
      <div className="grid grid-cols-2 grid-rows-2 p-4">
        {collections.map((collection, index) => (
          <div key={index} className="flex justify-center items-start flex-col">
            <div className="flex justify-center items-center gap-x-1">
              <div className={`w-3 h-3 ${collection.color} rounded-full`}></div>
              <div className="opacity-50">{collection.text}</div>
            </div>
            <div className={`${collection.textColor}`}>{collection.value}</div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default TodaysCollections;
