import HomePage from "@/components/home/HomePage";
import SaveDeviceIdLocalstorage from "@/utils/SaveDeviceIdLocalstorage ";
import React from "react";

const page = () => {
  return (
    <>
      <SaveDeviceIdLocalstorage />
      <HomePage />
    </>
  );
};

export default page;
