// ============================================================
// PORTFOLIO DATA — Edit this object to customize your content
// ============================================================
export const portfolioData = {
  // ── Navbar ───────────────────────────────────────────────
  logo: "GRACIA",
  navLinks: [
    { label: "HOME", href: "#home" },
    { label: "ABOUT ME", href: "#about" },
    { label: "PROJECTS", href: "#projects" },
    { label: "SERVICES", href: "#services" },
    { label: "CONTACT", href: "#contact" },
  ],
  ctaButton: "LET'S TALK",

  // ── Hero Section ─────────────────────────────────────────
  hero: {
    tag: "GRACIA",
    heading: "HAY! I'M YOVITHA GRACIA TAVARES.",
    subheading: "I'M A CS STUDENT",
    description:
      "Crafting beautiful digital experiences with precision and passion. Specialized in UI/UX Design, Brand Identity, and Creative Direction.",
    heroImage: "/yovitha.jpeg",
    socials: [
      { name: "Facebook", href: "#" },
      { name: "Dribbble", href: "#" },
      { name: "Linkedin", href: "#" },
      { name: "Instagram", href: "#" },
    ],
  },

  // ── Client Logos ─────────────────────────────────────────
  clients: [
    {
      name: "logoipsum",
      logo: "https://logoipsum.com/a/logo-4.svg",
    },
    {
      name: "LOGOIPSUM",
      logo: "https://logoipsum.com/a/logo-10.svg",
    },
    {
      name: "logoipsum",
      logo: "https://logoipsum.com/a/logo-15.svg",
    },
    {
      name: "L0GOIPSUM",
      logo: "https://logoipsum.com/a/logo-22.svg",
    },
    {
      name: "logoipsum",
      logo: "https://logoipsum.com/a/logo-27.svg",
    },
  ],

  // ── About Section ────────────────────────────────────────
  // ── About Section ────────────────────────────────────────
  about: {
    tag: "ABOUT ME",
    heading: "COLLABORATION OF STRATEGY AND CREATIVE IDEAS",
    description:
      "Saya Gracia, mahasiswi Teknik Informatika dengan rasa ingin tahu yang tinggi terhadap dunia pemrograman web. Saat ini saya sedang aktif mengasah fondasi koding dan bereksperimen membuat antarmuka web sederhana namun fungsional menggunakan React.",
    aboutImage:
      "https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=500&q=80&fit=crop&crop=face",
    stats: [
      { value: "280+", label: "Google Review" },
      { value: "15+", label: "Years Experience" },
      { value: "49+", label: "Award Winning" },
    ],
  },

  // ── Projects Section ─────────────────────────────────────
  projects: {
    tag: "MY WORK",
    heading: "RECENT PROJECT",
    items: [
      {
        id: 1,
        title: "Personal Portfolio Web",
        category: "React.js, Vite, Web Design",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&q=80",
        description: "Website portofolio pribadi interaktif yang dibangun menggunakan React dan Vite.",
        link: "#",
      },
      {
        id: 2,
        title: "Program Manajemen Data C++",
        category: "C++, Algorithm, Console App",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80",
        description: "Aplikasi berbasis terminal C++ untuk melatih pemahaman logika pemrograman dan struktur data.",
        link: "#",
      },
      {
        id: 3,
        title: "Landing Page Sederhana",
        category: "HTML, CSS, JavaScript",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
        description: "Eksperimen merancang tampilan web landing page yang responsif dan rapi.",
        link: "#",
      },
    ],
  },

  // ── Services Section ─────────────────────────────────────
  services: {
    tag: "SERVICES",
    heading: "DESIGN SERVICES I AM PROVIDING",
    items: [
      {
        id: 1,
        title: "UI/UX Design",
        description:
          "Crafting user-centered interfaces that are both beautiful and functional, delivering seamless digital experiences.",
        icon: "Layers",
      },
      {
        id: 2,
        title: "Brand Identity",
        description:
          "Building strong brand identities from logo design to full visual systems that leave a lasting impression.",
        icon: "Zap",
      },
      {
        id: 3,
        title: "Web Design",
        description:
          "Designing responsive, pixel-perfect websites optimized for conversions and delightful user journeys.",
        icon: "Monitor",
      },
      {
        id: 4,
        title: "Mobile Design",
        description:
          "Creating intuitive mobile app interfaces for iOS and Android with focus on usability and elegance.",
        icon: "Smartphone",
      },
      {
        id: 5,
        title: "Prototyping",
        description:
          "Interactive prototypes that bring ideas to life before development, saving time and resources.",
        icon: "Code2",
      },
      {
        id: 6,
        title: "Creative Direction",
        description:
          "Guiding creative teams and projects from concept to completion with strategic visual thinking.",
        icon: "Star",
      },
    ],
  },

  // ── Contact Section ──────────────────────────────────────
  contact: {
    tag: "CONTACT",
    heading: "LET'S WORK TOGETHER",
    description:
      "Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.",
    email: "yovithagraciatavares@gmail.com",
    phone: "085651403243",
  },
};
