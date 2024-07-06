import EggHistory from "@/components/egg-details/EggHistory";
import EggInfoHeader from "@/components/egg-details/EggInfoHeader";
import EggJourney from "@/components/egg-details/EggJourney";
import GalleryImages from "@/components/egg-details/GalleryImages";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full relative">
      <div className="my-3 tracking-wide">
        <span className="opacity-50">Egg Module</span>
        <Link href={"/eggs"}>
          <span className="opacity-50"> / Egg List</span>
        </Link>
        <span className="opacity-75"> / Egg Detais</span>
      </div>
      <EggInfoHeader />
      <EggHistory />
      <EggJourney />
      <GalleryImages />
    </div>
  );
};

export default page;
