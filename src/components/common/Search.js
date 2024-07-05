import React from "react";
import { IoSearch } from "react-icons/io5";
const Search = () => {
  return (
    <div className="flex justify-start items-center gap-x-2 border border-gray-300 bg-white rounded-md py-1 px-3">
      <IoSearch size={20} />
      <input type="text" placeholder="Search" className="placeholder:text-sm focus:outline-none"/>
    </div>
  );
};

export default Search;
