"use client";
import DatePicker from "@/components/common/DatePicker";
import Search from "@/components/common/Search";
import Card from "@/components/dashboard/Card";
import TodaysCollections from "@/components/dashboard/TodaysCollections";
import { useState } from "react";
import { GiNestEggs } from "react-icons/gi";
import { LuBird } from "react-icons/lu";
import { PiEggCrackLight, PiListPlus } from "react-icons/pi";
import { FaChalkboardUser } from "react-icons/fa6";

export default function Home() {
  const [date, setData] = useState("");
  const cards = [
    {
      Icon: PiEggCrackLight,
      value: 3768,
      text: "Total Eggs",
      bgColor: "bg-[#fff2ee]",
      textColor: "text-[#fa6140]",
    },
    {
      Icon: LuBird,
      value: 198,
      text: "Total Species",
      bgColor: "bg-[#e4f9f8]",
      textColor: "text-[#00aed4]",
    },
    {
      Icon: GiNestEggs,
      value: 842,
      text: "Eggs in Nest",
      bgColor: "bg-[#f2fff8]",
      textColor: "text-[#006d35]",
    },
    {
      Icon: FaChalkboardUser,
      value: 2926,
      text: "Eggs in Nursery",
      bgColor: "bg-[#e1eff2]",
      textColor: "text-[#2d5c65]",
    },
    {
      Icon: PiListPlus,
      value: 354,
      text: "Total Incubators",
      bgColor: "bg-[#f2fff8]",
      textColor: "text-[#37bd69]",
    },
  ];
  return (
    <div>
      <div className="my-3 tracking-wide">
        {" "}
        <span className="opacity-50">Egg Module</span>{" "}
        <span className="opacity-75"> / Dashboard</span>
      </div>
      <div className="flex justify-between my-6">
        <h1 className="text-gray-600 text-2xl font-semibold tracking-wide">
          Current Stats
        </h1>
        <div className="flex justify-center it gap-x-3">
          <DatePicker
            label={"From Date"}
            value={date}
            setValue={setData}
            type={"date"}
            id={"date-picker"}
          />
          <span className="flex justify-center items-center opacity-55">
            to
          </span>
          <DatePicker
            label={"Till Date"}
            value={date}
            setValue={setData}
            type={"date"}
            id={"date-picker"}
          />
          <Search />
        </div>
      </div>
      <div className="grid grid-cols-5 mb-6 gap-3">
        {cards.map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </div>
      <TodaysCollections />
    </div>
  );
}
