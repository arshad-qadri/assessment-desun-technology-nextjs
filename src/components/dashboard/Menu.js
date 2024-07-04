import React from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { GiApothecary } from "react-icons/gi";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Menu = ({ toggle, setToggle }) => {
  const pathname = usePathname();
  console.log("router", pathname);
  const menuList = [
    { Icon: GiApothecary, label: "Dashboard", to: "/" },
    { Icon: GiApothecary, label: "Nursery", to: "/#" },
    { Icon: GiApothecary, label: "Incubator Rooms", to: "/#" },
    { Icon: GiApothecary, label: "Incubators", to: "/#" },
    { Icon: GiApothecary, label: "Brooders", to: "/#" },
    { Icon: GiApothecary, label: "Eggs", to: "/eggs" },
  ];
  return (
    <div className="bg-[#1f515b] py-2 pr-3">
      <div className="relative">
        {!toggle && (
          <h1 className="text-white font-semibold text-2xl text-center">
            Materialize
          </h1>
        )}
        <div
          className="absolute right-1 top-1 cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <MdKeyboardDoubleArrowRight size={25} color="#fff" />
          ) : (
            <MdKeyboardDoubleArrowLeft size={25} color="#fff" />
          )}
        </div>
      </div>
      {/* #2b6672 */}
      {/* ============== menuList============ */}
      <ul className={toggle ? "mt-12" : "mt-5"}>
        {menuList.map((item, index) => {
          const { label, Icon, to } = item;
          return (
            <Link href={to} key={index}>
              <li
                className={`flex justify-start gap-2 my-3 pl-2 cursor-pointer py-3 ${
                  pathname === to ? "bg-[#2b6672] rounded-r-lg" : ""
                }`}
                title={label}
              >
                <Icon color="#fff" size={25} />{" "}
                {!toggle && (
                  <span className="text-white font-light">{label}</span>
                )}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
