import portfolioIcon1 from "@/assets/icons/portfolio/dvago.png";
import portfolioIcon2 from "@/assets/icons/portfolio/myvitaminstore.png";
import portfolioIcon3 from "@/assets/icons/portfolio/springs.png";
import portfolioIcon4 from "@/assets/icons/portfolio/acadium.png";
import portfolioIcon5 from "@/assets/icons/portfolio/cozy.png";
import portfolioIcon6 from "@/assets/icons/portfolio/garsho.png";
import portfolioIcon7 from "@/assets/icons/portfolio/roam.png";
import portfolioIcon8 from "@/assets/icons/portfolio/gitcha.png";
import portfolioIcon9 from "@/assets/icons/portfolio/doozoo.png";
import portfolioIcon10 from "@/assets/icons/portfolio/ladle.png";

import portfolioImage1 from "@/assets/images/portfolio/dvago-main.png";
import portfolioImage2 from "@/assets/images/portfolio/myvitaminstore-main.png";
import portfolioImage3 from "@/assets/images/portfolio/springs-main.png";
import portfolioImage4 from "@/assets/images/portfolio/acadium.png";
import portfolioImage5 from "@/assets/images/portfolio/cozy.png";
import portfolioImage6 from "@/assets/images/portfolio/garsho.png";
import portfolioImage7 from "@/assets/images/portfolio/roam.png";
import portfolioImage8 from "@/assets/images/portfolio/gitcha.png";
import portfolioImage9 from "@/assets/images/portfolio/doozoo-1.png";
import portfolioImage10 from "@/assets/images/portfolio/ladle-1.png";

import techSvgSwift from "@/assets/icons/tools/svg/mobile/swift.svg";
import techSvgNative from "@/assets/icons/tools/svg/mobile/react-native.svg";

import techSvgTailwind from "@/assets/icons/tools/svg/frontend/tailwind.svg";
import techSvgMaterial from "@/assets/icons/tools/svg/frontend/material-ui.svg";
import techSvgJavascript from "@/assets/icons/tools/svg/frontend/javascript.svg";
import techSvgTypescript from "@/assets/icons/tools/svg/frontend/typescript.svg";
import techSvgReactJS from "@/assets/icons/tools/svg/frontend/react-js.svg";
import techSvgNextJS from "@/assets/icons/tools/svg/frontend/next-js.svg";

import techSvgNode from "@/assets/icons/tools/svg/backend/node-js.svg";
import techSvgPython from "@/assets/icons/tools/svg/backend/python.svg";
import techSvgPhp from "@/assets/icons/tools/svg/backend/php.svg";
import techSvgLaravel from "@/assets/icons/tools/svg/backend/laravel.svg";

import techSvgMongo from "@/assets/icons/tools/svg/database/mongo.svg";
import techSvgFirebase from "@/assets/icons/tools/svg/database/firebase.svg";

import techSvgWordpress from "@/assets/icons/tools/svg/cms/wordpress.svg";
import techSvgShopify from "@/assets/icons/tools/svg/cms/shopify.svg";

import techSvgOpenAI from "@/assets/icons/tools/svg/ai/openai.svg";
import techSvgFlask from "@/assets/icons/tools/svg/ai/flask.svg";
import techSvgFastApi from "@/assets/icons/tools/svg/ai/fastapi.svg";

export const portfolio = [
  {
    id: 1,
    name: "Real-Estate Marketplace",
    platform: "Web, Mobile App",
    image: portfolioImage8,
    icon: portfolioIcon8,
    tags: [
      { name: "Swift", image: techSvgSwift },
      { name: "Firebase", image: techSvgFirebase },
    ],
    description:
      "we've flipped the script on house hunting. Forget endless scrolling through homes that aren't quite right. Join the live feed where buyers and renters like you shout out exactly what you're looking for.",
    featured: true,
    grid: 2,
    imageWidth: 96,
    gradient: {
      from: "blue-600",
      to: "blue-300",
    },
    filterTags: ["Web"],
  },
  {
    id: 2,
    name: "Vitamin Store",
    platform: "Web, Mobile Responsive App",
    image: portfolioImage2,
    icon: portfolioIcon2,
    tags: [{ name: "Shopify", image: techSvgShopify }],
    description:
      "My Vitamin Store is a fast growing chain of Natural Health Stores retailing leading local and international brands of Vitamins, Supplements, Sports Nutrition and other natural products for Personal and Home Care.",
    featured: false,
    grid: 1,
    imageWidth: 72,
    filterTags: ["CMS"],
  },
  {
    id: 3,
    name: "Best Online Pharmacy In Pakistan",
    platform: "Web, Mobile Responsive App",
    image: portfolioImage1,
    icon: portfolioIcon1,
    tags: [
      { name: "JavaScript", image: techSvgJavascript },
      { name: "React.JS", image: techSvgReactJS },
      { name: "Node.JS", image: techSvgNode },
      { name: "MongoDB", image: techSvgMongo },
    ],
    description:
      "This is a premier online pharmacy in Pakistan that offers a wide variety of medications, baby food, and personal care products. Some of the medications listed are Cyclogest, Ensure, and Lactogen. Baby food products include Meiji milk powder and Pediasure.",
    featured: true,
    grid: 1,
    imageWidth: 72,
    filterTags: ["CMS"],
  },
  {
    id: 4,
    name: "E-Learning Platform for digital marketing",
    platform: "Mobile App",
    image: portfolioImage4,
    icon: portfolioIcon4,
    tags: [
      { name: "React Native", image: techSvgNative },
      { name: "Node.JS", image: techSvgNode },
      { name: "Firebase", image: techSvgFirebase },
    ],
    description:
      "Launchpad to a Thriving Career in Digital Marketing. Free apprenticeships, courses, job opportunities, and certifications—ignite your potential!",
    featured: true,
    grid: 2,
    imageWidth: 72,
    filterTags: ["Mobile"],
  },

  {
    id: 5,
    name: "Fashion & Lifestyle",
    platform: "Mobile App",
    image: portfolioImage6,
    icon: portfolioIcon6,
    tags: [{ name: "React Native", image: techSvgNative }],
    description:
      "Elevate your style, simplify your shopping. Your fashion and lifestyle companion, lets you effortlessly buy and sell trendy dresses, classic denim, iconic t-shirts, and more. Enjoy secure online payments and stress-free shipping – all in one stylish app.",
    featured: true,
    grid: 1,
    imageWidth: 56,
    filterTags: ["Mobile"],
  },
  {
    id: 6,
    name: "Tour Booking App",
    platform: "Web, Mobile Responsive App",
    image: portfolioImage7,
    icon: portfolioIcon7,
    tags: [
      { name: "TypeScript", image: techSvgTypescript },
      { name: "Next.JS", image: techSvgNextJS },
      { name: "Firebase", image: techSvgFirebase },
      { name: "Tailwind CSS", image: techSvgTailwind },
    ],
    description:
      "Roam Beyond: Unleash your adventurous spirit in the Himalayas. Explore our curated group journeys, craft your own unique path, or delve into the cultural tapestry with our Himalayan studies program.",
    featured: false,
    grid: 1,
    imageWidth: 72,
    filterTags: ["Web"],
  },
  {
    id: 9,
    name: "AI-Powered Kitchen Assistant",
    platform: "Web, Mobile Responsive App",
    image: portfolioImage10,
    icon: portfolioIcon10,
    tags: [
      { name: "Python", image: techSvgPython },
      { name: "Flask", image: techSvgFlask },
      { name: "FastApi", image: techSvgFastApi },
    ],
    description:
      "Ladle is your AI-powered kitchen companion, transforming your kitchen into a realm of personalized flavor. Powered by advanced Natural Language Processing and cutting-edge LLM models, Ladle crafts bespoke recipes that cater to your unique tastes and dietary needs. Whether you're a vegan virtuoso, a vegetarian aficionado, or a gluten-free gourmand, Ladle effortlessly conjures up imaginative dishes that align with your preferences, favorite ingredients, and culinary style. With Ladle, every meal becomes a personalized culinary adventure.",
    featured: false,
    grid: 2,
    imageWidth: 72,
    filterTags: ["Web", "Data & AI"],
  },

  {
    id: 8,
    name: "Online Grocery Store",
    platform: "Web, Mobile Responsive App",
    image: portfolioImage3,
    icon: portfolioIcon3,
    tags: [
      { name: "WordPress", image: techSvgWordpress },
      { name: "PHP", image: techSvgPhp },
      { name: "Laravel", image: techSvgLaravel },
    ],
    description:
      " Your one-stop shop for a world of treasures, where quality meets value in every aisle. Discover a curated collection of imported delights and local favorites, all within a pristine and welcoming atmosphere. Experience the joy of shopping redefined, only at Springs.",
    featured: true,
    grid: 1,
    imageWidth: 72,
    filterTags: ["CMS"],
  },

  {
    id: 10,
    name: "AI-Powered Designing Tool",
    platform: "Web, Mobile Responsive App",
    image: portfolioImage9,
    icon: portfolioIcon9,
    tags: [
      { name: "JavaScript", image: techSvgJavascript },
      { name: "Python", image: techSvgPython },
      { name: "React.JS", image: techSvgReactJS },
      { name: "Flask", image: techSvgFlask },
      { name: "FastApi", image: techSvgFastApi },
    ],
    description:
      "Doozoo is a revolutionary AI-powered design platform that empowers creative agencies to effortlessly craft stunning visuals. Leveraging advanced image generation and natural language understanding, Doozoo transforms ideas into captivating graphics, ads, videos, and banners. Streamlining the design process, Doozoo liberates agencies from tedious tasks, enabling them to focus on unleashing their full creative potential.",
    featured: false,
    grid: 1,
    imageWidth: 72,
    filterTags: ["Web", "Data & AI"],
  },
  {
    id: 7,
    name: "Chatbot for Customer Service",
    platform: "Web, Mobile Responsive App",
    image: portfolioImage5,
    icon: portfolioIcon5,
    tags: [
      { name: "TypeScript", image: techSvgTypescript },
      { name: "Open AI", image: techSvgOpenAI },
      { name: "Python", image: techSvgPython },
      { name: "Next.JS", image: techSvgNextJS },
      { name: "Material UI", image: techSvgMaterial },
    ],
    description:
      "Your one-stop shop for stylish and affordable furniture is getting even better! Cozy App is unveiling a smart new chatbot, making it easier than ever to get the information you need about our products, your orders, and more – right at your fingertips.",
    featured: true,
    grid: 2,
    imageWidth: 60,
    filterTags: ["Web", "Data & AI"],
  },
];

export const filters = ["All", "Web", "Mobile", "CMS", "Data & AI"];
