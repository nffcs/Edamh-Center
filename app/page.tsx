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
      title: "About Edamah Center",
      text: "We provide patient-centered physiotherapy and rehabilitation care focused on restoring movement, easing pain, and helping every patient recover with confidence through modern, evidence-based treatment.",
      items: [
        {
          title: "Patient-Centered Care",
          text: "Every treatment journey starts with understanding your condition, comfort, and long-term recovery goals.",
        },
        {
          title: "Modern Clinical Approach",
          text: "Our methods combine hands-on expertise, structured evaluation, and evidence-based physiotherapy practices.",
        },
        {
          title: "Recovery With Confidence",
          text: "We focus on pain relief, improved movement, and steady progress that supports daily life and lasting wellbeing.",
        },
      ],
    },
    services: {
      title: "Our Services",
      text: "From injury rehabilitation and post-surgery recovery to chronic pain management and personalized treatment plans, our services are designed to support every stage of recovery.",
    },
    whyUs: {
      badge: "Why Choose Us",
      title: "The center that puts your recovery first",
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
          body: "Our center is designed to feel less like a medical facility and more like a place of healing — quiet, clean, and patient-focused.",
          icon: "◇",
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
      text: "Real experiences from patients who trusted our center for pain relief, rehabilitation, and improved mobility through personalized physiotherapy care.",
    },
    faq: {
      badge: "Questions & Answers",
      title: "Frequently asked questions",
      text: "Find quick answers about appointments, treatment plans, and what to expect during your visit.",
      items: [
        {
          question: "Do I need an appointment before visiting the center?",
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
            "Session length can vary depending on the treatment plan, but most appointments typically last between 45 and 60 minutes.",
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
      locationLabel: "Location",
      locationValue: "Buraydah",
      hoursLabel: "Hours",
    },
    footer: {
      copy: "Personalized physiotherapy and rehabilitation care focused on pain relief, mobility, recovery, and long-term wellness in a trusted clinical environment.",
      rights: "© 2026 Edamah Center. All rights reserved.",
      categories: {
        clinic: "Center",
        patients: "Patients",
      },
    },
  },
  ar: {
    clinicName: "مركز إدامة",
    clinicSubtitle: "علاج طبيعي وتأهيل طبي",
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
      title1: "تحرّك أفضل",
      title2: "تعافَ أقوى",
      title3: "وعِش بثقة",
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
      title: "عن مركز إدامة",
      text: "نقدم رعاية علاج طبيعي وإعادة تأهيل تركز على المريض، بهدف استعادة الحركة وتخفيف الألم ومساعدة كل مريض على التعافي بثقة من خلال أساليب علاجية حديثة قائمة على الأدلة.",
      items: [
        {
          title: "رعاية تتمحور حول المريض",
          text: "تبدأ كل رحلة علاجية بفهم حالتك وراحتك وأهدافك للتعافي على المدى الطويل.",
        },
        {
          title: "منهجية علاجية حديثة",
          text: "نعتمد على التقييم الدقيق والخبرة العملية وأساليب العلاج الطبيعي الحديثة المبنية على أفضل الممارسات.",
        },
        {
          title: "تعافٍ بثقة",
          text: "نركز على تخفيف الألم وتحسين الحركة وتحقيق تقدم مستمر يدعم حياتك اليومية وعافيتك على المدى البعيد.",
        },
      ],
    },
    services: {
      title: "خدماتنا",
      text: "من إعادة تأهيل الإصابات والتعافي بعد العمليات الجراحية إلى علاج الألم المزمن والخطط العلاجية المخصصة، صُممت خدماتنا لدعم كل مرحلة من مراحل التعافي.",
    },
    whyUs: {
      badge: "لماذا تختارنا",
      title: "المركز الذي يضع تعافيك في المقام الأول",
      subtitle:
        "من زيارتك الأولى حتى جلستك الأخيرة، كل تفصيلة مصممة حول راحتك وتقدمك وصحتك على المدى البعيد.",
      cards: {
        expert: {
          title: "فريقنا",
          body: "يتمتع فريقنا بسنوات من الخبره في تقييم الحالات الهيكلية العضلية، الاصبات الرياضية والتأهيل ما بعد العمليات الجراحية والحالات المزمنة.",
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
          body: "مركزنا مصمم ليبدو أقل كمنشأة طبية وأكثر كمكان للشفاء — هادئ ونظيف ويركز على المريض.",
          icon: "◇",
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
      text: "تجارب حقيقية من مرضى وثقوا بمركزنا لتخفيف الألم وإعادة التأهيل وتحسين الحركة من خلال رعاية علاج طبيعي مخصصة.",
    },
    faq: {
      badge: "الأسئلة والأجوبة",
      title: "الأسئلة الشائعة",
      text: "اعثر على إجابات سريعة حول المواعيد، والخطط العلاجية، وما يمكن توقعه أثناء زيارتك.",
      items: [
        {
          question: "هل أحتاج إلى موعد قبل زيارة المركز؟",
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
            "تختلف مدة الجلسة حسب الخطة العلاجية، لكن معظم المواعيد تستغرق عادة من 45 إلى 60 دقيقة.",
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
      locationLabel: "الموقع",
      locationValue: "بريدة",
      hoursLabel: "ساعات العمل",
    },
    footer: {
      copy: "رعاية علاج طبيعي وإعادة تأهيل مخصصة تركز على تخفيف الألم وتحسين الحركة ودعم التعافي والعافية طويلة المدى في بيئة علاجية موثوقة.",
      rights: "© 2026 مركز إدامة. جميع الحقوق محفوظة.",
      categories: {
        clinic: "المركز",
        patients: "المرضى",
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
      ar: "أكثر ما لفت انتباهي هو مدى تخصيص الرعاية لكل حالتي. استمع المعالجون بعناية وشرحوا لي كل مرحلة وساعدوني على العود إلى نشاطي اليومي براحة أكبر.",
    },
  },
];

function getWhatsappLink(language: Language) {
  return language === "ar"
    ? "https://wa.me/966557571172?text=مرحبًا%20أرغب%20بحجز%20موعد"
    : "https://wa.me/966557571172?text=Hello%20I%20want%20to%20book%20an%20appointment";
}

function BrandLogo() {
  return (
    <div className="logo-box">
      <img
        src="/edamah_logo_square_exact.png"
        alt="Edamah Center Logo"
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
    {
      src: "/logos/basmat-tafaul.png",
      alt: "Basmat Tafaul",
      className: "logo-basmat",
    },
    { src: "/logos/moves.png", alt: "Moves", className: "logo-moves" },
    { src: "/logos/btl.png", alt: "BTL", className: "logo-btl" },
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
                  className={`logo-carousel-img ${logo.className ?? ""}`}
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
  language,
  onToggleLanguage,
}: {
  scrolled: boolean;
  t: (typeof content)["en"];
  language: Language;
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

          <a href="tel:+966557571172" className="ghost-btn">
            {t.buttons.callUs}
          </a>

          <a
            href={getWhatsappLink(language)}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn small-btn"
          >
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
              href="tel:+966557571172"
              className="ghost-btn full-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.buttons.callUs}
            </a>

            <a
              href={getWhatsappLink(language)}
              target="_blank"
              rel="noopener noreferrer"
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

function Hero({
  t,
  language,
}: {
  t: (typeof content)["en"];
  language: Language;
}) {
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
<h1
  className={`hero-title ${
    language === "en" ? "hero-title-en" : "hero-title-ar"
  }`}
>
  <span>{t.hero.title1}</span>
  <span className="gradient-text">{t.hero.title2}</span>
  <span>{t.hero.title3}</span>
</h1>

          <p className="hero-text">{t.hero.text}</p>

          <div className="hero-actions">
            <a
              href={getWhatsappLink(language)}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
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
              <div className="panel-icon">✦</div>
            </div>

            <div className="panel-content">
              <div className="assessment-card">
                <p
  className="assessment-label"
  style={
    language === "ar"
      ? {
          textTransform: "none",
          letterSpacing: "0",
          fontSize: "0.85rem",
        }
      : undefined
  }
>
  {t.hero.assessmentLabel}
</p>
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

function AboutSection({
  t,
  language,
}: {
  t: (typeof content)["en"];
  language: Language;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const aboutItems = t.about.items;

  const visualContent = [
    {
      eyebrow: language === "en" ? "Care Philosophy" : "فلسفة الرعاية",
      title:
        language === "en"
          ? "Patient-first rehabilitation"
          : "تأهيل يضع المريض أولاً",
      text:
        language === "en"
          ? "A calm environment, clear communication, and treatment plans built around each individual."
          : "بيئة هادئة وتواصل واضح وخطط علاجية تُبنى حول احتياج كل مريض.",
      stat: language === "en" ? "Personalized" : "مخصص",
    },
    {
      eyebrow: language === "en" ? "Clinical Approach" : "المنهجية العلاجية",
      title:
        language === "en"
          ? "Modern, evidence-based treatment"
          : "علاج حديث قائم على الأدلة",
      text:
        language === "en"
          ? "We combine professional assessment, guided therapy, and modern physiotherapy practices."
          : "نجمع بين التقييم المهني والعلاج الموجّه وأساليب العلاج الطبيعي الحديثة.",
      stat: language === "en" ? "Evidence-Based" : "مدعوم بالأدلة",
    },
    {
      eyebrow: language === "en" ? "Recovery Goal" : "هدف التعافي",
      title:
        language === "en"
          ? "Better movement, better daily life"
          : "حركة أفضل وحياة يومية أفضل",
      text:
        language === "en"
          ? "Our focus is steady progress, pain reduction, and long-term confidence in movement."
          : "نركز على التقدم المستمر وتخفيف الألم واستعادة الثقة في الحركة على المدى الطويل.",
      stat: language === "en" ? "Long-Term Recovery" : "تعافٍ طويل المدى",
    },
  ];

  const active = visualContent[activeIndex];

  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        {/* LEFT */}
        <div className="about-copy">
          <div className="pill secondary-pill">
            {language === "en" ? "About Us" : "من نحن"}
          </div>

          <h2>{t.about.title}</h2>
          <p className="about-intro">{t.about.text}</p>

          <div className="about-list">
            {aboutItems.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`about-item ${
                  activeIndex === index ? "about-item-active" : ""
                }`}
              >
                <div className="about-item-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="about-item-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="about-visual-shell">
          <div className="about-visual-card">
            <div className="about-orb about-orb-1" />
            <div className="about-orb about-orb-2" />
            <div className="about-ring about-ring-1" />
            <div className="about-ring about-ring-2" />

            <div className="about-visual-top">
              <span
                key={activeIndex}
                className="about-visual-eyebrow"
              >
                {active.eyebrow}
              </span>

              <div key={activeIndex + "-badge"} className="about-visual-badge">
                {active.stat}
              </div>
            </div>

            <div className="about-visual-center">
              <div className="about-logo-core">
                <img
                  src="/edamah_logo_square_exact.png"
                  alt="Edamah Center Logo"
                  className="about-logo-img"
                />
              </div>
            </div>

            <div key={activeIndex + "-text"} className="about-visual-bottom">
              <h3>{active.title}</h3>
              <p>{active.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs({ t }: { t: (typeof content)["en"] }) {
  const w = t.whyUs;
  const c = w.cards;

  return (
    <section id="whyus" className="whyus-section">
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
    <section id="faq" className="faq-section">
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

function ContactSection({
  t,
  language,
}: {
  t: (typeof content)["en"];
  language: Language;
}) {
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
                <a
                  href={getWhatsappLink(language)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-btn"
                >
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
                  <span className="contact-meta-value" dir="ltr">
                    +966 55 757 1172
                  </span>
                </div>

                <div className="contact-meta-item">
                  <span className="contact-meta-title">
                    {t.contact.locationLabel}
                  </span>
                  <span className="contact-meta-value">
                    {t.contact.locationValue}
                  </span>
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
          ? [
              { label: "About", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Contact", href: "#contact" },
            ]
          : [
              { label: "من نحن", href: "#about" },
              { label: "الخدمات", href: "#services" },
              { label: "تواصل معنا", href: "#contact" },
            ],
    },
    {
      title: t.footer.categories.patients,
      links:
        language === "en"
          ? [
              {
                label: "Book Appointment",
                href: getWhatsappLink(language),
                external: true,
              },
              { label: "FAQ", href: "#faq" },
            ]
          : [
              {
                label: "حجز موعد",
                href: getWhatsappLink(language),
                external: true,
              },
              { label: "الأسئلة الشائعة", href: "#faq" },
            ],
    },
  ];

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
            <p dir="ltr">+966 55 757 1172</p>
            <p>
              {language === "en"
                ? "Al Salam Rd, Al Nakhil District, Buraydah 52375, Saudi Arabia"
                : "طريق السلام حي النخيل، بريدة 52375، المملكة العربية السعودية"}
            </p>
            <p>1:00 PM – 9:00 PM</p>
          </div>
        </div>

        <div className="footer-links-grid">
          {footerCategories.map((category) => (
            <div key={category.title}>
              <h3>{category.title}</h3>
              <ul>
                {category.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : {})}
                    >
                      {link.label}
                    </a>
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
          <a href="#home">{language === "en" ? "Home" : "الرئيسية"}</a>
          <a href="#about">{language === "en" ? "About" : "من نحن"}</a>
          <a href="#contact">{language === "en" ? "Contact" : "تواصل معنا"}</a>
        </div>
      </div>
    </footer>
  );
}

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
      <Navbar
        scrolled={scrolled}
        t={t}
        language={language}
        onToggleLanguage={() =>
          setLanguage((prev) => (prev === "en" ? "ar" : "en"))
        }
      />

      <Hero t={t} language={language} />
      <LogoCarousel t={t} />
      <AboutSection t={t} language={language} />

      <SimpleSection
        id="services"
        title={t.services.title}
        text={t.services.text}
      />

      <WhyUs t={t} />
      <Testimonials t={t} language={language} />
      <FAQSection t={t} />
      <ContactSection t={t} language={language} />
      <Footer t={t} language={language} />
    </div>
  );
}