import React from "react";
import { cn } from "../../../utils/cn";

interface SubtitleProps {
  text: string;
  className?: string;
}

const Subtitle = ({ text, className }: SubtitleProps) => {
  return (
    <p
      className={cn(
        "text-[#758084] whitespace-nowrap uppercase text-xs font-mono tracking-[-0.005em]",
        className
      )}
    >
      {text}
    </p>
  );
};

export default Subtitle;
