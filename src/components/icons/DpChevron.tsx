import React from "react";

const DpChevron = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className=" size-4 text-[#233137]"
    >
      <path
        d="m7 15 5 5 5-5"
        className={`transition-transform duration-500 ease-in-out origin-[50%_75%] ${
          isOpen ? "rotate-180" : ""
        }`}
      />
      <path
        d="m7 9 5-5 5 5"
        className={`transition-transform duration-500 ease-in-out origin-[50%_25%] ${
          isOpen ? "-rotate-180" : ""
        }`}
      />
    </svg>
  );
};

export default DpChevron;
