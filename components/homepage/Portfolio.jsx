"use client";
import { portfolio } from "@/assets/data/data";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Portfolio = () => {
  return (
    <div className="p-20">
      <p className="text-6xl font-bold mb-20">Recent Work</p>
      <div className="grid grid-cols-4 gap-5">
        {portfolio.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer rounded-lg shadow hover:shadow-md h-64 border-2 p-3 relative flex justify-center"
          >
            <div className="mt-16">
              <Image
                src={item.icon}
                alt="portfolio"
                className={`${item.id === 2 && "w-60"}`}
              />
            </div>
            <div className="flex gap-2 absolute bottom-0 left-0 ms-7 mb-5">
              {item.tags?.map((tag) => (
                <p className="text-xs font-semibold border rounded-full px-3 py-1">
                  {tag}
                </p>
              ))}
            </div>
            <BsArrowRight
              size={25}
              className="absolute right-0 bottom-0 me-7 mb-5"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
