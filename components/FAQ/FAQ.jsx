'use client'
import React from "react";
import { FAQs } from "./FAQData";
import "./FAQ.css";
import { useState } from "react";
import QuestionAnswer from "./QuestionAnswer";

const FAQ = () => {
  const [data, setData] = useState(FAQs);
  return (
    <div>
        {data.map((curElement) => {
          return <QuestionAnswer key={curElement.id} {...curElement} />;
        })}
    </div>
  );
};

export default FAQ;
