"use client";

import { useState } from "react";
import Image from "next/image";

function BrandLogo() {
  return (
    <div className="logo-box">
      <Image
        src="/edamah_logo_square_exact.png"
        alt="Edamah Clinic Logo"
        width={32}
        height={32}
        className="logo-img"
      />
    </div>
  );
}

export default function Navbar({ scrolled }: { scrolled: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#home" className="brand">
          <BrandLogo />
          <div>
            <p className="brand-title">Edamah Clinic</p>
            <p className="brand-subtitle">Physical Therapy & Rehabilitation</p>
          </div>
        </a>

        <div className="desktop-nav">
          {navLinks.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <div className="desktop-actions">
          <a href="tel:+966000000000" className="ghost-btn">
            Call Us
          </a>
          <a href="#contact" className="primary-btn small-btn">
            Book Now
          </a>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="container mobile-menu-inner">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <a
              href="tel:+966000000000"
              className="ghost-btn full-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              Call Us
            </a>

            <a
              href="#contact"
              className="primary-btn full-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
