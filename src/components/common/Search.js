import React from "react";
import { IoSearch } from "react-icons/io5";
const Search = () => {
  return (
    <div className="grid grid-cols-[20px,auto]  gap-x-2 border border-gray-300 bg-white rounded-md py-[6px] px-2 w-full h-11">
      <div className="flex justify-center items-center h-full">
        <IoSearch size={20} />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="placeholder:text-sm focus:outline-none w-full h-full"
      />
    </div>
  );
};

export default Search;
