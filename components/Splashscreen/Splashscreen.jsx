import React from "react";
// import mainlogo from '../../assets/ayatriologo.png';
import Image from "next/image";
const Splashscreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white  ">
      <div className="text-center">
        <Image
          src="/ayatriologo.png"
          alt="logo"
          width={200}
          height={100}
          className="w-80 h-auto transition-all ease-linear duration-500"
        ></Image>
      </div>
    </div>
  );
};

export default Splashscreen;
