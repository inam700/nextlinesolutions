import { portfolio } from "@/assets/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Portfolio = () => {
  return (
    <div className="p-5 md:p-20 relative">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-5 md:mb-20">
        <div className="mb-5 md:mb-0">
          <p className="text-2xl md:text-4xl font-extrabold">
            Featured <b className="text-logoColorPrimary">Projects</b>
          </p>
          <p className="text-sm md:text-lg mt-3">
            We build success through client-focused solutions, innovation, and
            results.
          </p>
        </div>
        <div>
          <div className="flex items-center px-5 py-2 bg-logoColorPrimary text-white rounded-full cursor-pointer">
            <Link href={"/portfolio"} className="me-3 text-xs md:text-sm">
              View All
            </Link>{" "}
            <Link href={"/portfolio"}>
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
        {portfolio
          .filter((item) => item.featured)
          .map((item, index) => (
            <div
              key={index}
              className={`relative shadow-md p-5 md:p-10 flex flex-col lg:justify-between
            ${
              index === 0
                ? "hover:bg-gradient-to-r hover:from-indigo-100 hover:to-white-50 transition-all hover:shadow-xl hover:scale-105"
                : index === 1
                ? "hover:bg-gradient-to-r hover:from-green-100 hover:to-white-50 transition-all hover:shadow-xl hover:scale-105"
                : index === 2
                ? "hover:bg-gradient-to-r hover:from-blue-100 hover:to-white-50 transition-all hover:shadow-xl hover:scale-105"
                : index === 3
                ? "hover:bg-gradient-to-r hover:from-yellow-100 hover:to-white-50 transition-all hover:shadow-xl hover:scale-105"
                : index === 4
                ? "hover:bg-gradient-to-r hover:from-stone-100 hover:to-white-50 transition-all hover:shadow-xl hover:scale-105"
                : index === 5 &&
                  "hover:bg-gradient-to-r hover:from-red-100 hover:to-white-50 transition-all hover:shadow-xl hover:scale-105"
            }`}
            >
              <div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-5 mb-5 md:mb-20">
                  <Image
                    src={item.icon}
                    alt="portfolio"
                    className={`relative w-16 md:w-20`}
                  />
                  <div>
                    <p className="font-bold text-base md:text-lg mb-1">
                      {item.name}
                    </p>
                    <p className="font-semibold text-xs md:text-sm">
                      {item.platform}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-5 md:mb-10">
                <Image
                  src={item.image}
                  alt="portfolio"
                  className={`mb-8 md:mb-16 ${
                    index === 2
                      ? "w-52 md:w-60"
                      : index === 4 || index === 3
                      ? "w-48 md:w-56"
                      : "w-64 md:w-80"
                  }`}
                />
                <Link
                  href={"/portfolio"}
                  className="absolute bottom-0 right-0 m-5 md:me-10 cursor-pointer p-3 rounded-full hover:bg-logoColorPrimary hover:text-white transition-all delay-75"
                >
                  <FaArrowRightLong className="" size={15} />
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Portfolio;
