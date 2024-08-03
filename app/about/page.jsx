import HowWeDo from "@/components/homepage/HowWeDo";
import Image from "next/image";
import React from "react";
import aboutCompany from "@/assets/images/about/overview.jpg";
import tryImage from "@/assets/images/about/try-1.jpg";

export const metadata = {
  title: "About us",
};

export default function AboutPage() {
  return (
    <div className="mt-20">
      <div
        className="pt-20 px-20 pb-10"
        style={{
          backgroundColor: "#252033",
        }}
      >
        <p className="text-5xl font-extrabold mb-3">
          <span className="text-logoColorPrimary">About Us </span>{" "}
        </p>

        <p className="mb-20 text-lg text-white">
          Your trusted partner in innovative software solutions.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-20 mb-20 mt-20 px-20">
        <div>
          <div className="flex items-center gap-3 mb-3"></div>
          <p className="font-extrabold text-gray-700 text-4xl mb-5">
            <b className="text-logoColorPrimary">Our Legacy, </b>
            Built on a Solid Foundation{" "}
          </p>
          <p className="text-gray-700 mb-3">
            Where innovation meets impact. For more than <b>5+</b> years, we've
            built a legacy of over <b>20+</b> exceptional software projects,
            each driven by a passion for innovation, collaboration, and
            empowering businesses to reach their full potential.
            <p className="mt-3">
              <span className="text-logoColorPrimary font-bold">
                NextLine Solutions
              </span>{" "}
              is a collective of brilliant minds, a vibrant tapestry of diverse
              talent united by a passion for innovation. We've catalyzed change
              across industries, crafting transformative software solutions that
              empower businesses to thrive in the digital age. Our insatiable
              curiosity fuels us to explore the forefront of technology, pushing
              boundaries to anticipate what's next. But above all, our
              unwavering commitment to excellence ensures extraordinary outcomes
              and leaves our clients delighted.
            </p>
          </p>
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src={aboutCompany}
            alt="about"
            className="rounded-xl shadow-lg hover:shadow-xl hover:shadow-black/25 shadow-black/25 w-10/12"
          />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#252033",
        }}
        className="p-20"
      >
        <div className="grid grid-cols-4 gap-10">
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
      </div>

      <HowWeDo />

      <div className="mb-20">
        <div className="grid grid-cols-2">
          <Image src={tryImage} />
          <div
            style={{
              backgroundColor: "#252033",
            }}
            className="p-10 flex flex-col justify-center"
          >
            <p className="text-4xl text-white font-extrabold mb-5">
              Let's Build Your{" "}
              <span className="text-logoColorPrimary">Vision</span> Together,{" "}
              <br />
            </p>
            <div>
              <button className="text-sm rounded-full font-bold px-5 py-3 text-white bg-logoColorPrimary before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-slate-600 before:opacity-10 before:duration-700 hover:shadow-slate-800 hover:before:-translate-x-52">
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center font-extrabold text-4xl mb-3">
        We embrace a <span className="text-logoColorPrimary">borderless</span>{" "}
        workplace.
      </p>
      <p className="text-center text-lg mb-20">
        Talent transcends borders, and our expertise navigates them. We're your{" "}
        <br /> trusted partners in unlocking global success.
      </p>
    </div>
  );
}
