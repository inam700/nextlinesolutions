"use client";
import { technologies } from "@/assets/data/technologies";
import Image from "next/image";
import React, { useState } from "react";

const Technologies = () => {
  const [active, setActive] = useState("Mobile");
  return (
    <div className="p-5 md:p-20 relative">
      <p className="text-2xl sm:text-4xl font-extrabold mb-3 text-center">
        <b className="text-logoColorPrimary">Technologies</b> we use
      </p>
      <p className="text-base sm:text-lg mb-5 sm:mb-10 text-center">
        We're constantly pushing boundaries with the latest technologies to
        optimize your workflow, maximize output, and propel your business
        forward.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 xl:gap-8 border-t">
        {/* Technology List */}
        <div className="border-b md:border-b-0 md:border-r px-5 md:px-20 py-10 overflow-y-auto md:overflow-visible max-h-[250px] md:max-h-full">
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
          ].map((item, index) => (
            <div
              key={index}
              className={`mb-2 px-3 py-2 cursor-pointer ${
                active === item
                  ? "bg-logoColorPrimary lg:bg-gradient-to-r lg:from-logoColorPrimary lg:to-white text-white rounded-full"
                  : ""
              }`}
              onClick={() => setActive(item)}
            >
              <p className="text-sm font-bold">{item}</p>
            </div>
          ))}
        </div>

        {/* Technology Logos */}
        <div className="px-5 py-10 col-span-2">
          <p className="text-lg sm:text-2xl font-bold mb-5 text-center md:text-left">
            {active}
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-4 text-xs sm:text-sm font-bold">
            {technologies
              .filter((item) => item.type === active)
              .map((tech, index) => (
                <div
                  key={index}
                  className="px-2 py-1 flex items-center md:justify-center gap-1 border-2 border-gray-700 rounded-full cursor-pointer min-w-[80px]"
                >
                  <Image src={tech.image} alt="tech" className="w-5 sm:w-7" />
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
