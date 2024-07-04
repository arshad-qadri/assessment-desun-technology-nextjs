"use client";
import React, { useState } from "react";
import Menu from "../dashboard/Menu";
import Hero from "../dashboard/Hero";

const DashboardLayout = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={`grid  ${
        toggle ? "grid-cols-[50px,auto]" : "grid-cols-[250px,auto]"
      } h-screen`}
    >
      <Menu toggle={toggle} setToggle={setToggle} />
      <Hero>{children}</Hero>
    </div>
  );
};

export default DashboardLayout;
