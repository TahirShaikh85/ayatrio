'use client'
import "../../Dropitems/Styles";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Aboutcollections = () => {
  const aboutcollections = [
    "This is Ayatrio",
    "Sustainability",
    "Ayatrio Stores",
    "Ayatrio for Business",
    "Member Feedback",
  ];
  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const handleToggleAccordion = () => {
    setAccordionOpen(!isAccordionOpen);
  };
  return (
    <div className="filter_item">
      <div className="sm:block hidden ">
        <h4 className={`filter_heading text-black mb-[20px]`}>About Ayatrio</h4>
        <div className="filter_content">
          <ul className="filter_content_list ">
            {aboutcollections.map((item) => (
              <li>
                {item === "This is Ayatrio" ? (
                  <Link href={"/thisisayatrio"}>{item}</Link>
                ) : item === "Sustainability" ? (
                  <Link href={"/sustainability"}>{item}</Link>
                ) : item === "Ayatrio Stores" ? (
                  <Link href={"/ayatriomap"}>{item}</Link>
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
          className="filter_heading_mobile  font-semibold flex flex-row justify-between mb-[20px] items-center text-black"
          onClick={handleToggleAccordion}
        >
          About Ayatrio
          {isAccordionOpen ? (
            <Image src='/leftvector.svg' height={10} width={10} alt="up" className="sm:font-bold font-medium sm:text-2xl text-xl text-gray-500 cursor-pointer" />
          ) : (
            <Image src='/rightvector.svg' height={10} width={10} alt="down" className="sm:font-bold font-medium sm:text-2xl text-xl text-gray-500 cursor-pointer" />
          )}
        </h4>
        {isAccordionOpen && (
          <div className="filter_content_mobile sm:hidden mb-3">
            <ul className="filter_content_list_mobile font-normal flex flex-col text-slate-700 gap-[20px] ">
              {aboutcollections.map((item) => (
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

export default Aboutcollections;
