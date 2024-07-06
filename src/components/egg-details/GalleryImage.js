import Image from "next/image";
import React from "react";

const GalleryImage = ({title}) => {
  return (
    <div className="bg-white shadow-lg py-4 px-6 rounded-md">
      <h3 className="text-xl font-semibold mb-3 text-gray-600">{title}</h3>
      <div className="w-full rounded-lg overflow-hidden">
        <Image
          src={"https://static-cse.canva.com/blob/679944/lilac11.png"}
          width={320}
          height={150}
        />
      </div>
      <div>
        <div className="flex justify-start items-center gap-x-2 mt-3">
          <div className="">
            <Image
              className="rounded-full overflow-hidden border border-gray-500 cursor-pointer"
              src={"/user2.avif"}
              width={40}
              height={40}
              alt="Profile Image"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Jordan Steveson</h3>
            <small className="text-gray-400">Update on 1 Apr 2024</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryImage;
