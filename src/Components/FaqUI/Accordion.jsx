import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Accordion({ question, answer, questionNumber }) {
  const [showAccordion, setShowAccordion] = useState(false);

  function toggleAccordion() {
    setShowAccordion((prev) => !prev);
  }

  return (
    <div
      onClick={toggleAccordion}
      className="mx-auto w-11/12 bg-[#ffffff90] px-4 py-3 shadow-md hover:cursor-pointer sm:w-4/5 lg:w-3/5 "
    >
      <div className="faqFont flex justify-between text-[19px] font-semibold capitalize xs:text-[21px]  sm:text-2xl ">
        <h4>
          Q{questionNumber + 1}. {question}
        </h4>
        <span
          className={`text-2xl transition-all duration-[400ms] ${showAccordion ? "rotate-[-180deg]" : ""}  sm:text-3xl`}
        >
          <IoMdArrowDropdown />
        </span>
      </div>

      <div
        className={`paragraphFont  grid ${showAccordion ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} transition-all duration-[400ms]`}
      >
        <div className="normalFont mt-1 overflow-hidden px-1 capitalize">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}
