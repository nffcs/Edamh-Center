"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoCarousel from "./components/LogoCarousel";
import SimpleSection from "./components/SimpleSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Page() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="app">
      <Navbar scrolled={scrolled} />
      <Hero />
      <LogoCarousel />

      <SimpleSection
        id="about"
        title="About Edamah Clinic"
        text="We provide patient-centered physiotherapy and rehabilitation care with a focus on restoring mobility, easing pain, and improving quality of life through modern clinical methods."
      />

      <SimpleSection
        id="services"
        title="Our Services"
        text="From injury rehabilitation and post-surgery recovery to chronic pain management and personalized treatment plans, our services are designed to support every stage of recovery."
      />

      <Testimonials />

      <SimpleSection
        id="contact"
        title="Contact Us"
        text="Book an appointment, ask about treatment options, or reach out to learn more about how our clinic can support your recovery journey."
      />

      <Footer />
    </div>
  );
}
