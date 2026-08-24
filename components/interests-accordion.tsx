"use client";

import { useState } from "react";
import { ArrowUpRight, CloseIcon } from "./icons";

interface Interest {
  title: string;
  description: string;
}

const interests: Interest[] = [
  {
    title: "Photography",
    description: "Mostly cars and whatever's in front of me. I shoot to slow down, not to post.",
  },
  {
    title: "Cars",
    description: "The mechanical kind. Older is better.",
  },
  {
    title: "Linux & PC Building",
    description: "Daily driving Linux Mint on a ThinkPad. Building things is how I learn how they work.",
  },
  {
    title: "Analog Writing",
    description: "Cursive, fountain pens, leather journals. Everything else in my life is on a screen. This isn't.",
  },
];

export function InterestsAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-8 sm:mt-10">
      {interests.map((interest, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={interest.title}
            className={`transition-colors duration-[var(--dur-slow)] ${
              isOpen ? "rounded-card bg-ink-soft" : i === 0 ? "" : "border-t border-hairline"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className={`flex w-full items-center justify-between gap-6 text-left transition-[padding] duration-[var(--dur-slow)] ${
                isOpen ? "px-6 pt-6 sm:px-8 sm:pt-8" : "px-0 py-6"
              }`}
            >
              <span
                className={`font-display font-bold uppercase tracking-[-0.01em] transition-[font-size] duration-[var(--dur-slow)] ${
                  isOpen ? "text-xl text-inverse" : "text-lg text-ink sm:text-xl"
                }`}
              >
                {interest.title}
              </span>
              <span
                aria-hidden="true"
                className={`lift flex h-9 w-9 shrink-0 items-center justify-center rounded-pill ${
                  isOpen ? "text-inverse" : "text-ink"
                }`}
                style={{ background: isOpen ? "rgba(247,246,243,0.1)" : "transparent" }}
              >
                {isOpen ? <CloseIcon className="h-4 w-4" /> : <ArrowUpRight className="h-5 w-5 text-ink/60" />}
              </span>
            </button>

            <div className="accordion-panel" data-open={isOpen}>
              <div>
                <p className="max-w-[65ch] px-6 pb-6 text-base leading-[1.6] text-inverse/70 sm:px-8 sm:pb-8">
                  {interest.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
