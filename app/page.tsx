"use client";

import { useEffect, useState } from "react";

type Language = "en" | "ar";

type Testimonial = {
  name: string;
  role: {
    en: string;
    ar: string;
  };
  image: string;
  content: {
    en: string;
    ar: string;
  };
};

type FooterLinks = Record<
  string,
  {
    en: string[];
    ar: string[];
  }
>;

const content = {
  en: {
    clinicName: "Edamah Center",
    clinicSubtitle: "Physical Therapy & Rehabilitation",
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      testimonials: "Testimonials",
      contact: "Contact",
    },
    buttons: {
      callUs: "Call Us",
      bookNow: "Book Now",
      bookAppointment: "Book Appointment",
      learnMore: "Learn More",
      switchLanguage: "العربية",
    },
    hero: {
      badge: "Trusted Physical Therapy & Rehabilitation Care",
      title1: "Move Better.",
      title2: "Recover Stronger.",
      title3: "Live With Confidence.",
      text: "We provide personalized physiotherapy and rehabilitation programs designed to reduce pain, restore movement, and support long-term recovery with compassionate, evidence-based care.",
      cards: {
        pain: {
          title: "Pain Relief",
          text: "Targeted treatment plans for faster recovery and better comfort.",
        },
        mobility: {
          title: "Improved Mobility",
          text: "Restore movement and flexibility with guided rehabilitation.",
        },
        care: {
          title: "Trusted Care",
          text: "Professional support in a calm and patient-centered environment.",
        },
      },
      panelTitle: "Personalized Recovery Plan",
      panelSubtitle: "Patient-focused physiotherapy journey",
      assessmentLabel: "Assessment",
      assessmentTitle: "Start with the right diagnosis",
      assessmentText:
        "Our team evaluates pain points, mobility limitations, and recovery goals to build a treatment plan tailored specifically to each patient.",
      steps: [
        {
          step: "Step 01",
          title: "Consultation",
          desc: "Review symptoms and physical condition.",
        },
        {
          step: "Step 02",
          title: "Treatment Plan",
          desc: "A customized path toward pain relief and mobility.",
        },
        {
          step: "Step 03",
          title: "Guided Therapy",
          desc: "Hands-on care with evidence-based techniques.",
        },
        {
          step: "Step 04",
          title: "Recovery Support",
          desc: "Progress monitoring for lasting results.",
        },
      ],
      badgeTitle: "Modern Rehabilitation",
      badgeText: "Care that supports movement",
    },
    logoCarousel: {
      title: "Trusted Partners & Organizations",
      text: "Collaborating with leading healthcare and wellness organizations",
    },
    about: {
      title: "About Edamah Clinic",
      text: "We provide patient-centered physiotherapy and rehabilitation care with a focus on restoring mobility, easing pain, and improving quality of life through modern clinical methods.",
    },
    services: {
      title: "Our Services",
      text: "From injury rehabilitation and post-surgery recovery to chronic pain management and personalized treatment plans, our services are designed to support every stage of recovery.",
    },
    whyUs: {
      badge: "Why Choose Us",
      title: "The clinic that puts your recovery first",
      subtitle:
        "From your first visit to your last session, every detail is designed around your comfort, progress, and long-term wellbeing.",
      cards: {
        expert: {
          title: "Expert Therapists",
          body: "Our licensed physiotherapists bring years of specialized clinical experience across orthopedics, sports injuries, and neurological rehabilitation — so you're always in trusted hands.",
          stat: "10+",
          statLabel: "Years avg. experience",
          icon: "✦",
        },
        personalized: {
          title: "Fully Personalized Plans",
          body: "No two patients are alike. Every treatment plan is built from scratch around your condition, lifestyle, and recovery goals.",
          icon: "◌",
        },
        modern: {
          title: "Modern Equipment",
          body: "We invest in the latest physiotherapy technology to accelerate healing and improve outcomes.",
          icon: "◎",
        },
        results: {
          title: "Results You Can Measure",
          body: "We track your progress at every stage — so you always know exactly how far you've come and what's ahead.",
          stat: "95%",
          statLabel: "Patient satisfaction rate",
          icon: "▲",
        },
        environment: {
          title: "Calm & Welcoming Space",
          body: "Our clinic is designed to feel less like a medical facility and more like a place of healing — quiet, clean, and patient-focused.",
          icon: "✳",
        },
        science: {
          title: "Evidence-Based Care",
          body: "Every technique we use is grounded in the latest clinical research and best practices in modern physiotherapy.",
          stat: "100%",
          statLabel: "Science-backed methods",
          icon: "◆",
        },
      },
    },
    testimonials: {
      badge: "Patient Experiences",
      title: "What our patients are saying about their recovery",
      text: "Real experiences from patients who trusted our clinic for pain relief, rehabilitation, and improved mobility through personalized physiotherapy care.",
    },
    faq: {
      badge: "Questions & Answers",
      title: "Frequently asked questions",
      text: "Find quick answers about appointments, treatment plans, insurance, and what to expect during your visit.",
      items: [
        {
          question: "Do I need an appointment before visiting the clinic?",
          answer:
            "Yes, we recommend booking an appointment in advance so our team can prepare for your visit and reduce waiting time.",
        },
        {
          question: "Do you offer personalized treatment plans?",
          answer:
            "Yes. Every patient receives an individualized treatment plan based on their condition, goals, and recovery progress.",
        },
        {
          question: "Can I come for treatment after surgery or injury?",
          answer:
            "Absolutely. We support post-surgery rehabilitation, sports injuries, chronic pain cases, and mobility recovery programs.",
        },
        {
          question: "How long does each session usually take?",
          answer:
            "Session length can vary depending on the treatment plan, but most appointments typically last between 30 and 60 minutes.",
        },

        {
          question: "What should I bring to my first appointment?",
          answer:
            "Please bring any medical reports, scans, previous treatment notes, and a list of current symptoms or medications if available.",
        },
      ],
    },
    contact: {
      title: "Start Your Recovery Journey",
      text: "Whether you are ready to book an appointment, discuss a treatment plan, or ask about the right rehabilitation path for your condition, our team is here to guide you with clarity, care, and professional support.",
      cardTitle: "Book your consultation today",
      cardText:
        "Speak with our team and take the first step toward personalized physiotherapy and long-term recovery.",
      primaryAction: "Book Appointment",
      secondaryAction: "Call Us",
      phoneLabel: "Phone",
      emailLabel: "Email",
      locationLabel: "Location",
      hoursLabel: "Hours",
    },
    footer: {
      copy: "Personalized physiotherapy and rehabilitation care focused on pain relief, mobility, recovery, and long-term wellness in a trusted clinical environment.",
      rights: "© 2026 Edamah Clinic. All rights reserved.",
      categories: {
        clinic: "Clinic",
        patients: "Patients",
        resources: "Resources",
        legal: "Legal",
      },
    },
  },
  ar: {
    clinicName: "مركز ادمة",
    clinicSubtitle: "العلاج الطبيعي و التأهيل",
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      testimonials: "آراء المرضى",
      contact: "تواصل معنا",
    },
    buttons: {
      callUs: "اتصل بنا",
      bookNow: "احجز الآن",
      bookAppointment: "احجز موعدًا",
      learnMore: "اعرف المزيد",
      switchLanguage: "English",
    },
    hero: {
      badge: "رعاية موثوقة في العلاج الطبيعي وإعادة التأهيل",
      title1: "تحرك بشكل أفضل",
      title2: "تعافَ بشكل أقوى",
      title3: "عِش بثقة",
      text: "نقدم برامج علاج طبيعي وإعادة تأهيل مخصصة تهدف إلى تقليل الألم، واستعادة الحركة، ودعم التعافي طويل الأمد من خلال رعاية رحيمة قائمة على أسس علمية.",
      cards: {
        pain: {
          title: "تخفيف الألم",
          text: "خطط علاجية موجهة لتعافٍ أسرع وراحة أفضل.",
        },
        mobility: {
          title: "تحسين الحركة",
          text: "استعد الحركة والمرونة من خلال إعادة تأهيل موجهة.",
        },
        care: {
          title: "رعاية موثوقة",
          text: "دعم مهني في بيئة هادئة تركز على المريض.",
        },
      },
      panelTitle: "خطة تعافٍ مخصصة",
      panelSubtitle: "رحلة علاج طبيعي تركز على المريض",
      assessmentLabel: "التقييم",
      assessmentTitle: "ابدأ بالتشخيص الصحيح",
      assessmentText:
        "يقوم فريقنا بتقييم مواضع الألم، ومحدودية الحركة، وأهداف التعافي لبناء خطة علاجية مصممة خصيصًا لكل مريض.",
      steps: [
        {
          step: "الخطوة 01",
          title: "الاستشارة",
          desc: "مراجعة الأعراض والحالة الجسدية.",
        },
        {
          step: "الخطوة 02",
          title: "الخطة العلاجية",
          desc: "مسار مخصص نحو تخفيف الألم وتحسين الحركة.",
        },
        {
          step: "الخطوة 03",
          title: "العلاج الموجّه",
          desc: "رعاية مباشرة باستخدام تقنيات قائمة على الأدلة.",
        },
        {
          step: "الخطوة 04",
          title: "دعم التعافي",
          desc: "متابعة التقدم لتحقيق نتائج مستدامة.",
        },
      ],
      badgeTitle: "إعادة تأهيل حديثة",
      badgeText: "رعاية تدعم الحركة",
    },
    logoCarousel: {
      title: "شركاؤنا والجهات المتعاونة معنا",
      text: "نتعاون مع جهات رائدة في الرعاية الصحية والعافية",
    },
    about: {
      title: "عن عيادة إدامة",
      text: "نقدم رعاية علاج طبيعي وإعادة تأهيل تركز على المريض بهدف استعادة الحركة وتخفيف الألم وتحسين جودة الحياة من خلال أساليب علاجية حديثة.",
    },
    services: {
      title: "خدماتنا",
      text: "من إعادة تأهيل الإصابات والتعافي بعد العمليات الجراحية إلى علاج الألم المزمن والخطط العلاجية المخصصة، صُممت خدماتنا لدعم كل مرحلة من مراحل التعافي.",
    },
    whyUs: {
      badge: "لماذا تختارنا",
      title: "العيادة التي تضع تعافيك في المقام الأول",
      subtitle:
        "من زيارتك الأولى حتى جلستك الأخيرة، كل تفصيلة مصممة حول راحتك وتقدمك وصحتك على المدى البعيد.",
      cards: {
        expert: {
          title: "معالجون متخصصون",
          body: "يتمتع معالجونا المرخصون بسنوات من الخبرة السريرية المتخصصة في التقويم، وإصابات الرياضة، وإعادة التأهيل العصبي — لتكون دائمًا في أيدٍ موثوقة.",
          stat: "+10",
          statLabel: "سنوات متوسط الخبرة",
          icon: "✦",
        },
        personalized: {
          title: "خطط مخصصة بالكامل",
          body: "لا يوجد مريضان متشابهان. كل خطة علاجية تُبنى من الصفر وفقًا لحالتك وأسلوب حياتك وأهداف تعافيك.",
          icon: "◌",
        },
        modern: {
          title: "معدات حديثة",
          body: "نستثمر في أحدث تقنيات العلاج الطبيعي لتسريع الشفاء وتحسين النتائج.",
          icon: "◎",
        },
        results: {
          title: "نتائج يمكن قياسها",
          body: "نتتبع تقدمك في كل مرحلة — حتى تعرف دائمًا بالضبط كم قطعت من الشوط وما الذي ينتظرك.",
          stat: "95%",
          statLabel: "معدل رضا المرضى",
          icon: "▲",
        },
        environment: {
          title: "بيئة هادئة ومرحّبة",
          body: "عيادتنا مصممة لتبدو أقل كمنشأة طبية وأكثر كمكان للشفاء — هادئة ونظيفة وتركز على المريض.",
          icon: "✳",
        },
        science: {
          title: "رعاية قائمة على الأدلة",
          body: "كل تقنية نستخدمها مبنية على أحدث الأبحاث السريرية وأفضل الممارسات في العلاج الطبيعي الحديث.",
          stat: "100%",
          statLabel: "أساليب مدعومة علميًا",
          icon: "◆",
        },
      },
    },
    testimonials: {
      badge: "تجارب المرضى",
      title: "ماذا يقول مرضانا عن رحلتهم العلاجية",
      text: "تجارب حقيقية من مرضى وثقوا بعيادتنا لتخفيف الألم وإعادة التأهيل وتحسين الحركة من خلال رعاية علاج طبيعي مخصصة.",
    },
    faq: {
      badge: "الأسئلة والأجوبة",
      title: "الأسئلة الشائعة",
      text: "اعثر على إجابات سريعة حول المواعيد، والخطط العلاجية، والتأمين، وما يمكن توقعه أثناء زيارتك.",
      items: [
        {
          question: "هل أحتاج إلى موعد قبل زيارة العيادة؟",
          answer:
            "نعم، نوصي بحجز موعد مسبقًا حتى يتمكن فريقنا من الاستعداد لزيارتك وتقليل وقت الانتظار.",
        },
        {
          question: "هل تقدمون خطط علاج مخصصة؟",
          answer:
            "نعم. يحصل كل مريض على خطة علاج فردية بناءً على حالته وأهدافه وتقدم تعافيه.",
        },
        {
          question: "هل يمكنني الحضور للعلاج بعد الجراحة أو الإصابة؟",
          answer:
            "بالتأكيد. نحن ندعم إعادة التأهيل بعد العمليات الجراحية، والإصابات الرياضية، وحالات الألم المزمن، وبرامج استعادة الحركة.",
        },
        {
          question: "كم تستغرق الجلسة عادة؟",
          answer:
            "تختلف مدة الجلسة حسب الخطة العلاجية، لكن معظم المواعيد تستغرق عادة من 30 إلى 60 دقيقة.",
        },

        {
          question: "ماذا أحضر في أول موعد؟",
          answer:
            "يرجى إحضار أي تقارير طبية أو صور أشعة أو ملاحظات علاج سابقة، بالإضافة إلى قائمة بالأعراض الحالية أو الأدوية إن وجدت.",
        },
      ],
    },
    contact: {
      title: "ابدأ رحلتك العلاجية",
      text: "سواء كنت مستعدًا لحجز موعد، أو ترغب في مناقشة خطة علاجية، أو تحتاج إلى معرفة المسار التأهيلي الأنسب لحالتك، فإن فريقنا هنا لإرشادك بوضوح واهتمام ودعم مهني موثوق.",
      cardTitle: "احجز استشارتك اليوم",
      cardText:
        "تواصل مع فريقنا واتخذ الخطوة الأولى نحو علاج طبيعي مخصص وتعافٍ طويل المدى.",
      primaryAction: "احجز موعدًا",
      secondaryAction: "اتصل بنا",
      phoneLabel: "الهاتف",
      emailLabel: "البريد الإلكتروني",
      locationLabel: "الموقع",
      hoursLabel: "ساعات العمل",
    },
    footer: {
      copy: "رعاية علاج طبيعي وإعادة تأهيل مخصصة تركز على تخفيف الألم وتحسين الحركة ودعم التعافي والعافية طويلة المدى في بيئة علاجية موثوقة.",
      rights: "© 2026 عيادة إدامة. جميع الحقوق محفوظة.",
      categories: {
        clinic: "العيادة",
        patients: "المرضى",
        resources: "الموارد",
        legal: "القانونية",
      },
    },
  },
};

const testimonials: Testimonial[] = [
  {
    name: "Aisha Alharbi",
    role: {
      en: "Lower Back Pain Recovery",
      ar: "التعافي من آلام أسفل الظهر",
    },
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    content: {
      en: "The care I received was thoughtful, professional, and incredibly effective. After a few sessions, my pain reduced significantly and my movement felt much more natural.",
      ar: "كانت الرعاية التي تلقيتها مدروسة واحترافية وفعالة جدًا. بعد عدة جلسات، انخفض الألم بشكل ملحوظ وأصبحت حركتي أكثر طبيعية.",
    },
  },
  {
    name: "Omar Hassan",
    role: {
      en: "Post-Surgery Rehabilitation",
      ar: "إعادة التأهيل بعد الجراحة",
    },
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    content: {
      en: "The treatment plan was clear, supportive, and tailored to my condition. The team helped me rebuild strength and confidence step by step throughout recovery.",
      ar: "كانت الخطة العلاجية واضحة وداعمة ومناسبة لحالتي. ساعدني الفريق على استعادة القوة والثقة خطوة بخطوة طوال فترة التعافي.",
    },
  },
  {
    name: "Lina Mohammed",
    role: {
      en: "Sports Injury Treatment",
      ar: "علاج الإصابات الرياضية",
    },
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
    content: {
      en: "What stood out most was how personalized everything felt. The therapists listened carefully, explained every stage, and helped me return to daily activity with much less discomfort.",
      ar: "أكثر ما لفت انتباهي هو مدى تخصيص الرعاية لكل حالتي. استمع المعالجون بعناية وشرحوا كل مرحلة وساعدوني على العودة للنشاط اليومي براحة أكبر.",
    },
  },
];

const footerLinks: FooterLinks = {
  clinic: {
    en: ["About Us", "Our Team", "Services", "Treatments"],
    ar: ["من نحن", "فريقنا", "الخدمات", "العلاجات"],
  },
  patients: {
    en: ["Book Appointment", "Insurance", "FAQ", "Patient Guide"],
    ar: ["حجز موعد", "التأمين", "الأسئلة الشائعة", "دليل المريض"],
  },
  resources: {
    en: ["Health Blog", "Recovery Tips", "Contact", "Support"],
    ar: ["المدونة الصحية", "نصائح التعافي", "تواصل معنا", "الدعم"],
  },
  legal: {
    en: ["Privacy Policy", "Terms & Conditions", "Cookie Policy", "Compliance"],
    ar: [
      "سياسة الخصوصية",
      "الشروط والأحكام",
      "سياسة ملفات تعريف الارتباط",
      "الامتثال",
    ],
  },
};

function BrandLogo() {
  return (
    <div className="logo-box">
      <img
        src="/edamah_logo_square_exact.png"
        alt="Edamah Clinic Logo"
        className="logo-img"
      />
    </div>
  );
}

function LogoCarousel({ t }: { t: (typeof content)["en"] }) {
  const logos = [
    { src: "/logos/qassim.png", alt: "Qassim Health Cluster" },
    { src: "/logos/rheumatism.png", alt: "Rheumatism Association" },
    { src: "/logos/moh.png", alt: "Ministry of Health" },
    { src: "/logos/alwatad.png", alt: "Alwatad" },
    { src: "/logos/jordan.png", alt: "Jordan" },
    { src: "/logos/ziva.png", alt: "Ziva" },
    { src: "/logos/vision.png", alt: "Vision Fitness" },
  ];

  const repeatedLogos = [...logos, ...logos];

  return (
    <section className="logo-carousel-section">
      <div className="container centered">
        <h2 className="logo-strip-title">{t.logoCarousel.title}</h2>
        <p className="logo-strip-text">{t.logoCarousel.text}</p>

        <div className="logo-carousel-wrap">
          <div className="logo-carousel-track">
            {repeatedLogos.map((logo, index) => (
              <div key={index} className="logo-carousel-item">
                <img
                  src={logo.src}
                  alt={logo.alt}
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

function Navbar({
  scrolled,
  t,
  onToggleLanguage,
}: {
  scrolled: boolean;
  t: (typeof content)["en"];
  onToggleLanguage: () => void;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.testimonials, href: "#testimonials" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#home" className="brand">
          <BrandLogo />
          <div>
            <p className="brand-title">{t.clinicName}</p>
            <p className="brand-subtitle">{t.clinicSubtitle}</p>
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
          <button
            type="button"
            className="ghost-btn small-btn language-btn"
            onClick={onToggleLanguage}
          >
            {t.buttons.switchLanguage}
          </button>

          <a href="tel:+966000000000" className="ghost-btn">
            {t.buttons.callUs}
          </a>

          <a href="#contact" className="primary-btn small-btn">
            {t.buttons.bookNow}
          </a>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          type="button"
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

            <button
              type="button"
              className="ghost-btn full-btn"
              onClick={() => {
                onToggleLanguage();
                setMobileMenuOpen(false);
              }}
            >
              {t.buttons.switchLanguage}
            </button>

            <a
              href="tel:+966000000000"
              className="ghost-btn full-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.buttons.callUs}
            </a>

            <a
              href="#contact"
              className="primary-btn full-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.buttons.bookAppointment}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero({ t }: { t: (typeof content)["en"] }) {
  const [mousePosition, setMousePosition] = useState({ x: 300, y: 200 });

  useEffect(() => {
    let frame = 0;

    function handleMouseMove(e: MouseEvent) {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMouseMove);
    };
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
            {t.hero.badge}
          </div>

          <h1 className="hero-title">
            <span>{t.hero.title1}</span>
            <span className="gradient-text">{t.hero.title2}</span>
            <span>{t.hero.title3}</span>
          </h1>

          <p className="hero-text">{t.hero.text}</p>

          <div className="hero-actions">
            <a href="#contact" className="primary-btn">
              {t.buttons.bookAppointment}
            </a>
            <a href="#about" className="ghost-btn">
              {t.buttons.learnMore}
            </a>
          </div>

          <div className="feature-cards">
            <div className="mini-card">
              <div className="mini-bar" />
              <h3>{t.hero.cards.pain.title}</h3>
              <p>{t.hero.cards.pain.text}</p>
            </div>
            <div className="mini-card">
              <div className="mini-bar" />
              <h3>{t.hero.cards.mobility.title}</h3>
              <p>{t.hero.cards.mobility.text}</p>
            </div>
            <div className="mini-card">
              <div className="mini-bar" />
              <h3>{t.hero.cards.care.title}</h3>
              <p>{t.hero.cards.care.text}</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-panel">
            <div className="panel-top">
              <div>
                <p className="panel-title">{t.hero.panelTitle}</p>
                <p className="panel-subtitle">{t.hero.panelSubtitle}</p>
              </div>
              <div className="panel-icon">❤</div>
            </div>

            <div className="panel-content">
              <div className="assessment-card">
                <p className="assessment-label">{t.hero.assessmentLabel}</p>
                <h3>{t.hero.assessmentTitle}</h3>
                <p>{t.hero.assessmentText}</p>
              </div>

              <div className="steps-grid">
                {t.hero.steps.map((item) => (
                  <div className="step-card" key={item.step}>
                    <p className="step-label">{item.step}</p>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="floating-badge">
              <div className="floating-icon">✦</div>
              <div>
                <p>{t.hero.badgeTitle}</p>
                <span>{t.hero.badgeText}</span>
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

function WhyUs({ t }: { t: (typeof content)["en"] }) {
  const w = t.whyUs;
  const c = w.cards;

  return (
    <section className="whyus-section">
      <div className="container whyus-header">
        <div className="pill secondary-pill">{w.badge}</div>
        <h2>{w.title}</h2>
        <p>{w.subtitle}</p>
      </div>

      <div className="container whyus-grid">
        <div className="why-card why-card-dark why-card-wide">
          <div className="why-card-icon">{c.expert.icon}</div>
          <h3 className="why-card-title why-card-title-lg">{c.expert.title}</h3>
          <p className="why-card-text">{c.expert.body}</p>
          <div className="why-card-stat">
            <span className="why-card-stat-num">{c.expert.stat}</span>
            <span className="why-card-stat-label">{c.expert.statLabel}</span>
          </div>
          <div className="why-card-mark">{c.expert.icon}</div>
        </div>

        <div className="why-card why-card-light">
          <div className="why-card-icon">{c.personalized.icon}</div>
          <h3 className="why-card-title">{c.personalized.title}</h3>
          <p className="why-card-text">{c.personalized.body}</p>
        </div>

        <div className="why-card why-card-muted">
          <div className="why-card-icon">{c.modern.icon}</div>
          <h3 className="why-card-title">{c.modern.title}</h3>
          <p className="why-card-text">{c.modern.body}</p>
        </div>

        <div className="why-card why-card-teal why-card-wide">
          <div className="why-card-icon">{c.results.icon}</div>
          <h3 className="why-card-title why-card-title-lg">
            {c.results.title}
          </h3>
          <p className="why-card-text">{c.results.body}</p>
          <div className="why-card-stat">
            <span className="why-card-stat-num">{c.results.stat}</span>
            <span className="why-card-stat-label">{c.results.statLabel}</span>
          </div>
          <div className="why-card-mark">{c.results.icon}</div>
        </div>

        <div className="why-card why-card-light">
          <div className="why-card-icon">{c.environment.icon}</div>
          <h3 className="why-card-title">{c.environment.title}</h3>
          <p className="why-card-text">{c.environment.body}</p>
        </div>

        <div className="why-card why-card-accent why-card-wide">
          <div className="why-card-icon">{c.science.icon}</div>
          <h3 className="why-card-title why-card-title-lg">
            {c.science.title}
          </h3>
          <p className="why-card-text">{c.science.body}</p>
          <div className="why-card-stat">
            <span className="why-card-stat-num">{c.science.stat}</span>
            <span className="why-card-stat-label">{c.science.statLabel}</span>
          </div>
          <div className="why-card-mark">{c.science.icon}</div>
        </div>
      </div>
    </section>
  );
}

function Testimonials({
  t,
  language,
}: {
  t: (typeof content)["en"];
  language: Language;
}) {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container testimonials-grid">
        <div className="testimonials-left">
          <div className="pill secondary-pill">{t.testimonials.badge}</div>
          <h2>{t.testimonials.title}</h2>
          <p>{t.testimonials.text}</p>
        </div>

        <div className="testimonials-right">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="testimonial-card">
              <div className="quote-mark">"</div>
              <div className="testimonial-body">
                <p className="testimonial-text">
                  {testimonial.content[language]}
                </p>
                <div className="testimonial-user" style={{ display: "none" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection({ t }: { t: (typeof content)["en"] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq-section">
      <div className="container faq-grid">
        <div className="faq-left">
          <div className="pill secondary-pill">{t.faq.badge}</div>
          <h2>{t.faq.title}</h2>
          <p>{t.faq.text}</p>
        </div>

        <div className="faq-right">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={`faq-card ${isOpen ? "faq-card-open" : ""}`}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon">{isOpen ? "−" : "+"}</span>
                </button>

                {isOpen && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactSection({ t }: { t: (typeof content)["en"] }) {
  const whatsappLink =
    "https://wa.me/966557571172?text=Hello%20I%20want%20to%20book%20an%20appointment";

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-shell">
          <div className="contact-copy">
            <div className="pill secondary-pill">{t.nav.contact}</div>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.text}</p>
          </div>

          <div className="contact-card">
            <div className="contact-card-glow" />
            <div className="contact-card-inner">
              <p className="contact-card-label">{t.clinicName}</p>
              <h3>{t.contact.cardTitle}</h3>
              <p>{t.contact.cardText}</p>

              <div className="contact-card-actions">
                <a href={whatsappLink} target="_blank" className="primary-btn">
                  {t.contact.primaryAction}
                </a>

                <a href="tel:+966557571172" className="ghost-btn">
                  {t.contact.secondaryAction}
                </a>
              </div>

              <div className="contact-meta">
                <div className="contact-meta-item">
                  <span className="contact-meta-title">
                    {t.contact.phoneLabel}
                  </span>
                  <span className="contact-meta-value">+966 55 757 1172</span>
                </div>

                <div className="contact-meta-item">
                  <span className="contact-meta-title">
                    {t.contact.locationLabel}
                  </span>
                  <span className="contact-meta-value">Buraydah</span>
                </div>

                <div className="contact-meta-item">
                  <span className="contact-meta-title">
                    {t.contact.hoursLabel}
                  </span>
                  <span className="contact-meta-value">1:00 PM – 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Footer({
  t,
  language,
}: {
  t: (typeof content)["en"];
  language: Language;
}) {
  const footerCategories = [
    {
      title: t.footer.categories.clinic,
      links:
        language === "en"
          ? ["About", "Services", "Contact"]
          : ["من نحن", "الخدمات", "تواصل معنا"],
    },
    {
      title: t.footer.categories.patients,
      links:
        language === "en"
          ? ["Book Appointment", "FAQ"]
          : ["حجز موعد", "الأسئلة الشائعة"],
    },
  
  ];
}
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <div className="brand brand-footer">
            <BrandLogo />
            <div>
              <p className="brand-title">{t.clinicName}</p>
              <p className="brand-subtitle">{t.clinicSubtitle}</p>
            </div>
          </div>

          <p className="footer-copy">{t.footer.copy}</p>

         <div className="footer-contact">
  <p>+966 55 757 1172</p>
  <p>Buraydah</p>
  <p>1:00 PM – 9:00 PM</p>
</div>

        <div className="footer-links-grid">
          {footerCategories.map((category) => (
            <div key={category.title}>
              <h3>{category.title}</h3>
              <ul>
                {category.links.map((link) => (
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
        <p>{t.footer.rights}</p>
        <div className="footer-bottom-links">
          <a href="#">{footerLinks.legal[language][0]}</a>
          <a href="#">
            {language === "en" ? "Terms of Service" : "شروط الخدمة"}
          </a>
          <a href="#">
            {language === "en"
              ? "Cookie Settings"
              : "إعدادات ملفات تعريف الارتباط"}
          </a>
        </div>
      </div>
    </footer>
  );


export default function Page() {
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState<Language>("ar");

  const t = content[language];
  const isArabic = language === "ar";

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="app" dir={isArabic ? "rtl" : "ltr"} lang={language}>
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

        button {
          font: inherit;
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
          display: block;
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
          cursor: pointer;
        }

        .small-btn {
          padding: 11px 16px;
          font-size: 0.92rem;
        }

        .full-btn {
          width: 100%;
        }

        .language-btn {
          border: 1px solid rgba(111, 150, 160, 0.18);
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

        .logo-carousel-section {
          padding: 72px 0;
          background: #fcfcfd;
        }

        .logo-strip-title {
          margin: 0 0 10px;
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          color: #354d5c;
        }

        .logo-strip-text {
          margin: 0 0 28px;
          color: #78a2ab;
          font-size: 1rem;
        }

        .logo-carousel-wrap {
          overflow: hidden;
          position: relative;
          width: 100%;
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }

        .logo-carousel-track {
          display: flex;
          align-items: center;
          gap: 18px;
          width: max-content;
          animation: logo-scroll 28s linear infinite;
        }

        .logo-carousel-track:hover {
          animation-play-state: paused;
        }

        .logo-carousel-item {
          width: 200px;
          height: 120px;
          border-radius: 24px;
          background: #fff;
          border: 1px solid rgba(120, 162, 171, 0.14);
          box-shadow: 0 8px 20px rgba(47, 75, 83, 0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          padding: 18px 22px;
        }

        .logo-carousel-img {
          width: 100%;
          height: 100%;
          max-width: 110px;
          max-height: 70px;
          object-fit: contain;
        }

        @keyframes logo-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 9px));
          }
        }

        .whyus-section {
          padding: 96px 0;
          background: var(--bg);
          overflow: hidden;
        }

        .whyus-header {
          margin-bottom: 52px;
        }

        .whyus-header h2 {
          margin: 12px 0 16px;
          font-size: clamp(2rem, 4vw, 3.2rem);
          line-height: 1.08;
          color: var(--primary);
        }

        .whyus-header p {
          font-size: 1.06rem;
          line-height: 1.8;
          color: var(--text-muted);
          max-width: 640px;
        }

        .whyus-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .why-card {
          position: relative;
          overflow: hidden;
          border-radius: 26px;
          padding: 30px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .why-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 48px rgba(47, 75, 83, 0.1);
        }

        .why-card-wide {
          grid-column: span 2;
        }

        .why-card-dark {
          background: var(--primary);
          color: white;
        }

        .why-card-teal {
          background: var(--secondary);
          color: white;
        }

        .why-card-accent {
          background: var(--accent);
          color: var(--primary);
        }

        .why-card-light {
          background: white;
          color: var(--primary);
          border: 1px solid rgba(111, 150, 160, 0.14);
          box-shadow: 0 10px 24px rgba(47, 75, 83, 0.05);
        }

        .why-card-muted {
          background: rgba(111, 150, 160, 0.08);
          color: var(--primary);
          border: 1px solid rgba(111, 150, 160, 0.14);
        }

        .why-card-icon {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          display: grid;
          place-items: center;
          font-size: 1.25rem;
          margin-bottom: 18px;
          background: rgba(255, 255, 255, 0.12);
        }

        .why-card-light .why-card-icon,
        .why-card-muted .why-card-icon {
          background: rgba(47, 75, 83, 0.08);
        }

        .why-card-accent .why-card-icon {
          background: rgba(47, 75, 83, 0.12);
        }

        .why-card-title {
          margin: 0 0 12px;
          font-size: 1.35rem;
          line-height: 1.18;
          font-weight: 700;
        }

        .why-card-title-lg {
          font-size: clamp(1.45rem, 2.4vw, 2rem);
        }

        .why-card-text {
          margin: 0;
          font-size: 0.97rem;
          line-height: 1.78;
          opacity: 0.86;
          max-width: 520px;
        }

        .why-card-stat {
          display: flex;
          align-items: flex-end;
          gap: 10px;
          margin-top: 28px;
        }

        .why-card-stat-num {
          font-size: 3rem;
          line-height: 1;
          font-weight: 800;
          letter-spacing: -0.04em;
        }

        .why-card-stat-label {
          font-size: 0.84rem;
          line-height: 1.4;
          opacity: 0.7;
          max-width: 120px;
          padding-bottom: 5px;
        }

        .why-card-mark {
          position: absolute;
          right: -12px;
          bottom: -18px;
          font-size: 9rem;
          line-height: 1;
          opacity: 0.07;
          user-select: none;
          pointer-events: none;
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

        .faq-section {
          padding: 88px 0;
          background: white;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 56px;
          align-items: start;
        }

        .faq-left h2 {
          margin: 0 0 18px;
          font-size: clamp(2rem, 4vw, 3.4rem);
          line-height: 1.08;
        }

        .faq-left p {
          margin: 0;
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--text-muted);
        }

        .faq-right {
          display: grid;
          gap: 16px;
        }

        .faq-card {
          background: rgba(255, 255, 255, 0.88);
          border: 1px solid rgba(111, 150, 160, 0.14);
          border-radius: 22px;
          box-shadow: 0 10px 24px rgba(47, 75, 83, 0.05);
          overflow: hidden;
          transition: 0.25s ease;
        }

        .faq-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 34px rgba(47, 75, 83, 0.08);
        }

        .faq-card-open {
          border-color: rgba(111, 150, 160, 0.24);
          box-shadow: 0 18px 34px rgba(47, 75, 83, 0.08);
        }

        .faq-question {
          width: 100%;
          border: 0;
          background: transparent;
          padding: 22px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          text-align: inherit;
          font-size: 1rem;
          font-weight: 600;
          color: var(--primary);
          cursor: pointer;
        }

        .faq-icon {
          width: 34px;
          height: 34px;
          border-radius: 999px;
          background: rgba(111, 150, 160, 0.1);
          display: grid;
          place-items: center;
          flex-shrink: 0;
          font-size: 1.2rem;
          line-height: 1;
        }

        .faq-answer {
          padding: 0 24px 22px;
        }

        .faq-answer p {
          margin: 0;
          color: var(--text-muted);
          line-height: 1.8;
          font-size: 0.96rem;
        }

        .contact-section {
          padding: 96px 0;
          background: linear-gradient(180deg, #f7fafa 0%, #f1f7f7 100%);
        }

        .contact-shell {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 32px;
          align-items: center;
        }

        .contact-copy h2 {
          margin: 0 0 18px;
          font-size: clamp(2rem, 4vw, 3.4rem);
          line-height: 1.08;
        }

        .contact-copy p {
          margin: 0;
          max-width: 640px;
          font-size: 1.06rem;
          line-height: 1.85;
          color: var(--text-muted);
        }

        .contact-card {
          position: relative;
          border-radius: 30px;
          padding: 1px;
          background: linear-gradient(
            135deg,
            rgba(111, 150, 160, 0.24),
            rgba(139, 191, 159, 0.24)
          );
          box-shadow: 0 24px 60px rgba(47, 75, 83, 0.08);
        }

        .contact-card-glow {
          position: absolute;
          inset: auto auto -40px -30px;
          width: 180px;
          height: 180px;
          background: rgba(139, 191, 159, 0.18);
          filter: blur(50px);
          border-radius: 999px;
          pointer-events: none;
        }

        .contact-card-inner {
          position: relative;
          border-radius: 29px;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(20px);
          padding: 30px;
        }

        .contact-card-label {
          margin: 0 0 10px;
          font-size: 0.76rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--secondary);
          font-weight: 700;
        }

        .contact-card h3 {
          margin: 0 0 12px;
          font-size: 1.8rem;
          line-height: 1.15;
        }

        .contact-card p {
          margin: 0;
          color: var(--text-muted);
          line-height: 1.8;
        }

        .contact-card-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 26px;
        }

        .contact-meta {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-top: 28px;
          padding-top: 22px;
          border-top: 1px solid rgba(111, 150, 160, 0.12);
        }

        .contact-meta-item {
          display: grid;
          gap: 4px;
        }

        .contact-meta-title {
          font-size: 0.78rem;
          color: var(--text-soft);
          text-transform: uppercase;
          letter-spacing: 0.16em;
        }

        .contact-meta-value {
          font-size: 0.95rem;
          color: var(--primary);
          font-weight: 600;
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

        [dir="rtl"] {
          text-align: right;
        }

        [dir="rtl"] .brand,
        [dir="rtl"] .nav-inner,
        [dir="rtl"] .desktop-nav,
        [dir="rtl"] .desktop-actions,
        [dir="rtl"] .hero-actions,
        [dir="rtl"] .testimonial-user,
        [dir="rtl"] .footer-bottom,
        [dir="rtl"] .floating-badge,
        [dir="rtl"] .why-card-stat,
        [dir="rtl"] .contact-card-actions {
          direction: rtl;
        }

        [dir="rtl"] .hero-grid,
        [dir="rtl"] .testimonials-grid,
        [dir="rtl"] .faq-grid,
        [dir="rtl"] .footer-top,
        [dir="rtl"] .whyus-grid,
        [dir="rtl"] .contact-shell {
          direction: rtl;
        }

        [dir="rtl"] .logo-carousel-track {
          direction: ltr;
        }

        [dir="rtl"] .panel-top,
        [dir="rtl"] .brand,
        [dir="rtl"] .nav-inner {
          text-align: right;
        }

        [dir="rtl"] .why-card-mark {
          right: auto;
          left: -12px;
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
          .faq-grid,
          .footer-top,
          .contact-shell {
            grid-template-columns: 1fr;
          }

          .whyus-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .why-card-wide {
            grid-column: span 1;
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
          .testimonials-left p,
          .logo-strip-text,
          .faq-left p,
          .whyus-header p,
          .contact-copy p {
            font-size: 1rem;
          }

          .feature-cards,
          .steps-grid,
          .footer-links-grid,
          .whyus-grid,
          .contact-meta {
            grid-template-columns: 1fr;
          }

          .why-card-wide {
            grid-column: span 1;
          }

          .why-card-mark {
            display: none;
          }

          .simple-section,
          .testimonials-section,
          .logo-carousel-section,
          .faq-section,
          .whyus-section,
          .contact-section {
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

          .logo-carousel-item {
            width: 150px;
            height: 96px;
            padding: 14px 18px;
          }

          .logo-carousel-img {
            max-width: 90px;
            max-height: 56px;
          }

          .faq-question {
            padding: 18px;
            font-size: 0.95rem;
          }

          .faq-answer {
            padding: 0 18px 18px;
          }

          .why-card {
            padding: 24px;
          }

          .why-card-stat-num {
            font-size: 2.4rem;
          }

          .contact-card-inner {
            padding: 22px;
          }
        }
      `}</style>

      <Navbar
        scrolled={scrolled}
        t={t}
        onToggleLanguage={() =>
          setLanguage((prev) => (prev === "en" ? "ar" : "en"))
        }
      />

      <Hero t={t} />
      <LogoCarousel t={t} />

      <SimpleSection id="about" title={t.about.title} text={t.about.text} />

      <SimpleSection
        id="services"
        title={t.services.title}
        text={t.services.text}
      />

      <WhyUs t={t} />

      <Testimonials t={t} language={language} />

      <FAQSection t={t} />

      <ContactSection t={t} />

      <Footer t={t} language={language} />
    </div>
  );
}
