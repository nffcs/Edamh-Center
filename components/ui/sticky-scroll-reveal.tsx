"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);

    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );

    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ["#2f4b53", "#365761", "#446a74"];

  const linearGradients = [
    "linear-gradient(135deg, #2f4b53 0%, #3f6470 100%)",
    "linear-gradient(135deg, #6f96a0 0%, #4e7b84 100%)",
    "linear-gradient(135deg, #35545d 0%, #6fae8a 100%)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[34rem] justify-center gap-10 overflow-y-auto rounded-[28px] p-6 md:p-10"
      ref={ref}
    >
      <div className="relative flex items-start px-2 md:px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-16 md:my-20">
              <motion.h2
                initial={{ opacity: 0.3 }}
                animate={{ opacity: activeCard === index ? 1 : 0.35 }}
                className="text-2xl md:text-3xl font-bold text-white"
              >
                {item.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0.3 }}
                animate={{ opacity: activeCard === index ? 1 : 0.35 }}
                className="mt-6 max-w-lg text-base leading-8 text-white/80"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-24" />
        </div>
      </div>

      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-[24rem] w-[30rem] overflow-hidden rounded-[24px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.16)] lg:block",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
