import React from "react";
import DatePicker from "../common/DatePicker";
import Search from "../common/Search";
import Dropdown from "../common/Dropdown";
import TransferDetailsTable from "../tables/TransferDetailsTable";

const TransferDetails = ({title}) => {
  return (
    <div className="w-full bg-white rounded-md shadow-md my-5 p-4">
      <h1 className="text-gray-600 text-2xl font-semibold ">
        {title}
      </h1>
      <div className="w-11/12  grid grid-cols-[250px,auto] gap-4 my-5">
        <Search />
        <div className="grid grid-cols-2 gap-x-4">
          <div className="grid grid-cols-[auto,30px,auto]">
            <DatePicker value={""} type="date" label={"From Date"} />
            <span className="flex justify-center items-center opacity-55">
              to
            </span>
            <DatePicker value={""} type="date" label={"Till Date"} />
          </div>

          <div className="grid grid-cols-2  gap-x-4">
            <Dropdown placeholder="From site" />
            <Dropdown placeholder="Receiving site" />
          </div>
        </div>
      </div>
      <TransferDetailsTable />
    </div>
  );
};

export default TransferDetails;
