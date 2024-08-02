export const navbarData = [
  {
    title: "About",
    mainLink: "/about",
    menuType: "simple",
    links: [
      { href: "/about", name: "Overview" },
      { href: "/about", name: "Why Choose us" },
      { href: "/about", name: "Our Strategy" },
    ],
  },
  {
    title: "Services",
    mainLink: "/services",
    menuType: "extended",
    links: [
      {
        typeName: "Design & Engineering",
        types: [
          { href: "/services", name: "Web App Development" },
          { href: "/services", name: "Mobile App Development" },
        ],
      },
      {
        typeName: "Data & AI",
        types: [
          { href: "/services", name: "Data Science" },
          { href: "/services", name: "Data Engineering" },
          { href: "/services", name: "Generative AI" },
          { href: "/services", name: "Machine Learning" },
        ],
      },
      {
        typeName: "E-Commerce",
        types: [
          { href: "/services", name: "Shopify" },
          { href: "/services", name: "WordPress" },
        ],
      },
    ],
  },
];
