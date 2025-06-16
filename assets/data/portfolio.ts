import typescript from "../icons/services/tech/frontend/ts.png";
import tailwind from "../icons/services/tech/frontend/tailwind.png";
import nextjs from "../icons/services/tech/frontend/next.png";
import shadcn from "../icons/services/tech/frontend/shadcn.png";
import framer from "../icons/services/tech/frontend/framer-motion.svg";

import nodejs from "../icons/services/tech/backend/node.png";
import mongo from "../icons/services/tech/backend/mongo.png";
import socket from "../icons/services/tech/backend/socket.png";

import capitalM from "../images/portfolio/capital-m.png";
import lumin from "../images/portfolio/lumin.png";

export const projects = [
  {
    title: "Investment Platform",
    classes: "p-10 bg-[#416364]",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    image: capitalM,
    tools: [
      { name: "TypeScript", image: typescript },
      { name: "Next.JS", image: nextjs },
      { name: "TailWind CSS", image: tailwind },
      { name: "ShadCN", image: shadcn },
      { name: "Node.JS", image: nodejs },
      { name: "MongoDB", image: mongo },
      { name: "Socket.io", image: socket },
    ],
  },
  {
    title: "Lumin",
    classes: "p-10 bg-[#FF6500]",
    description:
      "Lumin is a sleek and modern React-based portfolio and contact page template, built using Next.js 15+, Tailwind CSS, and ShadCN UI components. Ideal for developers, freelancers, and creative professionals looking to showcase their work and invite collaboration.",
    image: lumin,
    tools: [
      { name: "TypeScript", image: typescript },
      { name: "Next.JS", image: nextjs },
      { name: "TailWind CSS", image: tailwind },
      { name: "ShadCN", image: shadcn },
      { name: "Framer Motion", image: framer },
    ],
  },
];
