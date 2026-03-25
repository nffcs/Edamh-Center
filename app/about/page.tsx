"use client";

import Link from "next/link";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function AboutPage() {
  return (
    <main className="about-page">
      <style jsx global>{`
        :root {
          --bg: #f7fafa;
          --primary: #2f4b53;
          --secondary: #6f96a0;
          --accent: #8bbf9f;
          --text-muted: #5e7278;
          --border: rgba(111, 150, 160, 0.14);
          --shadow: 0 20px 50px rgba(47, 75, 83, 0.08);
        }

        .about-page {
          min-height: 100vh;
          background: var(--bg);
          color: var(--primary);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .about-container {
          width: min(1120px, calc(100% - 32px));
          margin: 0 auto;
        }

        .about-hero {
          position: relative;
          min-height: 92vh;
          overflow: hidden;
          background: linear-gradient(180deg, #f7fafa 0%, #eef5f5 100%);
        }

        .about-wave-bg {
          position: absolute;
          inset: 0;
          opacity: 0.95;
        }

        .about-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(247, 250, 250, 0.14) 0%,
            rgba(247, 250, 250, 0.36) 28%,
            rgba(247, 250, 250, 0.92) 72%,
            #f7fafa 100%
          );
          pointer-events: none;
        }

        .about-hero-content {
          position: relative;
          z-index: 2;
          min-height: 92vh;
          display: grid;
          align-items: center;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 40px;
          padding: 90px 0 60px;
        }

        .about-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(111, 150, 160, 0.18);
          box-shadow: 0 8px 24px rgba(47, 75, 83, 0.05);
          font-size: 0.9rem;
          color: var(--secondary);
          margin-bottom: 22px;
        }

        .about-eyebrow-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: var(--secondary);
        }

        .about-title {
          margin: 0;
          font-size: clamp(2.8rem, 6vw, 5.4rem);
          line-height: 0.98;
          font-weight: 800;
          letter-spacing: -0.04em;
        }

        .about-title span {
          display: block;
          color: #6fae8a;
        }

        .about-text {
          max-width: 680px;
          margin: 24px 0 0;
          font-size: 1.08rem;
          line-height: 1.9;
          color: var(--text-muted);
        }

        .about-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 32px;
        }

        .about-primary-btn,
        .about-ghost-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 24px;
          border-radius: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: 0.25s ease;
        }

        .about-primary-btn {
          background: var(--primary);
          color: white;
          box-shadow: 0 18px 40px rgba(47, 75, 83, 0.18);
        }

        .about-primary-btn:hover {
          background: #243940;
          transform: translateY(-1px);
        }

        .about-ghost-btn {
          background: rgba(255, 255, 255, 0.84);
          color: var(--primary);
          border: 1px solid rgba(111, 150, 160, 0.18);
        }

        .about-ghost-btn:hover {
          background: white;
        }

        .about-panel {
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(111, 150, 160, 0.14);
          border-radius: 30px;
          padding: 22px;
          box-shadow: var(--shadow);
          backdrop-filter: blur(14px);
        }

        .about-panel-inner {
          border-radius: 24px;
          padding: 24px;
          background: linear-gradient(
            135deg,
            #ffffff 0%,
            #eff6f6 52%,
            #f8fcfa 100%
          );
          border: 1px solid rgba(111, 150, 160, 0.12);
        }

        .about-panel-label {
          margin: 0 0 10px;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--secondary);
        }

        .about-panel-title {
          margin: 0 0 12px;
          font-size: 1.8rem;
          line-height: 1.15;
        }

        .about-panel-text {
          margin: 0;
          color: var(--text-muted);
          line-height: 1.85;
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-top: 18px;
        }

        .about-stat-card {
          border-radius: 20px;
          background: white;
          border: 1px solid rgba(111, 150, 160, 0.1);
          padding: 18px;
          box-shadow: 0 8px 20px rgba(47, 75, 83, 0.04);
        }

        .about-stat-number {
          margin: 0 0 6px;
          font-size: 1.7rem;
          font-weight: 800;
        }

        .about-stat-label {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.92rem;
          line-height: 1.6;
        }

        .about-section {
          padding: 88px 0;
        }

        .about-section-white {
          background: white;
        }

        .about-story-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 56px;
          align-items: start;
        }

        .about-label {
          margin: 0 0 14px;
          font-size: 0.82rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--secondary);
          font-weight: 700;
        }

        .about-heading {
          margin: 0;
          font-size: clamp(2rem, 4vw, 3.4rem);
          line-height: 1.08;
        }

        .about-copy {
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.9;
        }

        .about-copy p {
          margin: 0 0 18px;
        }

        .about-cards {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .about-card {
          background: rgba(255, 255, 255, 0.88);
          border: 1px solid rgba(111, 150, 160, 0.14);
          border-radius: 26px;
          padding: 26px;
          box-shadow: 0 10px 24px rgba(47, 75, 83, 0.05);
        }

        .about-card-bar {
          width: 44px;
          height: 8px;
          border-radius: 999px;
          background: rgba(111, 150, 160, 0.3);
          margin-bottom: 14px;
        }

        .about-card h3 {
          margin: 0 0 10px;
          font-size: 1.15rem;
        }

        .about-card p {
          margin: 0;
          color: var(--text-muted);
          line-height: 1.75;
        }

        .about-cta {
          padding-bottom: 96px;
        }

        .about-cta-box {
          background: linear-gradient(135deg, #2f4b53 0%, #365a64 100%);
          border-radius: 34px;
          padding: 48px 32px;
          text-align: center;
          color: white;
          box-shadow: 0 28px 70px rgba(47, 75, 83, 0.18);
        }

        .about-cta-box h2 {
          margin: 0 0 16px;
          font-size: clamp(2rem, 4vw, 3.4rem);
          line-height: 1.08;
        }

        .about-cta-box p {
          max-width: 760px;
          margin: 0 auto;
          font-size: 1.05rem;
          line-height: 1.85;
          color: rgba(255, 255, 255, 0.78);
        }

        .about-cta-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 28px;
        }

        @media (max-width: 980px) {
          .about-hero-content,
          .about-story-grid,
          .about-cards {
            grid-template-columns: 1fr;
          }

          .about-hero-content {
            min-height: auto;
            padding: 76px 0 56px;
          }

          .about-section {
            padding: 72px 0;
          }
        }

        @media (max-width: 640px) {
          .about-container {
            width: min(1120px, calc(100% - 24px));
          }

          .about-title {
            font-size: 2.8rem;
          }

          .about-text,
          .about-copy,
          .about-cta-box p {
            font-size: 1rem;
          }

          .about-panel,
          .about-panel-inner,
          .about-card,
          .about-cta-box {
            padding: 20px;
          }

          .about-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="about-hero">
        <div className="about-wave-bg">
          <WavyBackground
            containerClassName="h-full"
            className="w-full h-full"
            backgroundFill="#31545d"
            colors={["#6f96a0", "#8bbf9f", "#5f8e98", "#78a2ab"]}
            waveOpacity={0.18}
            blur={22}
            speed="slow"
          />
        </div>

        <div className="about-hero-overlay" />

        <div className="about-container about-hero-content">
          <div>
            <div className="about-eyebrow">
              <span className="about-eyebrow-dot" />
              About Edamah Clinic
            </div>

            <h1 className="about-title">
              Restoring Movement.
              <span>Rebuilding Confidence.</span>
            </h1>

            <p className="about-text">
              We provide modern physiotherapy and rehabilitation care designed
              to reduce pain, improve mobility, and support patients through a
              more personal and confident recovery journey.
            </p>

            <div className="about-actions">
              <Link href="/#contact" className="about-primary-btn">
                Book Appointment
              </Link>
              <Link href="/" className="about-ghost-btn">
                Back Home
              </Link>
            </div>
          </div>

          <div className="about-panel">
            <div className="about-panel-inner">
              <p className="about-panel-label">Our Promise</p>
              <h2 className="about-panel-title">
                Better care starts with better understanding.
              </h2>
              <p className="about-panel-text">
                At Edamah Clinic, we don’t just focus on symptoms. We help
                patients understand their condition, move with more confidence,
                and recover through treatment plans that are clear, modern, and
                tailored to real life.
              </p>

              <div className="about-stats">
                <div className="about-stat-card">
                  <p className="about-stat-number">1:1</p>
                  <p className="about-stat-label">
                    Personalized treatment approach
                  </p>
                </div>
                <div className="about-stat-card">
                  <p className="about-stat-number">360°</p>
                  <p className="about-stat-label">
                    Support across every recovery stage
                  </p>
                </div>
                <div className="about-stat-card">
                  <p className="about-stat-number">Care</p>
                  <p className="about-stat-label">
                    Compassionate, patient-first experience
                  </p>
                </div>
                <div className="about-stat-card">
                  <p className="about-stat-number">Progress</p>
                  <p className="about-stat-label">
                    Focused on meaningful long-term results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container about-story-grid">
          <div>
            <p className="about-label">Our Story</p>
            <h2 className="about-heading">
              A better rehabilitation experience starts with better care.
            </h2>
          </div>

          <div className="about-copy">
            <p>
              Edamah Clinic was built with a simple goal: to create a
              rehabilitation experience that feels more personal, more focused,
              and more effective for every patient.
            </p>
            <p>
              We do not just treat pain. We help patients understand their
              condition, improve their movement, and rebuild confidence through
              clear treatment plans and supportive care.
            </p>
            <p>
              Our approach combines modern physiotherapy techniques with a calm,
              patient-centered environment so recovery feels structured,
              professional, and human.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section about-section-white">
        <div className="about-container">
          <div className="about-cards">
            <div className="about-card">
              <div className="about-card-bar" />
              <h3>Personalized Care</h3>
              <p>
                Every patient receives a treatment plan tailored to their
                condition, goals, and pace of recovery.
              </p>
            </div>

            <div className="about-card">
              <div className="about-card-bar" />
              <h3>Modern Rehabilitation</h3>
              <p>
                We use evidence-based methods and practical therapy strategies
                that support meaningful recovery.
              </p>
            </div>

            <div className="about-card">
              <div className="about-card-bar" />
              <h3>Long-Term Results</h3>
              <p>
                Our focus is not quick fixes. We aim for stronger movement,
                better comfort, and lasting progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section about-cta">
        <div className="about-container">
          <div className="about-cta-box">
            <h2>Start your recovery journey with confidence.</h2>
            <p>
              Whether you are recovering from injury, managing pain, or looking
              to improve movement, our team is ready to support you with care
              that feels thoughtful, modern, and effective.
            </p>

            <div className="about-cta-actions">
              <Link href="/#contact" className="about-primary-btn">
                Book Now
              </Link>
              <Link href="/" className="about-ghost-btn">
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
