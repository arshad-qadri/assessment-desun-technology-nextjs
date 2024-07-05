"use client";
import React, { useState } from "react";
import Search from "../common/Search";
import { VscSettings } from "react-icons/vsc";
import ReceivedTable from "../tables/ReceivedTable";

const EggList = () => {
  const [tab, setTab] = useState(1);
  const handleTab =(tabNum) =>{
    setTab(tabNum);
  }
  return (
    <div className="w-full bg-white rounded-md shadow-md my-5 p-4">
      <div className="flex justify-between items-center my-6">
        <h1 className="text-gray-600 text-2xl font-semibold tracking-wide">
          Egg List
        </h1>
        <div className="flex justify-start items-center gap-x-2">
          <button className=" border p-2 rounded-md">
            <VscSettings size={25} />
          </button>
          <Search />
        </div>
      </div>
      {/* ============ tabs =========== */}
      <div className="flex justify-start items-center  w-max">
        <button
          className={`border-b-2  font-semibold pt-1 pb-2 px-4 ${
            tab === 1 ? "border-green-500 text-green-500 border-b-2" : "text-gray-500"
          }`}
          onClick={()=>handleTab(1)}
        >
          Received - 24
        </button>
        <button
          className={`border-b-2  font-semibold pt-1 pb-2 px-4 ${
            tab === 2 ? "border-green-500 text-green-500 border-b-2" : "text-gray-500"
          }`}
          onClick={()=>handleTab(2)}
        >
          Incubation - 100
        </button>
        <button
          className={`border-b-2  font-semibold pt-1 pb-2 px-4 ${
            tab === 3 ? "border-green-500 text-green-500 border-b-2" : "text-gray-500"
          }`}
          onClick={()=>handleTab(3)}
        >
          Hatched - 100
        </button>
        <button
          className={`border-b-2  font-semibold pt-1 pb-2 px-4 ${
            tab === 4 ? "border-green-500 text-green-500 -2-2" : "text-gray-500"
          }`}
          onClick={()=>handleTab(4)}
        >
          Discarded - 12
        </button>
      </div>
      {tab===1 && <ReceivedTable/>}
      {tab===2 && <div>tab 2</div>}
      {tab===3 && <div>tab 3</div>}
      {tab===4 && <div>tab 4</div>}
    </div>
  );
};

export default EggList;
