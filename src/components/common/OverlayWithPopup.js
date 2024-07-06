import { useOverlay } from "@/context/OverlayContext";
import React from "react";
const OverlayWithPopup = () => {
  const { overlay, setOverlay } = useOverlay();
  return (
    <div
      className={`absolute h-full w-full top-0 transition-transform duration-500 ${
        overlay ? "translate-x-0" : "translate-x-full"
      } grid grid-cols-[60%,auto]`}
    >
      <div className="bg-[#1f515bb7]"></div>
      <div className="bg-white p-4">
        <button onClick={() => setOverlay(false)}>X</button>
      </div>
    </div>
  );
};

export default OverlayWithPopup;
