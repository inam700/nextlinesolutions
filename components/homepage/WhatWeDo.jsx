import { services } from "@/assets/data/data";
import Image from "next/image";
import React from "react";

const WhatWeDo = () => {
  return (
    <div className="p-20 bg-slate-200">
      <p className="text-6xl font-bold mb-20">Our Services</p>
      <div className="grid grid-cols-2 gap-10">
        {services.map((item) => (
          <div
            key={item.id}
            className="border-2 rounded shadow-md px-5 pt-5 pb-5 relative bg-slate-100 hover:bg-white transition-all duration-500"
            // hover:scale-105
          >
            <div className="flex gap-5 items-center mb-7">
              <div>
                <Image src={item.icon} alt={"service"} className="w-10" />
              </div>
              <p className="text-xl font-bold">{item.name}</p>
            </div>
            <p className="text-lg font-thin mb-16">{item.description}</p>

            <button
              type="button"
              className="text-xs rounded font-semibold absolute bottom-0 mb-5 bg-purple-100 px-4 py-2"
            >
              Learn more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;