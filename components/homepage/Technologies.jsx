"use client";
import { technologies } from "@/assets/data/data";
import Image from "next/image";
import React, { useState } from "react";

const Technologies = () => {
  const [active, setActive] = useState("Mobile");
  return (
    <div className="p-20">
      <p className="text-6xl font-bold mb-10">Tools & Technologies </p>
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
                className={`mb-5 px-5 py-3 cursor-pointer ${
                  active === item && "bg-gradient-to-r from-purple-300 to-white"
                }`}
                onClick={() => setActive(item)}
              >
                <p className="text-xl font-bold">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="group relative md:col-span-2 px-5 py-10">
          <p className="text-3xl font-bold mb-5">{active}</p>

          <div className="flex gap-4 flex-wrap text-sm font-bold">
            {technologies
              .filter((item) => item.type === active)
              .map((tech, index) => (
                <div
                  key={index}
                  className="px-3 py-2 flex items-center justify-center gap-2 border-2 border-gray-700 rounded cursor-pointer min-w-40"
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
