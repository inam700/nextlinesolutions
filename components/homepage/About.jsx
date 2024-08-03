import Image from "next/image";
import React from "react";
import aboutCompany from "@/assets/images/about-company.png";
import aboutbg from "@/assets/images/about-bg-1.png";
import { FaDotCircle, FaPlus } from "react-icons/fa";
import { coreValues } from "@/assets/data/about";
const AboutUs = () => {
  return (
    <div className="px-20 py-32 relative">
      <Image
        src={aboutbg}
        alt="about-bg"
        className="absolute left-0 top-0 -rotate-90"
      />
      <div className="grid grid-cols-2 gap-20 ">
        <div className="relative flex items-center justify-center">
          <Image src={aboutCompany} alt="about" className="w-96" />
          <div className="absolute right-0 top-0 me-20 flex items-center gap-2 px-8 py-2 bg-logoColorPrimary text-white rounded-full before:ease overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-slate-600 before:opacity-10 before:duration-700 hover:shadow-slate-800 hover:before:-translate-x-40">
            <p className="text-xl font-bold flex items-center">
              5<FaPlus size={10} className="mt-1" />
            </p>
            <p className="text-xs">
              Years of <br /> Excellence
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-3"></div>
          <p className="font-extrabold text-gray-700 text-4xl mb-5">
            The Cornerstone of Our{" "}
            <b className="text-logoColorPrimary">Legacy</b>
          </p>
          <p className="text-gray-700 mb-3">
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
            <p key={index} className="text-gray-700 mb-2">
              <b className="font-bold text-gray-600">{item.title}: </b>
              {item.text}
            </p>
          ))}
          <button
            type="button"
            className="outline-none rounded-full text-sm font-bold px-10 py-3 mt-5 bg-logoColorPrimary text-white before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-slate-600 before:opacity-10 before:duration-700 hover:shadow-slate-800 hover:before:-translate-x-40"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
