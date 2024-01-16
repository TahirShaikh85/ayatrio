'use client'
import React from "react";
import { useState } from "react";

const QuestionAnswer = ({ question, answer }) => {
    const [show, setShow] = useState(false);
  return (
    <div className="p-1">
      <div className="main-heading" onClick={()=>setShow(!show)}>
        <h3 className="font-semibold text-lg hover:underline">{question}</h3>
      </div>
      {
        show && <p className="answers">{answer}</p>
      }
    </div>
  );
};

export default QuestionAnswer;
