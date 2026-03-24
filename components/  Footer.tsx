import Image from "next/image";

type FooterLinks = Record<string, string[]>;

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
        src="/edamah_logo_square_exact.png"
        alt="Edamah Clinic Logo"
        width={32}
        height={32}
        className="logo-img"
      />
    </div>
  );
}

export default function Footer() {
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
