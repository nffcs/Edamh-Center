"use client";

import { useEffect, useState } from "react";

export default function Hero() {
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
