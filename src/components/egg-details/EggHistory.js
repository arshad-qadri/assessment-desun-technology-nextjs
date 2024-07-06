import React from "react";
import { TbFolderExclamation } from "react-icons/tb";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { AiOutlineColumnHeight } from "react-icons/ai";
import { BsArrowsExpandVertical } from "react-icons/bs";
import { GiWeightScale } from "react-icons/gi";
const EggHistory = () => {
  const eggHistory = {
    obj1: [
      { title: "Site", text: "Yelahanka" },
      { title: "Section", text: "SEC0012" },
      { title: "Enclosure", text: "24D" },
      { title: "Cage", text: "C112" },
      { title: "Nest Box", text: "N123" },
      { title: "Shape", text: "Normal" },
    ],
    obj2: [
      { title: "Mother id", text: "0000123456" },
      { title: "Father id", text: "Probable (5)" },
      { title: "Collection on", text: "1 Apr 2024" },
      { title: "Lay Date", text: "1 Apr 2024" },
      { title: "Clutch No", text: "NA" },
      { title: "Collected By", text: "Jorden Steveson" },
    ],
  };
  return (
    <div className="w-full bg-transparent my-5 grid grid-cols-[400px,auto] gap-x-5">
      <div className="bg-white rounded-md shadow-md p-10 flex justify-center items-center flex-col">
        <div>
          <TbFolderExclamation size={150} color="#e4e4e4" />
        </div>
        <h3 className="text-xl font-semibold text-center text-gray-700">
          The egg is not added to any incubator yet
        </h3>
      </div>
      <div className="bg-white rounded-md shadow-md p-6">
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-semibold text-gray-600">
            Egg History - <span className="uppercase">Edit</span>
          </h4>
          <MdOutlineModeEditOutline size={28} className="text-gray-600" />
        </div>
        <div className="grid grid-cols-2 gap-x-4 my-3">
          <div className="bg-gray-200 rounded-md py-2 px-4">
            {eggHistory.obj1.map((item, index) => (
              <div className=" grid grid-cols-2 my-2" key={index}>
                <div className="text-gray-500 text-sm">{item.title}</div>
                <div className="text-gray-600 text-sm">{item.text}</div>
              </div>
            ))}
          </div>
          <div className="bg-gray-200 rounded-md py-2 px-4">
            {eggHistory.obj2.map((item, index) => (
              <div className=" grid grid-cols-2 my-2" key={index}>
                <div className="text-gray-600 text-sm">{item.title}</div>
                <div
                  className={` text-sm ${
                    [0, 1].includes(index)
                      ? "text-[#1eb7d9] underline underline-[#1eb7d9] font-semibold"
                      : "text-gray-500"
                  }`}
                >
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-100 rounded-md p-4">
          <h4 className="pb-2 border-b border-gray-300 text-gray-700 font-normal">
            Initial Measurement
          </h4>
          <div className="grid grid-cols-3 mt-4">
            <div className="flex justify-start items-start gap-x-1 px-2">
              <AiOutlineColumnHeight size={38} className="text-gray-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-600">Not Added</h4>
                <small className="font-semibold text-gray-600">Length</small>
              </div>
            </div>
            <div className="flex justify-start items-start gap-x-1 border-l border-gray-300 px-2">
              <BsArrowsExpandVertical size={38} className="text-gray-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-600">Not Added</h4>
                <small className="font-semibold text-gray-600">Width</small>
              </div>
            </div>
            <div className="flex justify-start items-start gap-x-1 border-l border-gray-300 px-2">
              <GiWeightScale size={38} className="text-gray-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-600">Not Added</h4>
                <small className="font-semibold text-gray-600">Weight</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EggHistory;
