import React from "react";
import Image from "next/image";

const Double = () => {
  return (
    <div className="flex">
      {/* First Section */}
      <div className="mr-2 mt-6 ">
        <img
          src="/images/cover.jpg"
          className="sm:h-52 h-44 sm:w-48 w-28 rounded-t-lg"
          alt=""
        />
        <div className="bg-black sm:w-48 w-28 flex flex-col rounded-b-lg">
          <div className="text-white text-sm pt-3  pl-4">Bossman Dlow</div>
          <div className="text-xs pb-3 pl-4">Slippery</div>
        </div>
      </div>

      {/* Second Section */}
      <div className="pr-0 ">
        <img
          src="/images/cover.jpg"
          className="sm:h-60 h-48 sm:w-60 w-44 rounded-t-lg"
          alt=""
        />
        <div className="bg-black sm:w-60 w-44 flex flex-col rounded-b-lg">
          <div className="flex flex-row items-start">
            <div className="text-white text-sm pt-3 pl-4">
              Bossman Dlow
              <br />
              <div className="text-xs pb-6">Slippery</div>
            </div>
            <button className="bg-white w-16 text-black rounded-full ml-12 mt-4 pl-1 pr-1 pb-1">
              Listen
            </button>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="ml-2 mt-[-12px]">
        <div className="ml-28 mb-3">
          <Image src='/music.svg' height={20} width={20} alt="music"/>
        </div>
        <img
          src="/images/cover.jpg"
          className="sm:h-52 h-44 sm:w-48 w-36 rounded-t-lg"
          alt=""
        />
        <div className="bg-black sm:w-48 w-36 flex flex-col rounded-b-lg">
          <div className="text-white text-sm pt-3 pl-4">Bossman Dlow</div>
          <div className="text-xs pb-3 pl-4">Slippery</div>
        </div>
      </div>
    </div>
  );
};
export default Double;
