"use client";

import { WavyBackground } from "@/components/ui/wavy-background";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7fafa] text-[#2f4b53]">
      {/* HERO */}
      <WavyBackground
        containerClassName="min-h-[85vh] flex items-center justify-center"
        className="text-center px-6"
        backgroundFill="#0f1f24"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          About Edamah Clinic
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-white/80 text-lg leading-8">
          We focus on helping patients recover movement, reduce pain, and
          rebuild confidence through personalized physiotherapy and
          rehabilitation care.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-white text-black font-semibold"
          >
            Back Home
          </Link>
          <Link
            href="/#contact"
            className="px-6 py-3 rounded-xl border border-white text-white"
          >
            Book Appointment
          </Link>
        </div>
      </WavyBackground>

      {/* STORY */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Our Story
        </h2>
        <p className="text-[#5e7278] leading-8 text-lg">
          Edamah Clinic was built with one goal — to create a better
          rehabilitation experience. We don’t just treat symptoms. We help
          patients understand their bodies, recover properly, and regain
          confidence in movement.
        </p>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Personalized Care",
              text: "Every patient gets a tailored treatment plan.",
            },
            {
              title: "Modern Treatment",
              text: "We use evidence-based rehabilitation methods.",
            },
            {
              title: "Real Results",
              text: "We focus on long-term recovery, not quick fixes.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl border border-[#6f96a0]/20 bg-[#f9fcfc]"
            >
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-[#5e7278] leading-7">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center bg-[#2f4b53] text-white p-12 rounded-3xl">
          <h2 className="text-3xl md:text-5xl font-bold">
            Start your recovery journey today
          </h2>
          <p className="mt-4 text-white/80">
            Our team is ready to support you every step of the way.
          </p>

          <Link
            href="/#contact"
            className="inline-block mt-6 px-6 py-3 bg-white text-black rounded-xl font-semibold"
          >
            Book Now
          </Link>
        </div>
      </section>
    </main>
  );
}