import React from "react";
import Image from "next/image";
import Label from "../Label/Label";


const meausrement = () => {
  return (
    <div className="flex sm:flex-row w-full h-auto flex-col sm:px-[50px] px-[20px] relative overflow-hidden ">
      <div className="relative max-h-[500px] ">
        <Image
          src="/product/curtain.avif"
          alt="curtain"
          width={700}
          height={300}
          style={{ objectFit: "cover" }}
        />
      <div className="carcular-conui top-16 left-48  absolute rounded-full w-[30px] h-[30px]">
        <Label/>
        </div>
        <div className="carcular-conui absolute top-8 left-[26rem] rounded-full w-[30px] h-[30px]">
          <Label />
        </div>
      </div>
      <div className="sm:w-1/3  sm:h-auto sm:flex-grow bg-zinc-100  px-10 sm:py-10 py-5">
        <div className="flex flex-col ">
          <div>Where we found happiness</div>
          <div>
            <p>"When you design your house, you tend to do everything that is right for you. Ayatrio has actually turned our dream into reality"</p>
          </div>
          <div className="flex flex-row feedcon">
            <Image src="/sunita chayan.JPG" width={45} height={45} alt="arrow" className="usercon rounded-full" />
            <p>Sunitha Roy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default meausrement;
