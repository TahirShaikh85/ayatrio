'use client'
import Link from "next/link";
import "../../Dropitems/Styles";
import React, { useState } from "react";
import Image from "next/image";
const Helpcollections = () => {
  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const handleToggleAccordion = () => {
    setAccordionOpen(!isAccordionOpen);
  };
  const helpcollections = [
    "Design & Planners",
    "Return policy",
    "Prices and price tags",
    "Gift Cards",
    "Contact us",
    "FAQ",
    "Terms and conditions",
  ];
  return (
    <div className="filter_item">
      <div className="sm:block hidden ">
        <h4 className={`filter_heading text-black mb-[20px] `}>Help</h4>
        <div className="filter_content">
          <ul className="filter_content_list ">
            {helpcollections.map((item) => (
              <li>
                {item === "Return policy" ? (
                  <Link href="/customerservice/returnpolicy">{item}</Link>
                ) : item === "Gift Cards" ? (
                  <Link href="/customerservice/giftcards">{item}</Link>
                ) : item === "Contact us" ? (
                  <Link href="/customerservice/contactus">{item}</Link>
                ) : item === "FAQ" ? (
                  <Link href="/customerservice/faq">{item}</Link>
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
          className="filter_heading_mobile font-semibold mb-[20px]  flex flex-row justify-between items-center text-black"
          onClick={handleToggleAccordion}
        >
          Help
          {isAccordionOpen ? (
            <Image src='/leftvector.svg' height={10} width={10} alt="up" className="sm:font-bold font-medium sm:text-2xl text-xl text-gray-500 cursor-pointer" />
          ) : (
            <Image src='/rightvector.svg' height={10} width={10} alt="up" className="sm:font-bold font-medium sm:text-2xl text-xl text-gray-500 cursor-pointer" />
          )}
        </h4>
        {isAccordionOpen && (
          <div className="filter_content_mobile sm:hidden mb-3">
            <ul className="filter_content_list_mobile flex flex-col gap-[20px] font-normal text-slate-700 ">
              {helpcollections.map((item) => (
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

export default Helpcollections;
