import Image from "next/image";
import React from "react";
import aboutCompany from "@/assets/images/about-company.png";
import aboutbg from "@/assets/images/about-bg-1.png";
import { FaDotCircle, FaPlus } from "react-icons/fa";
import { coreValues } from "@/assets/data/about";
const AboutUs = () => {
  return (
    <div className="px-5 md:px-20 py-16 md:py-32 relative">
      <Image
        src={aboutbg}
        alt="about-bg"
        className="absolute opacity-50 left-0 top-0 -rotate-90 object-cover md:object-contain lg:object-cover"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        <div className="relative hidden sm:flex items-center justify-center order-2 md:order-1">
          <Image
            src={aboutCompany}
            alt="about"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md"
          />

          <div className="absolute right-0 top-0 md:me-20 flex items-center gap-2 px-4 py-2 md:px-8 md:py-2 bg-logoColorPrimary text-white rounded-full hover:shadow-slate-800 transition-shadow duration-300 ease-in-out">
            <p className="text-base md:text-xl font-bold flex items-center">
              5<FaPlus size={10} className="mt-1" />
            </p>
            <p className="text-xs md:text-sm hidden md:block">
              Years of <br /> Excellence
            </p>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="flex items-center gap-3 mb-3"></div>
          <p className="font-extrabold text-gray-700 text-2xl md:text-4xl mb-5">
            The Cornerstone of Our{" "}
            <b className="text-logoColorPrimary">Legacy</b>
          </p>
          <p className="text-gray-700 text-sm md:text-base mb-3">
            At{" "}
            <b className="text-logoColorPrimary font-extrabold">
              NextLine Solutions
            </b>
            , our mission is to empower businesses through technology. We
            partner with our clients to create exceptional software solutions
            while fostering a culture of innovation, collaboration, and
            continuous improvement.
          </p>

          {coreValues.map((item, index) => (
            <p key={index} className="text-gray-700 text-sm md:text-base mb-2">
              <b className="font-bold text-gray-600">{item.title}: </b>
              {item.text}
            </p>
          ))}

          <button
            type="button"
            className="rounded-full text-sm font-bold px-10 py-3 mt-5 bg-logoColorPrimary text-white hover:shadow-slate-800 transition-shadow duration-300 ease-in-out"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
