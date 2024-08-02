import Image from "next/image";
import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { FaEnvelope, FaFacebook, FaLinkedin, FaSkype } from "react-icons/fa6";

import servicebg from "@/assets/images/service-bg-1.png";
import aboutbg from "@/assets/images/about-bg-1.png";

const Contact = () => {
  return (
    <div className="p-20 relative">
      <div>
        {/* <Image
          src={aboutbg}
          alt="about-bg"
          className="absolute right-0 bottom-0 rotate-90"
        /> */}
        <div className="border shadow-md hover:shadow-lg grid grid-cols-2 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <div
            className="group relative p-10 text-white"
            style={{
              backgroundColor: "#252033",
            }}
          >
            <Image
              src={servicebg}
              alt="service-bg"
              className="absolute bottom-0 right-0 overflow-hidden rotate-180 opacity-50"
            />
            <p className="text-4xl font-extrabold mb-5">
              How can we elevate your{" "}
              <b className="text-logoColorPrimary">success?</b>
            </p>
            <p className="text-lg mb-5">
              We believe in the power of dialogue to ignite innovation and drive
              success. Share your contact information, and one of our expert
              business analysts will reach out to discuss how we can transform
              your ambitions into reality.
            </p>
            <p className="text-lg mb-8">
              Let's connect and create something extraordinary together.
            </p>

            <div className="flex items-center gap-5 mb-5">
              <FaEnvelope size={25} className="text-logoColorPrimary" />
              <p className="text-lg">contact@nextlinesolutions.com</p>
            </div>

            <div className="flex items-center gap-5 mb-5">
              <FaMobileAlt size={25} className="text-logoColorPrimary" />
              <p className="text-lg">+92 (334) 0041777</p>
            </div>
            <div className="flex gap-5 mt-20">
              <FaLinkedin
                size={25}
                className="hover:text-logoColorPrimary transition-all"
              />
              <FaFacebook
                size={25}
                className="hover:text-logoColorPrimary transition-all"
              />
              <FaSkype
                size={25}
                className="hover:text-logoColorPrimary transition-all"
              />
            </div>
          </div>
          <div className="group relative md:col-span-2 p-10 bg-white">
            <div className="grid grid-cols-2 gap-10 mb-5">
              <div className="group relative flex flex-col gap-2 w-full">
                <label className="font-semibold text-sm">Full Name</label>
                <input type="text" className="border px-5 py-2 outline-none" />
              </div>
              <div className="group relative flex flex-col gap-2 w-full">
                <label className="font-semibold text-sm">Organization</label>
                <input type="text" className="border px-5 py-2 outline-none" />
              </div>
              <div className="group relative flex flex-col gap-2 w-full">
                <label className="font-semibold text-sm">Phone Number</label>
                <input type="tel" className="border px-5 py-2 outline-none" />
              </div>
              <div className="group relative flex flex-col gap-2 w-full">
                <label className="font-semibold text-sm">Email</label>
                <input type="email" className="border px-5 py-2 outline-none" />
              </div>
              <div className="group relative flex flex-col gap-2 w-full md:col-span-2">
                <label className="font-semibold text-sm">
                  Area of Interest
                </label>
                <select className="border px-5 py-2 outline-none">
                  <option>Select</option>
                </select>
              </div>
              <div className="group relative flex flex-col gap-2 w-full md:col-span-2">
                <label className="font-semibold text-sm">Email</label>
                <textarea rows={7} className="border px-5 py-2 outline-none" />
              </div>
            </div>
            <div className="flex justify-end">
              <button className="text-sm rounded-full font-bold px-16 py-3 text-white bg-logoColorPrimary before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-slate-600 before:opacity-10 before:duration-700 hover:shadow-slate-800 hover:before:-translate-x-52">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
