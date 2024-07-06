import React from "react";
import Pagination from "../common/Pagination";
import Image from "next/image";
import { useRouter } from "next/navigation";

const IncubationTable = () => {
  const { push } = useRouter();
  const headres = [
    "NO",
    "EGG NUMBER",
    "SPECIES",
    "DAYS IN INCUBATION",
    "STAGE",
    "CONDITION",
    "CURRENT WEIGHT",
    "INITIAL WEIGHT",
    "INITIAL SIZE - L",
    "INITIAL SIZE - W",
    "NO. EGG / CLUTCH",
    "CLUTCH ID",
    "SITE",
    "NURSERY",
    "ENCLOSER",
    "CLLECTED ON",
    "LEY DATE",
    "COLLECTED BY",
  ];
  const data = [
    {
      egg_details: {
        number: "0273 / 24",
        label: "Infertile",
        bgColor: "bg-[#e1f9ed]",
        textColor: "text-[#37bd69]",
        url: "/egg.png",
      },
      days_in_incubation: "2",
      stage: "Infertile",
      condition: "Warm",
      current_weight_info: {
        weight: "300gm",
        percentage: "-5%",
      },
      initial_weight: "315gm",
      initial_size_l: "33.41mm",
      initial_size_w: "22.72mm",
      no_egg_clutch: "3",
      clutch_id: "1234",
      site: "Site Name",
      nusery: "Nursery Name",
      encloser: "24 D",
      collected_on: "1 Mar 2024",
      ley_date: "1 Mar 2024",
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
        label: "Infertile",
        bgColor: "bg-[#e1f9ed]",
        textColor: "text-[#37bd69]",
        url: "/egg.png",
      },
      days_in_incubation: "2",
      stage: "Infertile",
      condition: "Warm",
      current_weight_info: {
        weight: "300gm",
        percentage: "-5%",
      },
      initial_weight: "315gm",
      initial_size_l: "33.41mm",
      initial_size_w: "22.72mm",
      no_egg_clutch: "3",
      clutch_id: "1234",
      site: "Site Name",
      nusery: "Nursery Name",
      encloser: "24 D",
      collected_on: "1 Mar 2024",
      ley_date: "1 Mar 2024",
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
        label: "Infertile",
        bgColor: "bg-[#e1f9ed]",
        textColor: "text-[#37bd69]",
        url: "/egg.png",
      },
      days_in_incubation: "2",
      stage: "Infertile",
      condition: "Warm",
      current_weight_info: {
        weight: "300gm",
        percentage: "-5%",
      },
      initial_weight: "315gm",
      initial_size_l: "33.41mm",
      initial_size_w: "22.72mm",
      no_egg_clutch: "3",
      clutch_id: "1234",
      site: "Site Name",
      nusery: "Nursery Name",
      encloser: "24 D",
      collected_on: "1 Mar 2024",
      ley_date: "1 Mar 2024",
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
        label: "Infertile",
        bgColor: "bg-[#e1f9ed]",
        textColor: "text-[#37bd69]",
        url: "/egg.png",
      },
      days_in_incubation: "2",
      stage: "Infertile",
      condition: "Warm",
      current_weight_info: {
        weight: "300gm",
        percentage: "-5%",
      },
      initial_weight: "315gm",
      initial_size_l: "33.41mm",
      initial_size_w: "22.72mm",
      no_egg_clutch: "3",
      clutch_id: "1234",
      site: "Site Name",
      nusery: "Nursery Name",
      encloser: "24 D",
      collected_on: "1 Mar 2024",
      ley_date: "1 Mar 2024",
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
        label: "Infertile",
        bgColor: "bg-[#e1f9ed]",
        textColor: "text-[#37bd69]",
        url: "/egg.png",
      },
      days_in_incubation: "2",
      stage: "Infertile",
      condition: "Warm",
      current_weight_info: {
        weight: "300gm",
        percentage: "-5%",
      },
      initial_weight: "315gm",
      initial_size_l: "33.41mm",
      initial_size_w: "22.72mm",
      no_egg_clutch: "3",
      clutch_id: "1234",
      site: "Site Name",
      nusery: "Nursery Name",
      encloser: "24 D",
      collected_on: "1 Mar 2024",
      ley_date: "1 Mar 2024",
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
    <div>
      <div className="w-full my-5 overflow-x-auto overflow-hidden hide-scrollbar">
        <table className="w-[2400px] rounded-t-lg overflow-hidden overflow-x-auto">
          <thead>
            <tr className="bg-[#d4e1df]">
              {headres.map((head, index) => (
                <th
                  key={index}
                  className={`py-5 px-1 text-xs text-gray-600 font-semibold uppercase text-left ${
                    [0, 1].includes(index) ? "sticky" : ""
                  } ${index === 0 && "left-0 bg-[#c1d3d0]"} ${
                    index === 1 && "left-[34px] bg-[#c1d3d0]"
                  }`}
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                className="border-b cursor-pointer"
                key={index}
                onClick={() => push(`/egg/egg-details/${index}`)}
              >
                <td
                  className={`font-light ${thCommonClass} sticky left-0 z-30 bg-white`}
                >
                  {index + 1}
                </td>

                <td
                  className={` ${thCommonClass}  sticky left-[34px] z-30  bg-white border-r border-gray-300 h-full`}
                >
                  <div className="flex justify-start items-center gap-x-1">
                    <div className="w-12 h-[3rem] flex justify-center items-center rounded-md border">
                      <Image
                        src={item.egg_details.url}
                        alt={item.egg_details.number}
                        width={40}
                        height={40}
                        layout="responsive"
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h2 className="font-semibold text-green-800">
                        {item.egg_details.number}
                      </h2>
                      <small
                        className={`truncate max-w-xs  ${item.egg_details.bgColor} ${item.egg_details.textColor} px-3 py-1 rounded-md font-semibold text-sm`}
                      >
                        {item.egg_details.label}
                      </small>
                    </div>
                  </div>
                </td>
                <td className={` ${thCommonClass}`}>
                  <div className="flex justify-start items-center gap-x-1">
                    <div className="w-12 h-[3rem] flex justify-center items-center rounded-full">
                      <div className="w-full h-full overflow-hidden rounded-full">
                        <Image
                          src={item.species.image}
                          alt={item.species.name}
                          width={40}
                          height={40}
                          layout="responsive"
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
                <td className={` ${thCommonClass}`}>
                  <span className={`text-gray-500 text-[18px]`}>
                    {item.days_in_incubation}
                  </span>
                </td>

                <td
                  className={` ${thCommonClass} text-green-800 font-semibold`}
                >
                  {item.stage}
                </td>
                <td
                  className={` ${thCommonClass} text-green-800 font-semibold`}
                >
                  {item.condition}
                </td>
                <td className={` ${thCommonClass}`}>
                  <span className="text-[15px] font-semibold pr-2 border-r text-gray-500">
                    {item.current_weight_info.weight}
                  </span>
                  <span className="text-[15px] font-semibold pl-2 text-green-500">
                    {item.current_weight_info.percentage}
                  </span>
                </td>
                <td className={` ${thCommonClass}`}>
                  <span className="text-[15px] text-gray-500">
                    {item.initial_weight}
                  </span>
                </td>
                <td className={` ${thCommonClass}`}>
                  <span className="text-[15px] text-gray-500">
                    {item.initial_size_l}
                  </span>
                </td>
                <td className={` ${thCommonClass}`}>
                  <span className="text-[15px]  text-gray-500">
                    {item.initial_size_w}
                  </span>
                </td>
                <td className={` ${thCommonClass}`}>
                  <span className="text-[15px]  text-gray-500">
                    {item.no_egg_clutch}
                  </span>
                </td>
                <td className={` ${thCommonClass}`}>
                  <span className="text-[15px]  text-gray-500">
                    {item.clutch_id}
                  </span>
                </td>
                <td className={` ${thCommonClass}`}>
                  <span className="text-[15px]  text-gray-500">
                    {item.site}
                  </span>
                </td>
                <td className={` ${thCommonClass}`}>
                  <span className="text-[15px]  text-gray-500">
                    {item.nusery}
                  </span>
                </td>
                <td className={` ${thCommonClass}`}>
                  <span className="font-semibold text-green-800">
                    {item.encloser}
                  </span>
                </td>
                <td className={` ${thCommonClass}`}>
                  <span className="text-[15px]  text-gray-500">
                    {item.collected_on}
                  </span>
                </td>
                <td className={` ${thCommonClass}`}>
                  <span className="text-[15px]  text-gray-500">
                    {item.ley_date}
                  </span>
                </td>

                <td className={` ${thCommonClass} relative`}>
                  <div className="flex justify-center items-center gap-x-1">
                    <div
                      className="w-12 h-12 flex justify-center items-center overflow-hidden "
                      style={{ borderRadius: "50%" }}
                    >
                      <Image
                        src={item.collected_by_detailes.url}
                        alt={item.collected_by_detailes.name}
                        width={40}
                        height={40}
                        layout="responsive"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="font-semibold text-sm text-gray-700">
                        {item.collected_by_detailes.name}
                      </h2>
                      <p className="truncate max-w-xs text-gray-700 text-sm">
                        {item.collected_by_detailes.designation}
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};

export default IncubationTable;
