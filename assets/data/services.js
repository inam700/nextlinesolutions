import serviceUIUX from "@/assets/images/services/ui-ux.png";
import serviceWeb from "@/assets/images/services/web.png";
import serviceAIML from "@/assets/images/services/aiml-1.png";
import serviceBlockchain from "@/assets/images/services/blockchain-1.png";
import serviceEcommerce from "@/assets/images/services/cms.png";
import serviceCloud from "@/assets/images/services/cloud.png";

import serviceIconSoftwareDevelopment from "@/assets/icons/services/software.png";
import serviceIconAIML from "@/assets/icons/services/ai.png";
import serviceIconBlockchain from "@/assets/icons/services/blockchain.png";
import serviceIconEcommerce from "@/assets/icons/services/ecommerce.png";
import serviceIconCloud from "@/assets/icons/services/cloud.png";

export const services = [
  {
    id: 1,
    name: "UI/UX Designs",
    image: serviceUIUX,
    description:
      "Empower your online presence with our specialized UI & UX services. Our team crafts intuitive, visually appealing interfaces for web and mobile applications. By staying ahead of design trends, we ensure your digital products are both functional and delightful to use.",
  },
  {
    id: 2,
    name: "Software Development",
    image: serviceWeb,
    icon: serviceIconSoftwareDevelopment,
    description:
      "our vision, our web development expertise. We partner with you to create custom websites that exceed expectations and achieve your goals.",
  },
  // {
  //   id: 2,
  //   name: "Mobile App Development",
  //   image: serviceMobile,
  //   icon: serviceIconSoftwareDevelopment,
  //   description:
  //     "We build the future of mobile experiences. Seamless, user-centric apps powered by cutting-edge technology.",
  //   techs: [
  //     { name: "Java", image: javascript },
  //     { name: "Swift", image: react },
  //     { name: "React Native", image: native },
  //     { name: "Flutter", image: expressjs },
  //   ],
  // },
  {
    id: 3,
    name: "Data & AI",
    image: serviceAIML,
    icon: serviceIconAIML,
    description:
      "Supercharge your applications with AI. Our intelligent solutions enhance user experience and deliver impactful results.",
  },
  // {
  //   id: 4,
  //   name: "Data Science & Data Engineering",
  //   image: serviceDataScience,
  //   icon: serviceIconDataScience,
  //   description:
  //     "Unleash the power of data science to transform your business. Our expert team leverages cutting-edge data science solutions and propel your organization forward.",
  //   techs: [
  //     { name: "JavaScript", image: javascript },
  //     { name: "ReactJS", image: react },
  //     { name: "Next.JS", image: nextjs },
  //     { name: "Vue.JS", image: vue },
  //   ],
  // },

  {
    id: 6,
    name: "E-Commerce",
    image: serviceEcommerce,
    icon: serviceIconEcommerce,
    description:
      "Your digital storefront, reimagined. We build WordPress & Shopify solutions that turn visitors into loyal customers. Experience the power of seamless design, intuitive functionality, and captivating visuals.",
  },
  {
    id: 5,
    name: "Blockchain Services",
    image: serviceBlockchain,
    icon: serviceIconBlockchain,
    description:
      "Elevate your business with our comprehensive blockchain solutions. We specialize in NFT development, swap exchanges, and crypto wallet integration to enhance your operations with secure, transparent, and efficient technology.",
  },
  {
    id: 5,
    name: "Cloud Services",
    image: serviceCloud,
    icon: serviceIconCloud,
    description:
      "Elevate your software with our scalable cloud solutions. We optimize performance, enhance security, and ensure seamless accessibility for your applications.",
  },
];

export const servicesForPage = [
  {
    name: "UI/UX Design",
    description:
      "Empower your online presence with our specialized UI & UX services. Our team crafts intuitive, visually appealing interfaces for web and mobile applications. By staying ahead of design trends, we ensure your digital products are both functional and delightful to use.",
    techs: ["Adobe Xd", "Figma"],
  },
  {
    name: "Web Design",
    description:
      "Empower your online presence with our specialized UI & UX services. Our team crafts intuitive, visually appealing interfaces for web and mobile applications. By staying ahead of design trends, we ensure your digital products are both functional and delightful to use.",
    techs: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Material UI",
      "Tailwind CSS",
      "Ant Design",
    ],
  },
  {
    name: "Front-End Development",
    description:
      "Empower your online presence with our specialized UI & UX services. Our team crafts intuitive, visually appealing interfaces for web and mobile applications. By staying ahead of design trends, we ensure your digital products are both functional and delightful to use.",
    techs: ["JavaScript", "TypeScript", "React.JS", "Next.JS", "Vue.JS"],
  },
  {
    name: "Back-End Development",
    description:
      "Empower your online presence with our specialized UI & UX services. Our team crafts intuitive, visually appealing interfaces for web and mobile applications. By staying ahead of design trends, we ensure your digital products are both functional and delightful to use.",
    techs: [
      "Node.JS",
      "Express.JS",
      "Java",
      "Spring Boot",
      "Python",
      "Php",
      "Laravel",
    ],
  },
  {
    name: "Mobile Development",
    description:
      "Empower your online presence with our specialized UI & UX services. Our team crafts intuitive, visually appealing interfaces for web and mobile applications. By staying ahead of design trends, we ensure your digital products are both functional and delightful to use.",
    techs: ["React Native", "Swift", "Android", "Flutter"],
  },
  {
    name: "Databases",
    description:
      "Empower your online presence with our specialized UI & UX services. Our team crafts intuitive, visually appealing interfaces for web and mobile applications. By staying ahead of design trends, we ensure your digital products are both functional and delightful to use.",
    techs: ["Mongo DB", "MySQL", "Firebase", "Postgres"],
  },

  {
    name: "Data & AI",
    description:
      "Empower your online presence with our specialized UI & UX services. Our team crafts intuitive, visually appealing interfaces for web and mobile applications. By staying ahead of design trends, we ensure your digital products are both functional and delightful to use.",
    techs: ["Python", "Tensorflow", "PyTorch", "OpenAI"],
  },
  {
    name: "E-Commerce",
    description:
      "Empower your online presence with our specialized UI & UX services. Our team crafts intuitive, visually appealing interfaces for web and mobile applications. By staying ahead of design trends, we ensure your digital products are both functional and delightful to use.",
    techs: ["WordPress", "Shopify", "Shopify OS", "Shopify Polaris"],
  },
  {
    name: "Cloud Services",
    description:
      "Empower your online presence with our specialized UI & UX services. Our team crafts intuitive, visually appealing interfaces for web and mobile applications. By staying ahead of design trends, we ensure your digital products are both functional and delightful to use.",
    techs: ["AWS", "GCloud", "Kubernetes"],
  },
];
