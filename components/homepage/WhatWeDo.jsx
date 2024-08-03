import { services } from "@/assets/data/services";
import Image from "next/image";
import React from "react";
import servicebg from "@/assets/images/service-bg-1.png";
const WhatWeDo = () => {
  return (
    <div
      style={{
        backgroundColor: "#252033",
      }}
    >
      <div className="p-20 relative">
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
        <p className="text-4xl font-extrabold text-center text-white">
          Our <b className="text-logoColorPrimary"> Services</b>
        </p>
        <p className="text-lg mb-20 mt-3 text-white text-center">
          Unleash your potential. Let's explore how we can help you succeed.
        </p>
        <div className="grid grid-cols-2 gap-10">
          {services.map((item) => (
            <div
              key={item.id}
              className="flex gap-5 border-2 shadow-md px-5 py-10 relative bg-slate-100 hover:bg-slate-50 transition-all duration-500"
            >
              <div className="w-3/5">
                <p className="text-lg font-bold mb-5">{item.name}</p>
                <p className="text-sm mb-5 text-gray-600">{item.description}</p>
              </div>
              <div className="w-2/5">
                <Image src={item.image} className="w-56" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
