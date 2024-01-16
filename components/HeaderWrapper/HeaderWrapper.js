"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Header from "../Header";

const HeaderWrapper = () => {
  const pathname = usePathname();
  // if (pathname === "/") {
  //   return null;
  // }
  console.log(pathname);
  const routes = ["/", "/login"];
  if (routes.includes(pathname)) {
    return null;
  } else {
    return <Header />;
  }
};

export default HeaderWrapper;
