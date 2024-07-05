import React from "react";
import Pagination from "../common/Pagination";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ReceivedTable = () => {
  const {push} = useRouter()
  const headres = [
    "NO",
    "SPECIES",
    "EGG NUMBER",
    "SITE NAME",
    "COLLECTED ON",
    "BATCH NO",
    "COLLECTED BY",
  ];
  const data = [
    {
      egg_details: {
        number: "0273 / 24",
        label: "Intact",
        bgColor: "bg-[#e1f9ed]",
        textColor: "text-[#37bd69]",
      },
      site_name: "Site Name XYZ",
      collected_on: "10 Apr 2024",
      batch_number: "2024/0001234/3A",
      collected_by_detailes: {
        name: "Jordan Stevenson",
        designation: "Designation",
        url: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg",
      },

      species: {
        name: "Rainbow Lorikeet",
        description: "Trichogloss... ",
        image:
          "https://www.birdsville.net.au/wp-content/uploads/2011/07/Chattering-lori.jpg",
      },
    },
    {
      egg_details: {
        number: "0273 / 24",
        label: "Rotten",
        bgColor: "bg-[#ffefec]",
        textColor: "text-[#fa6140]",
      },
      site_name: "Site Name XYZ",
      collected_on: "10 Apr 2024",
      batch_number: "2024/0001234/3A",
      collected_by_detailes: {
        name: "Jordan Stevenson",
        designation: "Designation",
        url: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg",
      },

      species: {
        name: "Rainbow Lorikeet",
        description: "Trichogloss... ",
        image:
          "https://www.birdsville.net.au/wp-content/uploads/2011/07/Chattering-lori.jpg",
      },
    },
    {
      egg_details: {
        number: "0273 / 24",
        label: "Cracked",
        bgColor: "bg-[#ffefec]",
        textColor: "text-[#fa6140]",
      },
      site_name: "Site Name XYZ",
      collected_on: "10 Apr 2024",
      batch_number: "2024/0001234/3A",
      collected_by_detailes: {
        name: "Jordan Stevenson",
        designation: "Designation",
        url: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg",
      },

      species: {
        name: "Rainbow Lorikeet",
        description: "Trichogloss... ",
        image:
          "https://www.birdsville.net.au/wp-content/uploads/2011/07/Chattering-lori.jpg",
      },
    },
    {
      egg_details: {
        number: "0273 / 24",
        label: "Broken",
        bgColor: "bg-[#ffefec]",
        textColor: "text-[#fa6140]",
      },
      site_name: "Site Name XYZ",
      collected_on: "10 Apr 2024",
      batch_number: "2024/0001234/3A",
      collected_by_detailes: {
        name: "Jordan Stevenson",
        designation: "Designation",
        url: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg",
      },

      species: {
        name: "Rainbow Lorikeet",
        description: "Trichogloss... ",
        image:
          "https://www.birdsville.net.au/wp-content/uploads/2011/07/Chattering-lori.jpg",
      },
    },
  ];
  const thCommonClass = "py-2 px-1";
  return (
    <div className="w-full my-5">
      <table className="w-full">
        <thead>
          <tr className="bg-[#c1d3d0]">
            {headres.map((head, index) => (
              <th
                key={index}
                className="py-5 px-1 text-sm text-gray-600 font-semibold uppercase text-left"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr className="py-4 border-b cursor-pointer" key={index} onClick={()=>push(`/egg/egg-details/${index}`)}>
              <td className={`font-light ${thCommonClass}`}>{index + 1}</td>
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
              <td
                className={`flex justify-center items-center flex-col ${thCommonClass}`}
              >
                <span className="font-semibold text-gray-600">
                  {item.egg_details.number}
                </span>
                <span className={` rounded-md px-4 text-sm mt-1 ${item.egg_details.bgColor} ${item.egg_details.textColor}`}>
                  {item.egg_details.label}
                </span>
              </td>
              <td className={` ${thCommonClass} text-sm`}>
                <span
                  className={`text-gray-500  px-3 py-1 rounded-md`}
                >
                  {item.site_name}
                </span>
              </td>

              <td className={` ${thCommonClass} text-gray-500`}>
                {item.collected_on}
              </td>
              <td className={` ${thCommonClass} text-gray-500`}>
                {item.batch_number}
              </td>
              <td className={` ${thCommonClass}`}>
              <div className="flex justify-center items-center gap-x-1">
                  <div className="w-12 h-[4.5rem] py-3 flex justify-center items-center">
                    <div className="w-full h-full overflow-hidden rounded-full">
                      <Image
                        src={item.collected_by_detailes.url}
                        alt={item.collected_by_detailes.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-700">
                      {item.collected_by_detailes.name}
                    </h2>
                    <p className="truncate max-w-xs text-gray-700">
                      {item.collected_by_detailes.designation}
                    </p>
                  </div>
                </div>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ReceivedTable;
