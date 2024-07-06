"use client";
import React, { useState } from "react";
import Menu from "../dashboard/Menu";
import Hero from "../dashboard/Hero";
import OverlayWithPopup from "../common/OverLayWithPopup";


const DashboardLayout = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <div
        className={`grid ${
          toggle ? "grid-cols-[50px,auto]" : "grid-cols-[250px,auto]"
        } h-screen`}
      >
        <Menu toggle={toggle} setToggle={setToggle} />
        <Hero>{children}</Hero>
      </div>
      <OverlayWithPopup />
    </div>
  );
};

export default DashboardLayout;
