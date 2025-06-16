"use client";
import { industries } from "../../../assets/data/industries";
import Image from "next/image";
import React from "react";
import servicebg from "@/assets/images/service-bg-1.png";
import Slider from "react-slick";
import { projectSliderSettings } from "../../../Utils/Utils";

const Industries = () => {
  return (
    <div style={{ backgroundColor: "#252033" }}>
      <div className="p-5 md:p-20 relative">
        {/* Background Image */}
        {/* <Image
          src={servicebg}
          alt="service-bg"
          className="absolute bottom-0 left-0 w-full -rotate-90"
        /> */}

        {/* Main Content */}
        <div className="max-w-screen-lg mx-auto">
          <p className="text-2xl md:text-4xl font-extrabold text-center text-white mb-3">
            Industries we have
            <b className="text-logoColorPrimary"> Revolutionized</b>
          </p>
          <p className="text-sm md:text-lg mb-5 md:mb-20 text-white text-center">
            Driving innovation across industries. We create solutions that adapt
            to your specific needs.
          </p>

          {/* Industry Grid */}
          <div className="hidden md:flex flex-wrap justify-center items-center gap-5 md:gap-10">
            {industries.map((item, index) => (
              <div
                key={index}
                className="shadow-lg rounded-md bg-logoColorPrimary relative w-full sm:w-[48%] md:w-[32%] lg:w-56"
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="w-full h-40 sm:h-56 rounded-md object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-0 w-full h-full rounded-md bg-black/50 opacity-75 hover:lg:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-col justify-end h-full p-5">
                    <div className="rounded-full bg-white/75 mb-3 h-12 w-12 flex items-center justify-center">
                      <Image
                        src={item.icon}
                        alt="industry"
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <p className="font-bold text-white text-base md:text-lg">
                      {item.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Slider {...projectSliderSettings} className="md:hidden mb-10">
            {industries.map((item, index) => (
              <div className="px-2">
                <div
                  key={index}
                  className="shadow-lg rounded-md bg-logoColorPrimary relative w-full sm:w-[48%] md:w-[32%] lg:w-56"
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="w-full h-40 sm:h-56 rounded-md object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-0 w-full h-full rounded-md bg-black/50 opacity-75 hover:lg:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-col justify-end h-full p-5">
                      <div className="rounded-full bg-white/75 mb-3 h-12 w-12 flex items-center justify-center">
                        <Image
                          src={item.icon}
                          alt="industry"
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <p className="font-bold text-white text-base md:text-lg">
                        {item.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Industries;
