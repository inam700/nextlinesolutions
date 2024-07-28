"use client";
import { portfolio } from "@/assets/data/data";
import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <div className="p-20">
      <p className="text-6xl font-bold mb-20">Recent Work</p>
      {portfolio.map((item) => (
        <div className={`grid grid-cols-2`} key={item.id}>
          <div
            className={`${
              item.id === 1
                ? "bg-gradient-to-r from-green-100 to-white-50"
                : item.id === 2
                ? "bg-gradient-to-l from-teal-100 to-white-50"
                : "bg-gradient-to-r from-red-100 to-white-50"
            } h-full w-full relative ${item.id % 2 === 0 && "order-last"}`}
          >
            {/* <Image
              src={item.bgImage}
              className="absolute h-full w-full bg-cover bg-no-repeat opacity-30"
            /> */}
            <Image src={item.image} alt="portfolio" className="relative" />
          </div>
          <div className="p-10">
            <Image
              src={item.icon}
              alt="portfolio"
              className={`my-3 ${item.width}`}
            />
            <p className="font-light mb-5">{item.description}</p>

            <p className="text-xl font-bold mb-1">Key features</p>
            <ul className="font-light mb-5 list-disc px-5">
              {item.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              {item.tags.map((tag, tagIndex) => (
                <div
                  className="border rounded-lg shadow hover:shadow-md px-5 py-4"
                  key={tagIndex}
                >
                  <Image src={tag.image} alt="tech" className="w-14 mb-3" />
                  <p className="text-xs font-bold">{tag.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
