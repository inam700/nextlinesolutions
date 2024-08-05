"use client";
import { services } from "@/assets/data/services";
import Image from "next/image";
import React from "react";
import servicebg from "@/assets/images/service-bg-1.png";
import Link from "next/link";
import Slider from "react-slick";
import { projectSliderSettings } from "@/Utils/Utils";
const WhatWeDo = () => {
  return (
    <div
      style={{
        backgroundColor: "#252033",
      }}
    >
      <div className="p-5 lg:p-20 relative">
        <p className="text-4xl font-extrabold text-center text-white">
          Our <b className="text-logoColorPrimary"> Services</b>
        </p>
        <p className="text-lg mb-20 mt-3 text-white text-center">
          Unleash your potential. Let's explore how we can help you succeed.
        </p>

        <div className="hidden md:block">
          <Image
            src={servicebg}
            alt="service-bg"
            className="absolute top-0 left-0 overflow-hidden"
          />
          <Image
            src={servicebg}
            alt="service-bg"
            className="absolute bottom-0 right-0 overflow-hidden rotate-180"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
            {services.map((item) => (
              <Link
                href={"/services"}
                key={item.id}
                className="flex flex-col lg:flex-row gap-5 border-2 shadow-md px-5 py-10 relative bg-slate-100 hover:bg-slate-50 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              >
                <div className="lg:w-3/5">
                  <p className="text-lg font-bold mb-5">{item.name}</p>
                  <p className="text-sm mb-5 text-gray-600">
                    {item.description}
                  </p>
                </div>
                <div className="lg:w-2/5">
                  <Image src={item.image} className="w-56" />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Slider {...projectSliderSettings} className="md:hidden">
          {services.map((item) => (
            <div className="px-2">
              <Link
                href={"/services"}
                key={item.id}
                className="flex flex-col lg:flex-row gap-5 border-2 shadow-md px-5 py-10 relative bg-slate-100 hover:bg-slate-50 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              >
                <div className="lg:w-3/5">
                  <p className="text-lg font-bold mb-5">{item.name}</p>
                  <p className="text-sm mb-5 text-gray-600">
                    {item.description}
                  </p>
                </div>
                <div className="lg:w-2/5">
                  <Image src={item.image} className="w-56" />
                </div>
              </Link>
            </div>
          ))}
        </Slider>
        <div className="mt-10 flex justify-center">
          <Link
            href={"/services"}
            type="button"
            className="rounded-full text-center text-sm font-bold px-10 py-3 bg-logoColorPrimary text-white 
                        hover:shadow-slate-800 transition-shadow duration-300 ease-in-out"
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
