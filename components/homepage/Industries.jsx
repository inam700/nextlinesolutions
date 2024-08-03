import { industries } from "@/assets/data/industries";
import Image from "next/image";
import React from "react";
import servicebg from "@/assets/images/service-bg-1.png";

const Industries = () => {
  return (
    <div
      style={{
        backgroundColor: "#252033",
      }}
    >
      {" "}
      <div className="p-20 relative">
        {" "}
        <Image
          src={servicebg}
          alt="service-bg"
          className="absolute bottom-0 left-0 overflow-hidden -rotate-90"
        />
        <p className="text-4xl font-extrabold text-center text-white">
          Industries we have
          <b className="text-logoColorPrimary"> Revolutionized</b>
        </p>
        <p className="text-lg mb-20 mt-3 text-white text-center">
          Driving innovation across industries. We create solutions that adapt
          to your specific needs.
        </p>
        <div className="flex justify-center flex-wrap gap-5">
          {industries.map((item, index) => (
            <div
              key={index}
              className="shadow-lg rounded-md bg-logoColorPrimary relative"
            >
              <Image
                src={item.image}
                className="w-64 h-56 rounded-md hover:scale-105"
              />
              <div className="absolute top-0 w-full h-full rounded-md bg-black/50">
                <div className="flex flex-col justify-end h-full ps-5 pb-5">
                  <div className="rounded-full bg-white/75  mb-3 h-16 w-16 flex items-center justify-center">
                    <Image src={item.icon} alt="industry" />
                  </div>
                  <p className="font-bold text-white text-lg">{item.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
