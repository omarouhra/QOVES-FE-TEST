import React from "react";
import { cn } from "../../../utils/cn";

interface CardProps {
  title: string;
  subtitle: string;
  variant?: "default" | "highlighted";
}
export const Card = ({ title, subtitle, variant = "default" }: CardProps) => {
  return (
    <div
      className={cn(
        "p-3 h-[136px] min-w-[161px] md:min-w-[221px] border  rounded-lg flex flex-col justify-between text-left cursor-pointer duration-300",
        variant === "highlighted"
          ? "bg-[#3A4B51] border-[#B0B0B0]"
          : "bg-[#F2F2F2] border-[#F2F2F2]"
      )}
    >
      <p
        className={cn(
          "text-[#9AAEB5] uppercase text-xs tracking-tight font-mono",

          variant === "highlighted" ? "text-[#9AAEB5] " : "text-[#758084]"
        )}
      >
        {subtitle}
      </p>
      <h2
        className={cn(
          "text-lg md:text-2xl font-semibold",
          variant === "highlighted" ? "text-[#E8E8E8]" : "text-[#121212]"
        )}
      >
        {title}
      </h2>
    </div>
  );
};
