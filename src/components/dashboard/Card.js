import React from "react";
import { PiEggCrackLight } from "react-icons/pi";
const Card = ({card}) => {
    const {Icon, text, value, bgColor, textColor} = card
  return (
    <div className="flex justify-start items-center gap-x-2 bg-white rounded-md shadow-sm p-5">
      <div className={`${bgColor} p-2 rounded-md`}>
        <Icon size={27} className={`${textColor}`} />
      </div>
      <div>
        <span className={`${textColor} font-semibold`}>{value}</span> <br />
        <span className="text-gray-600">{text}</span>
      </div>
    </div>
  );
};

export default Card;
