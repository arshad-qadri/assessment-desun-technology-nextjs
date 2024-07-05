import Image from "next/image";
import React from "react";
import Pagination from "../common/Pagination";

const TransferDetailsTable = () => {
  const headres = [
    "NO",
    "EGG NUMBER",
    "STATUS",
    "SPECIES",
    "TRANSFERD FROM",
    "DATE",
    "RECEIVING AT",
    "DATE",
    "NURSERY",
  ];
  const data = [
    {
      egg_number: "0273 / 24",
      status: "Completed",
      species: {
        name: "Rainbow Lorikeet",
        description: "Trichogloss... ",
        image:
          "https://www.birdsville.net.au/wp-content/uploads/2011/07/Chattering-lori.jpg",
      },
      tranferred_from: "Site Name XYZ",
      tranferred_date: "10 Apr 2024",
      receiving_at: "Site Name XYZ",
      receiving_date: "10 Apr 2024",
      nursery: "NUR1234",
      bgColor: "bg-[#e1f9ed]",
      textColor: "text-[#37bd69]",
    },
    {
      egg_number: "0273 / 24",
      status: "In Progress",
      species: {
        name: "Rainbow Lorikeet",
        description: "Trichogloss... ",
        image:
          "https://www.birdsville.net.au/wp-content/uploads/2011/07/Chattering-lori.jpg",
      },
      tranferred_from: "Site Name XYZ",
      tranferred_date: "10 Apr 2024",
      receiving_at: "Site Name XYZ",
      receiving_date: "10 Apr 2024",
      nursery: "NUR1234",
      bgColor: "bg-[#d7f7f5]",
      textColor: "text-[#00afd6]",
    },
    {
      egg_number: "0273 / 24",
      status: "Cancelled",
      species: {
        name: "Rainbow Lorikeet",
        description: "Trichogloss... ",
        image:
          "https://www.birdsville.net.au/wp-content/uploads/2011/07/Chattering-lori.jpg",
      },
      tranferred_from: "Site Name XYZ",
      tranferred_date: "10 Apr 2024",
      receiving_at: "Site Name XYZ",
      receiving_date: "10 Apr 2024",
      nursery: "NUR1234",
      bgColor: "bg-[#ffefec]",
      textColor: "text-[#fa6140]",
    },
  ];
  const thCommonClass = "py-2 px-1";
  return (
    <div className="w-full">
      <table className="w-full">
        <thead>
          <tr className="bg-[#c1d3d0]">
            {headres.map((head, index) => (
              <th
                key={index}
                className="py-5 px-1 text-sm text-gray-600 font-semibold uppercase"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr className="py-4 border-b" key={index}>
              <td className={`font-light ${thCommonClass}`}>{index + 1}</td>
              <td
                className={`flex justify-center items-center flex-col ${thCommonClass}`}
              >
                <span className="font-semibold text-gray-600">
                  {item.egg_number}
                </span>
                <span className="bg-gray-100 rounded-md px-4 text-sm text-green-700 mt-1">
                  Fertile
                </span>
              </td>
              <td className={` ${thCommonClass} text-sm`}>
                <span
                  className={`${item.bgColor} ${item.textColor} px-3 py-1 rounded-md`}
                >
                  {item.status}
                </span>
              </td>
              <td className={` ${thCommonClass}`}>
                <div className="flex justify-center items-center gap-x-1">
                  <div className="w-12 h-[4.5rem] py-3 flex justify-center items-center">
                    <div className="w-full h-full overflow-hidden rounded-full">
                      <Image
                        src={item.species.image}
                        alt={item.species.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-700">
                      {item.species.name}
                    </h2>
                    <p className="truncate max-w-xs text-gray-700">
                      {item.species.description}
                    </p>
                  </div>
                </div>
              </td>
              <td className={` ${thCommonClass} text-gray-500`}>{item.tranferred_from}</td>
              <td className={` ${thCommonClass} text-gray-500`}>{item.tranferred_date}</td>
              <td className={` ${thCommonClass} text-gray-500`}>{item.receiving_at}</td>
              <td className={` ${thCommonClass} text-gray-500`}>{item.receiving_date}</td>
              <td className={` ${thCommonClass} text-gray-500`}>{item.nursery}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination/>
    </div>
  );
};

export default TransferDetailsTable;
