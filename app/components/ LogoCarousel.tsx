"use client";

export default function LogoCarousel() {
  const logos = [
    "/edamah_logo_square_exact.png",
    "/edamah_logo_square_exact.png",
    "/edamah_logo_square_exact.png",
    "/edamah_logo_square_exact.png",
    "/edamah_logo_square_exact.png",
    "/edamah_logo_square_exact.png",
  ];

  const repeatedLogos = [...logos, ...logos];

  return (
    <section className="logo-carousel-section">
      <div className="container centered">
        <h2 className="logo-strip-title">Trusted Care You Can Rely On</h2>
        <p className="logo-strip-text">
          Supporting recovery, mobility, and long-term wellness for our patients
        </p>

        <div className="logo-carousel-wrap">
          <div className="logo-carousel-track">
            {repeatedLogos.map((logo, index) => (
              <div key={index} className="logo-carousel-item">
                <img
                  src={logo}
                  alt="Edamah Clinic Logo"
                  className="logo-carousel-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
