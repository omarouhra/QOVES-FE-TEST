"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "./Card";
import { cn } from "../../../utils/cn";
import Link from "next/link";

const carouselCards = [
  { subtitle: "PROJECTION", title: "Balanced" },
  { subtitle: "TIP OF NOSE", title: "Slightly larger" },
  { subtitle: "TIP OF NOSE", title: "Slightly larger" },
  { subtitle: "TIP OF NOSE", title: "Slightly larger" },
  { subtitle: "BRIDGE", title: "Narrow" },
  { subtitle: "NOSTRILS", title: "Balanced" },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const ensureCardVisible = (index: number) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const cards = Array.from(container.children) as HTMLElement[];

    if (index >= 0 && index < cards.length) {
      const card = cards[index];
      const cardLeft = card.offsetLeft;
      const cardRight = cardLeft + card.offsetWidth;
      const containerLeft = container.scrollLeft;
      const containerRight = containerLeft + container.offsetWidth;

      // Prevent scrolling for the first card
      if (index === 0) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
        return;
      }

      if (cardLeft < containerLeft) {
        // Card is to the left of the visible area
        container.scrollTo({
          left: cardLeft - 16, // Add some padding
          behavior: "smooth",
        });
      } else if (cardRight > containerRight) {
        // Card is to the right of the visible area
        container.scrollTo({
          left: cardRight - container.offsetWidth + 16, // Add some padding
          behavior: "smooth",
        });
      }

      // Check if the next card (if it exists) would be partially hidden
      if (index < cards.length - 1) {
        const nextCard = cards[index + 1];
        const nextCardRight = nextCard.offsetLeft + nextCard.offsetWidth;

        if (nextCardRight > containerRight) {
          // Scroll to show the current card fully and part of the next card
          container.scrollTo({
            left: cardLeft - 16, // Add some padding
            behavior: "smooth",
          });
        }
      }

      // Check if the previous card (if it exists) would be partially hidden
      if (index > 0) {
        const prevCard = cards[index - 1];
        const prevCardLeft = prevCard.offsetLeft;

        if (prevCardLeft < containerLeft) {
          // Scroll to show the current card fully and part of the previous card
          container.scrollTo({
            left: cardLeft - container.offsetWidth + card.offsetWidth + 16, // Add some padding
            behavior: "smooth",
          });
        }
      }
    }
  };

  const handlePrevious = () => {
    if (activeIndex > 0) {
      const newIndex = activeIndex - 1;
      setActiveIndex(newIndex);
      ensureCardVisible(newIndex);
    }
  };

  const handleNext = () => {
    if (activeIndex < carouselCards.length - 1) {
      const newIndex = activeIndex + 1;
      setActiveIndex(newIndex);
      ensureCardVisible(newIndex);
    }
  };

  const selectParameter = (index: number) => {
    setActiveIndex(index);
    ensureCardVisible(index);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between md:pl-2.5">
        <div className="flex items-center space-x-2 md:space-x-4 font-mono">
          <p className="text-[#758084] uppercase text-xs tracking-tight">
            Noise parameters
          </p>
          <Link
            title="QOVES landing page"
            href="https://www.qoves.com/"
            target="_blank"
            className="group text-[#485DFF] flex items-center justify-center space-x-1 text-xs tracking-tight cursor-pointer"
          >
            <p className="uppercase">view all</p>
            <ArrowUpRight className="size-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-150" />
          </Link>
        </div>
        <div className="space-x-2">
          <button
            className={cn(
              "p-2.5 border border-[#F2F2F2] rounded-lg cursor-pointer",
              activeIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            )}
            onClick={handlePrevious}
            aria-label="Previous"
            disabled={activeIndex === 0}
          >
            <ChevronLeft />
          </button>
          <button
            className={cn(
              "p-2.5 border border-[#F2F2F2] rounded-lg cursor-pointer",
              activeIndex === carouselCards.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            )}
            onClick={handleNext}
            aria-label="Next"
            disabled={activeIndex === carouselCards.length - 1}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      <div className="relative">
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div
            className={cn(
              "h-full w-12 absolute -right-0",
              activeIndex === carouselCards.length - 1
                ? "bg-transparent"
                : "bg-gradient-to-r to-white"
            )}
          />
          {carouselCards.map((data, index) => (
            <button key={index} onClick={() => selectParameter(index)}>
              <Card
                title={data.title}
                subtitle={data.subtitle}
                variant={index === activeIndex ? "highlighted" : "default"}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
