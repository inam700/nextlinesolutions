"use client";
import { technologies } from "@/assets/data/technologies";
import Image from "next/image";
import React, { useState } from "react";
import techbg from "@/assets/images/about-bg-1.png";

const Technologies = () => {
  const [active, setActive] = useState("Mobile");
  return (
    <div className="p-20 relative">
      {/* <Image
        src={techbg}
        alt="about-bg"
        className="absolute right-0 bottom-0 rotate-90"
      /> */}
      <p className="text-4xl font-extrabold mb-3">
        Our <b className="text-logoColorPrimary">Technologies</b>{" "}
      </p>
      <p className="text-lg mb-10">
        We're constantly pushing boundaries with the latest technologies to
        optimize your workflow, maximize output, and propel your business
        forward.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:gap-6 xl:gap-8 border-t">
        <div className="group relative border-r px-20 py-10">
          <div>
            {[
              "Mobile",
              "Frontend",
              "Backend",
              "Database",
              "AI/ML",
              "Data Science",
              "CMS",
              "Blockchain",
              "Cloud",
            ].map((item) => (
              <div
                className={`mb-2 px-5 py-2 cursor-pointer ${
                  active === item &&
                  "bg-gradient-to-r from-logoColorPrimary to-white text-white rounded-full"
                }`}
                onClick={() => setActive(item)}
              >
                <p className="text font-bold">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="group relative md:col-span-2 px-5 py-10">
          <p className="text-2xl font-bold mb-5">{active}</p>

          <div className="flex gap-4 flex-wrap text-sm font-bold">
            {technologies
              .filter((item) => item.type === active)
              .map((tech, index) => (
                <div
                  key={index}
                  className="px-3 py-2 flex items-center justify-center gap-2 border-2 border-gray-700 rounded-full cursor-pointer min-w-40"
                >
                  <Image src={tech.image} alt="tech" className="w-7" />
                  <p>{tech.name}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
