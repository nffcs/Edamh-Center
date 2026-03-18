"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  content: string;
};

type FooterLinks = Record<string, string[]>;

const testimonials: Testimonial[] = [
  {
    name: "Aisha Alharbi",
    role: "Lower Back Pain Recovery",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "The care I received was thoughtful, professional, and incredibly effective. After a few sessions, my pain reduced significantly and my movement felt much more natural.",
  },
  {
    name: "Omar Hassan",
    role: "Post-Surgery Rehabilitation",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "The treatment plan was clear, supportive, and tailored to my condition. The team helped me rebuild strength and confidence step by step throughout recovery.",
  },
  {
    name: "Lina Mohammed",
    role: "Sports Injury Treatment",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "What stood out most was how personalized everything felt. The therapists listened carefully, explained every stage, and helped me return to daily activity with much less discomfort.",
  },
];

const footerLinks: FooterLinks = {
  Clinic: ["About Us", "Our Team", "Services", "Treatments"],
  Patients: ["Book Appointment", "Insurance", "FAQ", "Patient Guide"],
  Resources: ["Health Blog", "Recovery Tips", "Contact", "Support"],
  Legal: [
    "Privacy Policy",
    "Terms & Conditions",
    "Cookie Policy",
    "Compliance",
  ],
};

function BrandLogo() {
  return (
    <div className="logo-box">
      <Image
        src="/edamah_logo_circle_exact.png"
        alt="Edamah Clinic Logo"
        width={32}
        height={32}
        className="logo-img"
      />
    </div>
  );
}

function Navbar({ scrolled }: { scrolled: boolean }) {
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

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 300, y: 200 });

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(111,150,160,0.16), transparent 40%)`,
      }}
    >
      <div className="grid-overlay" />
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <div className="container hero-grid">
        <div className="hero-left">
          <div className="pill">
            <span className="pill-dot" />
            Trusted Physical Therapy & Rehabilitation Care
          </div>

          <h1 className="hero-title">
            <span>Move Better.</span>
            <span className="gradient-text">Recover Stronger.</span>
            <span>Live With Confidence.</span>
          </h1>

          <p className="hero-text">
            We provide personalized physiotherapy and rehabilitation programs
            designed to reduce pain, restore movement, and support long-term
            recovery with compassionate, evidence-based care.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="primary-btn">
              Book Appointment
            </a>
            <a href="#about" className="ghost-btn">
              Learn More
            </a>
          </div>

          <div className="feature-cards">
            <div className="mini-card">
              <div className="mini-bar" />
              <h3>Pain Relief</h3>
              <p>
                Targeted treatment plans for faster recovery and better comfort.
              </p>
            </div>
            <div className="mini-card">
              <div className="mini-bar" />
              <h3>Improved Mobility</h3>
              <p>
                Restore movement and flexibility with guided rehabilitation.
              </p>
            </div>
            <div className="mini-card">
              <div className="mini-bar" />
              <h3>Trusted Care</h3>
              <p>
                Professional support in a calm and patient-centered environment.
              </p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-panel">
            <div className="panel-top">
              <div>
                <p className="panel-title">Personalized Recovery Plan</p>
                <p className="panel-subtitle">
                  Patient-focused physiotherapy journey
                </p>
              </div>
              <div className="panel-icon">❤</div>
            </div>

            <div className="panel-content">
              <div className="assessment-card">
                <p className="assessment-label">Assessment</p>
                <h3>Start with the right diagnosis</h3>
                <p>
                  Our team evaluates pain points, mobility limitations, and
                  recovery goals to build a treatment plan tailored specifically
                  to each patient.
                </p>
              </div>

              <div className="steps-grid">
                {[
                  [
                    "Step 01",
                    "Consultation",
                    "Review symptoms and physical condition.",
                  ],
                  [
                    "Step 02",
                    "Treatment Plan",
                    "A customized path toward pain relief and mobility.",
                  ],
                  [
                    "Step 03",
                    "Guided Therapy",
                    "Hands-on care with evidence-based techniques.",
                  ],
                  [
                    "Step 04",
                    "Recovery Support",
                    "Progress monitoring for lasting results.",
                  ],
                ].map(([step, title, desc]) => (
                  <div className="step-card" key={step}>
                    <p className="step-label">{step}</p>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="floating-badge">
              <div className="floating-icon">✦</div>
              <div>
                <p>Modern Rehabilitation</p>
                <span>Care that supports movement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SimpleSection({
  id,
  title,
  text,
}: {
  id: string;
  title: string;
  text: string;
}) {
  return (
    <section id={id} className="simple-section">
      <div className="container centered">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container testimonials-grid">
        <div className="testimonials-left">
          <div className="pill secondary-pill">Patient Experiences</div>
          <h2>What our patients are saying about their recovery</h2>
          <p>
            Real experiences from patients who trusted our clinic for pain
            relief, rehabilitation, and improved mobility through personalized
            physiotherapy care.
          </p>
        </div>

        <div className="testimonials-right">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="testimonial-card">
              <div className="quote-mark">”</div>
              <div className="testimonial-body">
                <p className="testimonial-text">{testimonial.content}</p>
                <div className="testimonial-user">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <div className="brand brand-footer">
            <BrandLogo />
            <div>
              <p className="brand-title">Edamah Clinic</p>
              <p className="brand-subtitle">
                Physical Therapy & Rehabilitation
              </p>
            </div>
          </div>

          <p className="footer-copy">
            Personalized physiotherapy and rehabilitation care focused on pain
            relief, mobility, recovery, and long-term wellness in a trusted
            clinical environment.
          </p>

          <div className="footer-contact">
            <p>+966 00 000 0000</p>
            <p>info@edamahclinic.com</p>
            <p>Jeddah, Saudi Arabia</p>
            <p>Sat - Thu: 9:00 AM - 9:00 PM</p>
          </div>
        </div>

        <div className="footer-links-grid">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3>{category}</h3>
              <ul>
                {links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Edamah Clinic. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
}

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
      <style jsx global>{`
        :root {
          --bg: #f7fafa;
          --primary: #2f4b53;
          --secondary: #6f96a0;
          --accent: #8bbf9f;
          --text-muted: #5e7278;
          --text-soft: #6a7f85;
          --border: rgba(111, 150, 160, 0.14);
          --shadow: 0 20px 50px rgba(47, 75, 83, 0.08);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: var(--bg);
          color: var(--primary);
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        img {
          display: block;
        }

        .app {
          min-height: 100vh;
          background: var(--bg);
        }

        .container {
          width: min(1120px, calc(100% - 32px));
          margin: 0 auto;
        }

        .centered {
          text-align: center;
        }

        .centered p {
          max-width: 760px;
          margin: 0 auto;
        }

        .navbar {
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid transparent;
          transition: 0.3s ease;
        }

        .navbar-scrolled {
          background: rgba(255, 255, 255, 0.85);
          border-bottom-color: var(--border);
          box-shadow: 0 8px 24px rgba(47, 75, 83, 0.04);
        }

        .nav-inner {
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-box {
          width: 44px;
          height: 44px;
          border-radius: 16px;
          background: white;
          border: 1px solid var(--border);
          box-shadow: 0 8px 20px rgba(47, 75, 83, 0.06);
          display: grid;
          place-items: center;
          overflow: hidden;
          flex-shrink: 0;
          position: relative;
        }

        .logo-img {
          width: 32px;
          height: 32px;
          object-fit: contain;
        }

        .brand-title {
          margin: 0;
          font-size: 1.05rem;
          font-weight: 700;
        }

        .brand-subtitle {
          margin: 2px 0 0;
          font-size: 0.76rem;
          color: var(--text-soft);
        }

        .desktop-nav,
        .desktop-actions {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .nav-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-muted);
          transition: 0.2s ease;
        }

        .nav-link:hover {
          color: var(--primary);
        }

        .primary-btn,
        .ghost-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          padding: 14px 24px;
          font-weight: 600;
          transition: 0.25s ease;
          border: 1px solid transparent;
        }

        .small-btn {
          padding: 11px 16px;
          font-size: 0.92rem;
        }

        .full-btn {
          width: 100%;
        }

        .primary-btn {
          background: var(--primary);
          color: white;
          box-shadow: 0 18px 40px rgba(47, 75, 83, 0.18);
        }

        .primary-btn:hover {
          background: #243940;
          transform: translateY(-1px);
        }

        .ghost-btn {
          background: rgba(255, 255, 255, 0.84);
          color: var(--primary);
          border-color: rgba(111, 150, 160, 0.18);
        }

        .ghost-btn:hover {
          background: white;
        }

        .mobile-menu-btn {
          display: none;
          border: 0;
          background: transparent;
          font-size: 1.5rem;
          color: var(--primary);
          cursor: pointer;
        }

        .mobile-menu {
          border-top: 1px solid var(--border);
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(18px);
        }

        .mobile-menu-inner {
          padding: 18px 0 22px;
          display: grid;
          gap: 12px;
        }

        .mobile-nav-link {
          padding: 12px 14px;
          border-radius: 14px;
          color: #4f646b;
          font-weight: 500;
        }

        .mobile-nav-link:hover {
          background: #f4f8f8;
        }

        .hero {
          position: relative;
          overflow: hidden;
          padding: 52px 0 80px;
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
              rgba(47, 75, 83, 0.03) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(47, 75, 83, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }

        .blob {
          position: absolute;
          border-radius: 999px;
          filter: blur(54px);
          pointer-events: none;
        }

        .blob-1 {
          top: 80px;
          left: 40px;
          width: 280px;
          height: 280px;
          background: rgba(111, 150, 160, 0.16);
        }

        .blob-2 {
          right: 40px;
          bottom: 20px;
          width: 360px;
          height: 360px;
          background: rgba(139, 191, 159, 0.14);
        }

        .hero-grid {
          position: relative;
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 56px;
          align-items: center;
          min-height: calc(100vh - 120px);
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.76);
          border: 1px solid rgba(111, 150, 160, 0.2);
          box-shadow: 0 8px 24px rgba(47, 75, 83, 0.05);
          font-size: 0.92rem;
        }

        .secondary-pill {
          color: var(--secondary);
          font-weight: 600;
        }

        .pill-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: var(--secondary);
        }

        .hero-title {
          margin: 0 0 24px;
          font-size: clamp(2.6rem, 5vw, 4.4rem);
          line-height: 1.05;
          font-weight: 700;
        }

        .hero-title span {
          display: block;
        }

        .gradient-text {
          background: linear-gradient(90deg, var(--secondary), #4e7b84);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-text {
          max-width: 720px;
          margin: 0 0 32px;
          font-size: 1.08rem;
          line-height: 1.8;
          color: var(--text-muted);
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 34px;
        }

        .feature-cards {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .mini-card {
          background: rgba(255, 255, 255, 0.75);
          border: 1px solid rgba(111, 150, 160, 0.15);
          border-radius: 20px;
          padding: 18px;
          box-shadow: 0 10px 24px rgba(47, 75, 83, 0.05);
        }

        .mini-bar {
          width: 42px;
          height: 8px;
          border-radius: 999px;
          background: rgba(111, 150, 160, 0.32);
          margin-bottom: 10px;
        }

        .mini-card h3 {
          margin: 0 0 8px;
          font-size: 0.97rem;
        }

        .mini-card p {
          margin: 0;
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .hero-right {
          position: relative;
        }

        .hero-panel {
          position: relative;
          border-radius: 28px;
          padding: 18px;
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.65);
          box-shadow: var(--shadow);
          backdrop-filter: blur(20px);
        }

        .panel-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 16px 20px;
          border-bottom: 1px solid rgba(111, 150, 160, 0.12);
          background: rgba(255, 255, 255, 0.52);
          border-radius: 24px 24px 0 0;
        }

        .panel-title {
          margin: 0;
          font-size: 0.95rem;
          font-weight: 700;
        }

        .panel-subtitle {
          margin: 4px 0 0;
          font-size: 0.76rem;
          color: var(--text-soft);
        }

        .panel-icon {
          width: 48px;
          height: 48px;
          border-radius: 18px;
          display: grid;
          place-items: center;
          background: rgba(111, 150, 160, 0.12);
          font-size: 1.2rem;
        }

        .panel-content {
          background: linear-gradient(
            135deg,
            #eaf3f4 0%,
            #ffffff 48%,
            #f4faf7 100%
          );
          border: 1px solid rgba(111, 150, 160, 0.15);
          border-top: 0;
          border-radius: 0 0 24px 24px;
          min-height: 500px;
          padding: 24px;
        }

        .assessment-card {
          background: white;
          border-radius: 22px;
          border: 1px solid rgba(111, 150, 160, 0.1);
          box-shadow: 0 10px 28px rgba(47, 75, 83, 0.05);
          padding: 22px;
          margin-bottom: 20px;
        }

        .assessment-label {
          margin: 0 0 10px;
          font-size: 0.74rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--secondary);
        }

        .assessment-card h3 {
          margin: 0 0 10px;
          font-size: 1.6rem;
        }

        .assessment-card p {
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.75;
          color: var(--text-muted);
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .step-card {
          border-radius: 20px;
          background: #f7fafa;
          border: 1px solid rgba(111, 150, 160, 0.1);
          padding: 16px;
        }

        .step-label {
          margin: 0 0 6px;
          font-size: 0.76rem;
          color: var(--secondary);
        }

        .step-card h4 {
          margin: 0 0 6px;
          font-size: 0.95rem;
        }

        .step-card p {
          margin: 0;
          font-size: 0.8rem;
          line-height: 1.6;
          color: var(--text-muted);
        }

        .floating-badge {
          position: absolute;
          right: -6px;
          bottom: -24px;
          display: flex;
          align-items: center;
          gap: 12px;
          background: var(--primary);
          color: white;
          border-radius: 20px;
          padding: 14px 18px;
          box-shadow: 0 20px 40px rgba(47, 75, 83, 0.22);
        }

        .floating-icon {
          width: 40px;
          height: 40px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: rgba(255, 255, 255, 0.1);
        }

        .floating-badge p {
          margin: 0 0 2px;
          font-size: 0.92rem;
          font-weight: 700;
        }

        .floating-badge span {
          font-size: 0.76rem;
          color: rgba(255, 255, 255, 0.75);
        }

        .simple-section {
          padding: 88px 0;
          background: white;
        }

        .simple-section h2 {
          margin: 0 0 16px;
          font-size: clamp(2rem, 4vw, 3.2rem);
        }

        .simple-section p {
          font-size: 1.06rem;
          line-height: 1.8;
          color: var(--text-muted);
        }

        .testimonials-section {
          padding: 88px 0;
          background: var(--bg);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 56px;
          align-items: start;
        }

        .testimonials-left h2 {
          margin: 0 0 18px;
          font-size: clamp(2rem, 4vw, 3.6rem);
          line-height: 1.08;
        }

        .testimonials-left p {
          margin: 0;
          font-size: 1.06rem;
          line-height: 1.8;
          color: var(--text-muted);
        }

        .testimonials-right {
          display: grid;
          gap: 22px;
        }

        .testimonial-card {
          display: flex;
          gap: 16px;
          border-radius: 22px;
          padding: 22px;
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(111, 150, 160, 0.12);
          box-shadow: 0 10px 24px rgba(47, 75, 83, 0.05);
          transition: 0.25s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 34px rgba(47, 75, 83, 0.08);
        }

        .quote-mark {
          flex-shrink: 0;
          font-size: 2.8rem;
          line-height: 1;
          font-weight: 700;
          color: var(--secondary);
        }

        .testimonial-body {
          flex: 1;
        }

        .testimonial-text {
          margin: 0 0 16px;
          font-size: 1.02rem;
          line-height: 1.75;
        }

        .testimonial-user {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .testimonial-user img {
          width: 48px;
          height: 48px;
          border-radius: 999px;
          object-fit: cover;
          border: 1px solid rgba(111, 150, 160, 0.1);
        }

        .testimonial-user h4 {
          margin: 0 0 2px;
          font-size: 0.96rem;
        }

        .testimonial-user p {
          margin: 0;
          color: var(--text-soft);
          font-size: 0.84rem;
        }

        .footer {
          background: linear-gradient(to bottom, white 0%, #f4f8f8 100%);
          border-top: 1px solid rgba(111, 150, 160, 0.1);
          padding: 56px 0 24px;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 52px;
          margin-bottom: 34px;
        }

        .brand-footer {
          margin-bottom: 18px;
        }

        .footer-copy {
          max-width: 420px;
          margin: 0 0 18px;
          font-size: 0.98rem;
          line-height: 1.8;
          color: var(--text-muted);
        }

        .footer-contact p {
          margin: 0 0 10px;
          color: var(--text-muted);
          font-size: 0.92rem;
        }

        .footer-links-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 28px;
        }

        .footer-links-grid h3 {
          margin: 0 0 14px;
          font-size: 1rem;
        }

        .footer-links-grid ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links-grid li {
          margin-bottom: 10px;
        }

        .footer-links-grid a {
          color: var(--text-soft);
          font-size: 0.9rem;
        }

        .footer-links-grid a:hover,
        .footer-bottom a:hover {
          color: var(--primary);
        }

        .footer-bottom {
          border-top: 1px solid rgba(111, 150, 160, 0.1);
          padding-top: 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          color: var(--text-soft);
          font-size: 0.88rem;
        }

        .footer-bottom-links {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 18px;
        }

        @media (max-width: 980px) {
          .desktop-nav,
          .desktop-actions {
            display: none;
          }

          .mobile-menu-btn {
            display: inline-block;
          }

          .hero-grid,
          .testimonials-grid,
          .footer-top {
            grid-template-columns: 1fr;
          }

          .hero {
            padding-top: 34px;
          }

          .hero-grid {
            min-height: auto;
            gap: 34px;
          }

          .feature-cards,
          .steps-grid,
          .footer-links-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .floating-badge {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .container {
            width: min(1120px, calc(100% - 24px));
          }

          .nav-inner {
            min-height: 68px;
          }

          .hero-title {
            font-size: 2.6rem;
          }

          .hero-text,
          .simple-section p,
          .testimonials-left p {
            font-size: 1rem;
          }

          .feature-cards,
          .steps-grid,
          .footer-links-grid {
            grid-template-columns: 1fr;
          }

          .simple-section,
          .testimonials-section {
            padding: 72px 0;
          }

          .hero-panel {
            padding: 12px;
          }

          .panel-content {
            min-height: auto;
            padding: 18px;
          }

          .assessment-card h3 {
            font-size: 1.3rem;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <Navbar scrolled={scrolled} />
      <Hero />

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
