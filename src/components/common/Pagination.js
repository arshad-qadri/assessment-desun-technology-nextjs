import React from "react";

const Pagination = () => {
  return (
    <div className="w-full flex justify-between items-center mt-10 mb-4">
      <div className="text-gray-400">Showing {1} to 3 of 3 entries</div>
      <div>
        <button disabled className="px-4 py-2 text-gray-400">
          Previous
        </button>
        <button className="px-4 py-2 text-white bg-gray-400 rounded-md">
          1
        </button>
        <button className="px-4 py-2 text-gray-400">2</button>
        <button className="px-4 py-2 text-gray-400">3</button>
        <button className="px-4 py-2 text-gray-400">4</button>
        <button className="px-4 py-2 text-gray-400">Next</button>
      </div>
    </div>
  );
};

export default Pagination;
