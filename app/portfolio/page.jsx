"use client";
import { filters, portfolio } from "@/assets/data/portfolio";
import Consultation from "@/components/homepage/Consultation";
import PortfolioGradient from "@/components/PortfolioGradient";
import React, { useState } from "react";

const PortfolioPage = () => {
  const [active, setActive] = useState("All");

  return (
    <>
      <div className="mt-20">
        <div
          className="pt-20 px-20 pb-10"
          style={{
            backgroundColor: "#252033",
          }}
        >
          <p className="text-5xl font-extrabold mb-3">
            <span className="text-logoColorPrimary">Our Portfolio </span>{" "}
          </p>

          <p className="mb-20 text-lg text-white">
            Your trusted partner in innovative software solutions.
          </p>
        </div>
        <div className="px-20 mt-20">
          <p className="text-5xl font-extrabold mb-3 text-center">
            Our Best <span className="text-logoColorPrimary">Work</span>{" "}
          </p>

          <p className="mb-20 text-lg text-center">
            Where Innovation Meets Execution
          </p>
          <div className="">
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {filters.map((item, index) => (
                <div
                  key={index}
                  className={`border rounded-md px-5 py-1 text-sm cursor-pointer ${
                    item === active && "bg-logoColorPrimary text-white"
                  }`}
                  onClick={() => setActive(item)}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="bg-white md:grid md:grid-cols-2 gap-10 mb-20 text-white">
              {portfolio
                .filter((item) => {
                  return active === "All" || item.filterTags.includes(active);
                })
                .map((item) => (
                  <PortfolioGradient item={item} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
