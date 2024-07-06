import React from "react";
import GalleryImage from "./GalleryImage";

const GalleryImages = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700">Image Gallery</h2>
      <div className="grid grid-cols-3 gap-x-4 my-5">
        <GalleryImage title="Collection" />
        <GalleryImage title="Security Check" />
        <GalleryImage title="Transfer" />
      </div>
    </div>
  );
};

export default GalleryImages;
