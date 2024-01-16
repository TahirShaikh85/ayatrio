"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Footer from "../Footer/Footer";

const FooterWrapper = () => {
  const pathname = usePathname();
  console.log(pathname);
  const routes = ["/ayatrio-map", "/", "/login"];
  if (routes.includes(pathname)) {
    return null;
  } else {
    return <Footer />;
  }
};

export default FooterWrapper;
