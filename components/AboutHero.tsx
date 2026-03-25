"use client";

import React, { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  useEffect(() => {
    document.body.style.setProperty(
      "--gradient-background-start",
      "rgb(1, 89, 88)"
    );
    document.body.style.setProperty(
      "--gradient-background-end",
      "rgb(53, 77, 92)"
    );
    document.body.style.setProperty("--first-color", "42, 180, 115");
    document.body.style.setProperty("--second-color", "120, 162, 171");
    document.body.style.setProperty("--third-color", "252, 252, 253");
    document.body.style.setProperty("--fourth-color", "1, 89, 88");
    document.body.style.setProperty("--fifth-color", "42, 180, 115");
    document.body.style.setProperty("--pointer-color", "252, 252, 253");
    document.body.style.setProperty("--size", "80%");
    document.body.style.setProperty("--blending-value", "hard-light");
  }, []);

  useEffect(() => {
    function move() {
      if (!interactiveRef.current) return;
      setCurX(curX + (tgX - curX) / 20);
      setCurY(curY + (tgY - curY) / 20);
      interactiveRef.current.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
    }
    move();
  }, [tgX, tgY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = interactiveRef.current?.getBoundingClientRect();
    if (!rect) return;
    setTgX(e.clientX - rect.left);
    setTgY(e.clientY - rect.top);
  };

  return (
    <div className="h-screen w-full relative overflow-hidden bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]">
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className="relative z-50">{children}</div>

      <div className="gradients-container h-full w-full blur-lg [filter:url(#blurMe)_blur(40px)]">
        <div className="absolute w-[var(--size)] h-[var(--size)] top-1/2 left-1/2 animate-first opacity-100 bg-[radial-gradient(circle,_rgba(var(--first-color),0.8)_0%,transparent_50%)] mix-blend-hard-light" />
        <div className="absolute w-[var(--size)] h-[var(--size)] top-1/2 left-1/2 animate-second opacity-100 bg-[radial-gradient(circle,_rgba(var(--second-color),0.8)_0%,transparent_50%)] mix-blend-hard-light" />
        <div className="absolute w-[var(--size)] h-[var(--size)] top-1/2 left-1/2 animate-third opacity-100 bg-[radial-gradient(circle,_rgba(var(--third-color),0.8)_0%,transparent_50%)] mix-blend-hard-light" />
        <div className="absolute w-[var(--size)] h-[var(--size)] top-1/2 left-1/2 animate-fourth opacity-70 bg-[radial-gradient(circle,_rgba(var(--fourth-color),0.8)_0%,transparent_50%)] mix-blend-hard-light" />
        <div className="absolute w-[var(--size)] h-[var(--size)] top-1/2 left-1/2 animate-fifth opacity-100 bg-[radial-gradient(circle,_rgba(var(--fifth-color),0.8)_0%,transparent_50%)] mix-blend-hard-light" />

        <div
          ref={interactiveRef}
          onMouseMove={handleMouseMove}
          className="absolute w-full h-full -top-1/2 -left-1/2 opacity-70 bg-[radial-gradient(circle,_rgba(var(--pointer-color),0.8)_0%,transparent_50%)] mix-blend-hard-light"
        />
      </div>
    </div>
  );
};

export default function AboutHero() {
  return (
    <BackgroundGradientAnimation>
      <nav className="absolute top-0 w-full flex justify-between items-center p-8">
        <div className="flex items-center gap-3">
          <img
            src="/edamah_logo_square_exact.png"
            className="w-9 h-9 rounded-lg"
            alt="Edamah Clinic Logo"
          />
          <span className="text-white font-semibold text-lg tracking-tight">
            Edamah Clinic
          </span>
        </div>

        <div className="flex gap-6 items-center">
          <a className="text-[#78A2AB] hover:text-white text-sm" href="/">
            Home
          </a>
          <a
            href="/#contact"
            className="px-5 py-2 bg-white text-[#015958] rounded-full text-sm font-semibold"
          >
            Book Now
          </a>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <div className="px-3 py-1 mb-6 border border-[#2AB473]/30 bg-[#2AB473]/10 rounded-full">
          <span className="text-[#2AB473] text-xs font-bold tracking-widest uppercase">
            About Edamah Clinic
          </span>
        </div>

        <h1 className="text-white text-5xl md:text-8xl font-black tracking-tight leading-[0.95] mb-6">
          RESTORING <br />
          <span className="text-[#2AB473]">MOVEMENT.</span>
        </h1>

        <p className="max-w-2xl text-[#DCE7E7] text-lg md:text-xl mb-10 leading-relaxed">
          We provide modern physiotherapy and rehabilitation care designed to
          reduce pain, improve mobility, and support patients through a more
          personal and confident recovery journey.
        </p>

        <div className="flex gap-4">
          <a
            href="/#contact"
            className="px-8 py-4 bg-[#2AB473] text-[#015958] font-bold rounded-xl"
          >
            Book Appointment
          </a>
          <a
            href="/"
            className="px-8 py-4 border border-white/30 text-white rounded-xl"
          >
            Back Home
          </a>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
