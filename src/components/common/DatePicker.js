"use client";
import React, { useRef } from "react";
import { IoIosCalendar } from "react-icons/io";

const DatePicker = ({ label, value, setValue, type = "date", id }) => {
  const inputRef = useRef(null);

  const handleLabelClick = () => {
    alert(label)
    inputRef.current.focus();
    inputRef.current.click();
  };

  const handleDateChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="">
      <label
        htmlFor={id}
        className="bg-white border border-gray-300 rounded-md py-2 px-4 min-w-40 text-sm flex justify-between items-center cursor-pointer"
        onClick={handleLabelClick}
      >
        <span className="opacity-50">{value ? value : label}</span>
        <IoIosCalendar size={18} />
      </label>
      <input
        type={type}
        id={id}
        ref={inputRef}
        value={value}
        onChange={handleDateChange}
        className=" hidden"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default DatePicker;
