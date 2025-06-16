import React, { Fragment } from "react";
import { coreValues } from "../../../assets/data/about";
import Link from "next/link";
const AboutUs = () => {
  return (
    <section id="about">
      <div className="px-5 xl:px-20 md:pt-20 relative bg-porcelain">
        <p className="font-extrabold text-darkPurple text-2xl md:text-3xl lg:text-5xl mb-10">
          Empowering the Future Through{" "}
          <b className="text-mainColor">Technology</b>
        </p>
        <p className="text-darkPurple text-lg mb-5">
          At{" "}
          <span className="text-mainColor font-extrabold">
            NextLine Solutions
          </span>
          , our mission is to empower businesses through technology. We partner
          with our clients to create exceptional software solutions while
          fostering a culture of innovation, collaboration, and continuous
          improvement.
        </p>
        <div className="mb-10">
          {coreValues.map((item, index) => (
            <p key={index} className="text-darkPurple text-lg mb-3">
              <span className="font-bold text-mainColor">{item.title}: </span>
              {item.text}
            </p>
          ))}
        </div>
        {/* <Link
          href={"/about"}
          className="min-w-40 text-center font-semibold px-10 py-3 text-porcelain bg-mainColor hover:bg-mainColor1 transition-all duration-500 ease-in-out"
        >
          Learn More
        </Link> */}
      </div>
      {/* <div className="bg-darkPurple1 p-5 lg:p-20 mt-20">
        <div className="grid lg:grid-cols-4 lg:gap-10">
          {[
            { number: "5+", text: "Years of Experience" },
            { number: "20+", text: "Clients" },
            { number: "30+", text: "Projects" },
            { number: "10+", text: "Industries Served" },
          ].map((item, index) => (
            <div key={index} className={`px-10 py-5 text-white rounded-lg`}>
              <p className="text-xl font-extrabold text-center">
                <span className="text-4xl text-logoColorPrimary">
                  {item.number}
                </span>{" "}
                <br /> {item.text}
              </p>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default AboutUs;
