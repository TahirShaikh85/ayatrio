'use client'
import "../../Dropitems/Styles";
import React, { useState } from "react";
import Image from "next/image"; 
import Link from "next/link";

const AyatrioServices = () => {
  const ServicesCollections = [
    "Delivery Service",
    "Installation Service",
    "Wallpaper",
    "Flooring",
    "Blinds",
    "Curtatins",
    "Sport Flooring",
    "Design Service",
    "Customer Service",
  ];

  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const handleToggleAccordion = () => {
    setAccordionOpen(!isAccordionOpen);
  };
  return (
    <div className="filter_item">
      <div className="sm:block hidden ">
        <h4 className={`filter_heading text-black mb-[20px]`}>Service</h4>
        <div className="filter_content">
          <ul className="filter_content_list ">
            {ServicesCollections.map((item) => (
              <li>
                {item === "Customer Service" ? (
                  <Link href="/customerservice">{item}</Link>
                ) : item === "Delivery Service" ? (
                  <Link href="/deliveryservice">{item}</Link>
                ) : item === "Design Service" ? (
                  <Link href="/designservice">{item}</Link>
                ) : item === "Installation Service" ? (
                  <Link href="/installationservice">{item}</Link>
                ) : (
                  <a href="#">{item}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="sm:hidden ">
        <h4
          className="filter_heading_mobile mb-[20px] font-semibold  flex flex-row justify-between items-center text-black"
          onClick={handleToggleAccordion}
        >
          Service
          {isAccordionOpen ? (
            <Image src='/leftvector.svg' height={10} width={10} alt="up" className="sm:font-bold font-medium sm:text-2xl text-xl text-gray-500 cursor-pointer" />
          ) : (
            <Image src='/rightvector.svg' height={10} width={10} alt="up" className="sm:font-bold font-medium sm:text-2xl text-xl text-gray-500 cursor-pointer" />
          )}
        </h4>
        {isAccordionOpen && (
          <div className="filter_content_mobile sm:hidden mb-3">
            <ul className="filter_content_list_mobile flex flex-col gap-[20px] font-normal  text-slate-700 ">
              {ServicesCollections.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AyatrioServices;
