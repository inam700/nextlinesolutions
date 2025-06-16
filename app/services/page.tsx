import { servicesForPage } from "../../assets/data/services";
import Consultation from "../components/homepage/Consultation";
import Contact from "../components/homepage/Contact";
import Image from "next/image";
import React from "react";

const ServicesPage = () => {
  return (
    <>
      <div className="mt-20">
        <div
          className="pt-20 px-5 lg:px-20 pb-10"
          style={{
            backgroundColor: "#252033",
          }}
        >
          <p className="text-5xl font-extrabold mb-3">
            <span className="text-logoColorPrimary">Our Services </span>{" "}
          </p>

          <p className="mb-20 text-lg text-white">
            Your trusted partner in innovative software solutions.
          </p>
        </div>
        <div className="lg:px-20 mt-20">
          <p className="text-5xl font-extrabold mb-3 text-center">
            Experience <span className="text-logoColorPrimary">Results </span>{" "}
            That Matter{" "}
          </p>

          <p className="mb-20 text-lg text-center">
            Let's explore how we can help you
          </p>

          <div className="grid lg:grid-cols-3 lg:gap-10 justify-center lg:mb-10">
            {servicesForPage.map((service, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#252033",
                }}
                className="border border-black text-white lg:rounded-3xl hover:scale-105 transition-all delay-75 hover:rounded-3xl shadow-md hover:shadow-black hover:shadow-2xl relative mb-2 lg:mb-10"
              >
                <div className="p-10">
                  <p className="text-logoColorPrimary text-xl font-bold mb-10">
                    0{index + 1}
                  </p>
                  <p className="text-2xl font-bold mb-7">{service.name}</p>
                  <p className="mb-10">{service.description}</p>
                </div>
                <hr />
                <div className="flex px-10 py-7 gap-3 flex-wrap ">
                  {service.techs.map((tech, index) => (
                    <p
                      key={index}
                      className="text-sm relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-logoColorPrimary after:w-full after:scale-x-0 after:hover:scale-x-110 after:transition after:duration-300 after:origin-center cursor-pointer"
                    >
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Consultation />
      <Contact />
    </>
  );
};

export default ServicesPage;
