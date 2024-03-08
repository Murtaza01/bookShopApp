import React from "react";
import Accordion from "./Accordion";
import faqData from "../../assets/data/faqData";

export default function Faq() {
  return (
    <div className="min-h-[300px] pb-7">
      <div className="flex flex-col justify-center gap-5">
        {faqData.map(({ question, answer, id }, index) => {
          return (
            <Accordion
              key={id}
              question={question}
              answer={answer}
              questionNumber={index}
            />
          );
        })}
      </div>
    </div>
  );
}
