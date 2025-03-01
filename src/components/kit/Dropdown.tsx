"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { cn } from "../../../utils/cn";
import Book from "../icons/Book";
import DpChevron from "../icons/DpChevron";

const methods = [
  { id: "length", label: "by Length" },
  { id: "baum", label: "Baum's Method" },
  { id: "goode", label: "Goode's Method" },
  { id: "simon", label: "Simon's Method" },
  { id: "byrd", label: "Byrd's Method" },
  { id: "tvl", label: "TVL Method" },
  { id: "baud", label: "Baud's Method" },
  { id: "corneal", label: "Corneal Method" },
];

export const Dropdown = () => {
  const [selectedMethod, setSelectedMethod] = useState("simon");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedLabel =
    methods.find((method) => method.id === selectedMethod)?.label || "";

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMethodSelect = (id: string) => {
    setSelectedMethod(id);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown trigger button */}
      <button
        onClick={toggleDropdown}
        className={cn(
          "flex w-full cursor-pointer rounded-md border border-[#E8E8E8] bg-white px-[10px] py-2",
          isOpen && "ring-2 ring-offset-1 ring-[#9AAEB5] duration-300"
        )}
      >
        <div className="flex items-center justify-center space-x-3 ">
          <Book />
          <p className="font-medium  text-[#233137] text-xs">
            {selectedMethod ? selectedLabel : "Select Method"}
          </p>
          <div className=" flex items-center justify-center space-x-2">
            <div className="h-4 w-px bg-[#E8E8E8]" />
            <DpChevron isOpen={isOpen} />
          </div>
        </div>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-1 rounded-lg border border-[#F2F2F2] bg-white px-3 py-4  space-y-4 z-50">
          {methods.map((method) => (
            <div
              key={method.id}
              onClick={() => handleMethodSelect(method.id)}
              className="flex cursor-pointer items-center justify-between border-gray-100"
            >
              <div className="text-xs font-medium text-[#233137]">
                {method.label}
              </div>
              <div
                className={`flex size-4 items-center justify-center rounded-full border ${
                  selectedMethod === method.id
                    ? "border-gray-400"
                    : "border-gray-300"
                }`}
              >
                {selectedMethod === method.id && (
                  <div className="h-4 w-4 rounded-full bg-[#9AAEB5] flex items-center justify-center">
                    <div className="size-1.5 border border-[#E8E8E8] bg-white rounded-full" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
