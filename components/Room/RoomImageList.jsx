import React from "react";
import Image from "next/image";

import "./styles.css";

export default function RoomImageList({ images }) {
  return (
    <>
      <div className="room-heading carcular-conui sm:flex hidden sm:flex-row flex-col gap-5 justify-between align-middle mt-[1.5rem] mb-12 sm:w-auto w-[100%]">
        <div className="sm:text-sm text-sm tracking-[.012rem] sm:font-normal flex">
          <div className="hover:underline">Beautiful 4 BHK villa</div>
          <div>&gt;</div> <div className="hover:underline">Mountain view</div>
          <div>&gt;</div>
          <div className="hover:underline">Swimming pool</div>
        </div>
      </div>

      <div className="imggallery sm:h-[55vh] w-[60vw]">
        <div className="sm:grid hidden sm:grid-cols-2 sm:grid-rows-2 gap-3">
          {images?.map((image, index) => (
            <div key={index} className={`sm:col-span-1 sm:row-start-${index + 1}`}>
              <Image
                src={image}
                alt={`Room Image ${index + 1}`}
                width={720}
                height={480}
                className="sm:w-full w-[80vw] h-[22rem] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
