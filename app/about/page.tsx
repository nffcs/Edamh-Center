"use client";

import Link from "next/link";
import { WavyBackground } from "@/components/ui/wavy-background";
import { WobbleCard } from "@/components/ui/wobble-card";

function AboutBrandLogo() {
  return (
    <div className="about-brand-logo-box">
      <img
        src="/edamah_logo_square_exact.png"
        alt="Edamah Clinic Logo"
        className="about-brand-logo-img"
      />
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="about-page">
      <style jsx global>{`
        :root {
          --bg: #f7fafa;
          --bg-soft: #eef4f4;
          --surface: rgba(255, 255, 255, 0.82);
          --surface-solid: #ffffff;
          --primary: #2f4b53;
          --secondary: #6f96a0;
          --accent: #8bbf9f;
          --text-muted: #5e7278;
          --text-soft: #6a7f85;
          --border: rgba(111, 150, 160, 0.14);
          --border-strong: rgba(111, 150, 160, 0.22);
          --shadow: 0 20px 50px rgba(47, 75, 83, 0.08);
          --shadow-soft: 0 10px 30px rgba(47, 75, 83, 0.05);
        }

        * {
          box-sizing: border-box;
        }

        .about-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #f7fafa 0%, #f2f7f7 100%);
          color: var(--primary);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .about-container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .about-hero {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          background: linear-gradient(180deg, #f6fafa 0%, #eef5f5 100%);
        }

        .about-wave-layer {
          position: absolute;
          inset: 0;
          opacity: 0.2;
          pointer-events: none;
        }

        .about-wave-fade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(247, 250, 250, 0.14) 0%,
            rgba(247, 250, 250, 0.28) 18%,
            rgba(247, 250, 250, 0.62) 50%,
            rgba(247, 250, 250, 0.9) 74%,
            #f7fafa 100%
          );
          pointer-events: none;
        }

        .about-hero-inner {
          position: relative;
          z-index: 2;
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 64px;
          align-items: center;
          padding: 110px 0 80px;
        }

        .about-eyebrow {
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
          color: var(--primary);
        }

        .about-eyebrow-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: var(--secondary);
        }

        .about-title {
          margin: 0;
          font-size: clamp(2.8rem, 5vw, 5.1rem);
          line-height: 1.02;
          font-weight: 700;
          letter-spacing: -0.04em;
          max-width: 760px;
        }

        .about-title span {
          display: block;
          color: #72b08d;
        }

        .about-intro {
          max-width: 700px;
          margin: 24px 0 0;
          font-size: 1.08rem;
          line-height: 1.8;
          color: var(--text-muted);
        }

        .about-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }

        .about-primary-btn,
        .about-ghost-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          padding: 14px 24px;
          font-weight: 600;
          transition: 0.25s ease;
          text-decoration: none;
          border: 1px solid transparent;
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
          border-color: rgba(111, 150, 160, 0.18);
        }

        .about-ghost-btn:hover {
          background: white;
        }

        .about-side {
          display: flex;
          justify-content: flex-end;
        }

        .about-signature {
          width: 100%;
          max-width: 470px;
          border-radius: 34px;
          padding: 22px;
          background: rgba(255, 255, 255, 0.62);
          border: 1px solid rgba(111, 150, 160, 0.14);
          box-shadow: var(--shadow);
          backdrop-filter: blur(18px);
        }

        .about-signature-inner {
          border-radius: 28px;
          padding: 30px;
          background: linear-gradient(
            135deg,
            #ffffff 0%,
            #f0f6f6 55%,
            #fbfefd 100%
          );
          border: 1px solid rgba(111, 150, 160, 0.12);
        }

        .about-signature-label {
          margin: 0 0 10px;
          font-size: 0.76rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--secondary);
          font-weight: 700;
        }

        .about-signature-title {
          margin: 0 0 14px;
          font-size: 1.95rem;
          line-height: 1.1;
        }

        .about-signature-copy {
          margin: 0;
          color: var(--text-muted);
          line-height: 1.85;
          font-size: 1rem;
        }

        .about-signature-divider {
          height: 1px;
          margin: 24px 0;
          background: rgba(111, 150, 160, 0.12);
        }

        .about-signature-quote {
          margin: 0;
          font-size: 1.12rem;
          line-height: 1.75;
          color: var(--primary);
          font-weight: 600;
        }

        .about-section {
          padding: 112px 0;
        }

        .about-white {
          background: rgba(255, 255, 255, 0.72);
          border-top: 1px solid rgba(111, 150, 160, 0.08);
          border-bottom: 1px solid rgba(111, 150, 160, 0.08);
        }

        .about-editorial {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 72px;
          align-items: start;
        }

        .about-label {
          margin: 0 0 16px;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          color: var(--secondary);
          font-weight: 700;
        }

        .about-heading {
          margin: 0;
          font-size: clamp(2.2rem, 4vw, 3.7rem);
          line-height: 1.04;
          letter-spacing: -0.03em;
          font-weight: 700;
        }

        .about-copy {
          font-size: 1.06rem;
          line-height: 1.9;
          color: var(--text-muted);
        }

        .about-copy p {
          margin: 0 0 20px;
        }

        .about-principles {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .about-principle {
          position: relative;
          border-radius: 28px;
          padding: 30px 26px 28px;
          background: rgba(255, 255, 255, 0.88);
          border: 1px solid rgba(111, 150, 160, 0.14);
          box-shadow: var(--shadow-soft);
        }

        .about-principle-line {
          width: 46px;
          height: 8px;
          border-radius: 999px;
          background: rgba(111, 150, 160, 0.28);
          margin-bottom: 18px;
        }

        .about-principle h3 {
          margin: 0 0 12px;
          font-size: 1.18rem;
          line-height: 1.2;
        }

        .about-principle p {
          margin: 0;
          color: var(--text-muted);
          line-height: 1.8;
          font-size: 0.98rem;
        }

        .about-wobble-header {
          margin-bottom: 28px;
        }

        .about-wobble-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .about-wobble-card {
          min-height: 280px;
          background: linear-gradient(135deg, #2f4b53 0%, #3a616b 100%);
          border: 1px solid rgba(111, 150, 160, 0.12);
        }

        .about-wobble-card-large {
          grid-column: span 2 / span 2;
          min-height: 320px;
        }

        .about-wobble-card-small {
          min-height: 320px;
          background: linear-gradient(135deg, #6f96a0 0%, #547d87 100%);
        }

        .about-wobble-card-wide {
          grid-column: span 3 / span 3;
          min-height: 260px;
          background: linear-gradient(135deg, #395761 0%, #2f4b53 100%);
        }

        .about-wobble-content {
          position: relative;
          z-index: 2;
          max-width: 560px;
        }

        .about-wobble-top {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }

        .about-brand-logo-box {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.14);
          display: grid;
          place-items: center;
          flex-shrink: 0;
          overflow: hidden;
        }

        .about-brand-logo-img {
          width: 24px;
          height: 24px;
          object-fit: contain;
          display: block;
        }

        .about-wobble-kicker {
          margin: 0;
          font-size: 0.78rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.68);
          font-weight: 700;
        }

        .about-wobble-content h3 {
          margin: 0 0 14px;
          font-size: clamp(1.4rem, 2vw, 2.1rem);
          line-height: 1.12;
          color: white;
          letter-spacing: -0.02em;
        }

        .about-wobble-content p {
          margin: 0;
          max-width: 640px;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.85;
          font-size: 1rem;
        }

        .about-statement {
          border-radius: 34px;
          padding: 52px 40px;
          background: linear-gradient(135deg, #2f4b53 0%, #395d66 100%);
          color: white;
          box-shadow: 0 28px 70px rgba(47, 75, 83, 0.18);
        }

        .about-statement-label {
          margin: 0 0 14px;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          color: rgba(255, 255, 255, 0.68);
          font-weight: 700;
        }

        .about-statement h2 {
          margin: 0 0 18px;
          font-size: clamp(2rem, 4vw, 3.4rem);
          line-height: 1.06;
          letter-spacing: -0.03em;
        }

        .about-statement p {
          max-width: 880px;
          margin: 0;
          font-size: 1.06rem;
          line-height: 1.9;
          color: rgba(255, 255, 255, 0.8);
        }

        .about-cta {
          padding-top: 24px;
          padding-bottom: 112px;
        }

        .about-cta-box {
          text-align: center;
        }

        .about-cta-box h2 {
          margin: 0 0 16px;
          font-size: clamp(2rem, 4vw, 3.2rem);
          line-height: 1.08;
          letter-spacing: -0.03em;
        }

        .about-cta-box p {
          max-width: 780px;
          margin: 0 auto;
          font-size: 1.06rem;
          line-height: 1.85;
          color: var(--text-muted);
        }

        .about-cta-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 28px;
        }

        @media (max-width: 1100px) {
          .about-hero-inner,
          .about-editorial,
          .about-principles,
          .about-wobble-grid {
            grid-template-columns: 1fr;
          }

          .about-side {
            justify-content: flex-start;
          }

          .about-wobble-card-large,
          .about-wobble-card-wide {
            grid-column: span 1 / span 1;
            min-height: 280px;
          }

          .about-wobble-card-small {
            min-height: 280px;
          }
        }

        @media (max-width: 980px) {
          .about-section {
            padding: 80px 0;
          }

          .about-hero-inner {
            min-height: auto;
            padding: 90px 0 70px;
            gap: 40px;
          }
        }

        @media (max-width: 640px) {
          .about-container {
            width: min(1180px, calc(100% - 24px));
          }

          .about-title {
            font-size: 3rem;
            line-height: 0.98;
          }

          .about-intro,
          .about-copy,
          .about-cta-box p,
          .about-statement p {
            font-size: 1rem;
          }

          .about-signature,
          .about-signature-inner,
          .about-principle,
          .about-statement {
            padding: 22px;
          }

          .about-statement {
            border-radius: 28px;
          }
        }
      `}</style>

      <section className="about-hero">
        <div className="about-wave-layer">
          <WavyBackground
            containerClassName="h-full"
            className="w-full h-full"
            backgroundFill="#31545d"
            colors={["#6f96a0", "#8bbf9f", "#5f8e98", "#78a2ab"]}
            waveOpacity={0.12}
            blur={28}
            speed="slow"
          />
        </div>

        <div className="about-wave-fade" />

        <div className="about-container about-hero-inner">
          <div>
            <div className="about-eyebrow">
              <span className="about-eyebrow-dot" />
              About Edamah Clinic
            </div>

            <h1 className="about-title">
              Restoring Movement.
              <span>Rebuilding Confidence.</span>
            </h1>

            <p className="about-intro">
              We provide modern physiotherapy and rehabilitation care designed
              to reduce pain, improve mobility, and support patients through a
              more personal, more thoughtful, and more confident recovery
              journey.
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

          <div className="about-side">
            <div className="about-signature">
              <div className="about-signature-inner">
                <p className="about-signature-label">Our Promise</p>
                <h2 className="about-signature-title">
                  Better care starts with better understanding.
                </h2>
                <p className="about-signature-copy">
                  At Edamah Clinic, we focus on helping patients understand
                  their condition, move with more clarity, and recover through
                  treatment plans that feel modern, personal, and genuinely
                  supportive.
                </p>

                <div className="about-signature-divider" />

                <p className="about-signature-quote">
                  Thoughtful treatment. Clear direction. Lasting progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container about-editorial">
          <div>
            <p className="about-label">Our Story</p>
            <h2 className="about-heading">
              A rehabilitation experience designed with intention.
            </h2>
          </div>

          <div className="about-copy">
            <p>
              Edamah Clinic was created with a simple goal: to make
              physiotherapy and rehabilitation feel more personal, more focused,
              and more effective for every patient who walks through the door.
            </p>
            <p>
              We do not believe recovery should feel confusing or generic. We
              believe patients deserve treatment plans that are clear, tailored,
              and built around how they actually live, move, and heal.
            </p>
            <p>
              Our role is not only to reduce pain, but to restore trust in the
              body — through modern care, clinical thinking, and a calm
              environment that supports meaningful progress.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section about-white">
        <div className="about-container">
          <div className="about-principles">
            <div className="about-principle">
              <div className="about-principle-line" />
              <h3>Personalized Care</h3>
              <p>
                Every patient receives a treatment plan shaped around their
                condition, goals, pace of recovery, and real daily needs.
              </p>
            </div>

            <div className="about-principle">
              <div className="about-principle-line" />
              <h3>Modern Rehabilitation</h3>
              <p>
                We combine evidence-based physiotherapy methods with practical,
                guided care that supports progress you can actually feel.
              </p>
            </div>

            <div className="about-principle">
              <div className="about-principle-line" />
              <h3>Long-Term Results</h3>
              <p>
                Our focus is not temporary relief alone. We work toward stronger
                movement, better comfort, and more lasting confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-wobble-header">
            <p className="about-label">Why Edamah</p>
            <h2 className="about-heading">
              A more thoughtful standard of care.
            </h2>
          </div>

          <div className="about-wobble-grid">
            <WobbleCard containerClassName="about-wobble-card about-wobble-card-large">
              <div className="about-wobble-content">
                <div className="about-wobble-top">
                  <AboutBrandLogo />
                  <p className="about-wobble-kicker">Patient Experience</p>
                </div>

                <h3>Care that feels personal from the very first visit.</h3>
                <p>
                  We believe rehabilitation works best when patients feel heard,
                  understood, and guided with clarity. Our process is built to
                  make treatment feel structured, supportive, and calm.
                </p>
              </div>
            </WobbleCard>

            <WobbleCard containerClassName="about-wobble-card about-wobble-card-small">
              <div className="about-wobble-content">
                <div className="about-wobble-top">
                  <AboutBrandLogo />
                  <p className="about-wobble-kicker">Clinical Approach</p>
                </div>

                <h3>Modern methods with real-world practicality.</h3>
                <p>
                  Our treatment plans are evidence-based, but always adapted to
                  the patient’s actual daily movement, pain points, and recovery
                  goals.
                </p>
              </div>
            </WobbleCard>

            <WobbleCard containerClassName="about-wobble-card about-wobble-card-wide">
              <div className="about-wobble-content">
                <div className="about-wobble-top">
                  <AboutBrandLogo />
                  <p className="about-wobble-kicker">Long-Term Recovery</p>
                </div>

                <h3>
                  We do not chase quick fixes. We build stronger outcomes.
                </h3>
                <p>
                  From pain relief to mobility restoration and confidence
                  rebuilding, our focus stays on meaningful progress that lasts
                  beyond the short term.
                </p>
              </div>
            </WobbleCard>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-statement">
            <p className="about-statement-label">What We Believe</p>
            <h2>
              Recovery feels different when the care feels clear, calm, and
              genuinely human.
            </h2>
            <p>
              We believe the best rehabilitation experience comes from combining
              clinical expertise with trust, consistency, and a patient-first
              environment that helps people move forward with clarity — not
              confusion.
            </p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-container">
          <div className="about-cta-box">
            <h2>Start your recovery journey with confidence.</h2>
            <p>
              Whether you are recovering from injury, managing pain, or working
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
