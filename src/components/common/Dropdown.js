"use client"
import React, { useState } from "react";
import Select from "react-select";

const Dropdown = ({ placeholder }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      "&:focus": {
        outline: "none",
      },
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "currentColor",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
  };

  return (
    <div className="dropdown">
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        styles={customStyles}
        className="text-sm cursor-pointer h-full"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Dropdown;
