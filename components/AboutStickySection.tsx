"use client";

import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Personalized Assessment",
    description:
      "Every recovery journey begins with a detailed understanding of the patient’s condition, mobility limitations, pain points, and goals. We build treatment plans that are tailored, practical, and designed around real progress.",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Medical assessment"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Guided Rehabilitation",
    description:
      "Our clinic combines modern physiotherapy techniques with close professional guidance, helping patients recover movement, reduce discomfort, and rebuild confidence through structured care.",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/4506105/pexels-photo-4506105.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Rehabilitation therapy"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Long-Term Wellness",
    description:
      "We focus on outcomes that continue beyond short-term relief. From injury recovery to improving mobility and day-to-day function, our approach supports stronger, more lasting results for each patient.",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6111600/pexels-photo-6111600.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Long-term patient wellness"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
];

export default function AboutStickySection() {
  return (
    <section className="w-full py-20 md:py-28 bg-[#f7fafa]">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-10 md:mb-14">
          <p className="mb-4 text-[0.8rem] font-bold uppercase tracking-[0.22em] text-[#6f96a0]">
            Our Approach
          </p>
          <h2 className="max-w-4xl text-3xl font-bold leading-tight text-[#2f4b53] md:text-5xl">
            A clearer view of how we support recovery and movement.
          </h2>
        </div>

        <StickyScroll content={content} />
      </div>
    </section>
  );
}
