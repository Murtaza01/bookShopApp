import React from "react";
import booksData from "../../assets/data/booksData";
export default function User({ name, image, description }) {
  const booksContributed = booksData.filter(({ user }) => user === name).length;
  return (
    <div className="flex h-72 basis-72 flex-col items-center   py-3 ">
      <div className="w-24 overflow-hidden rounded-full  p-1">
        <img src={image} alt="" />
      </div>
      <div className="flex flex-col items-center  gap-1">
        <h3 className="headingFont text-2xl">{name}</h3>
        <p className="paragraphFont text-[18px]">
          Books Contributed:{" "}
          <span className="headingFont text-lg font-semibold text-blue-600 md:text-xl">
            {booksContributed}
          </span>{" "}
        </p>
        <p className="normalFont text-center capitalize ">{description}</p>
      </div>
    </div>
  );
}
