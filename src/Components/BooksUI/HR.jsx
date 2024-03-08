import React from "react";

export default function HR({ children }) {
  return (
    <div className={` my-4 w-full px-3 `}>
      <div className="center ">
        <hr className="hidden w-[37%] border-[1px] border-black sm:block" />
        {children}
        <hr className="hidden w-[37%] border-[1px] border-black sm:block" />
      </div>
    </div>
  );
}
