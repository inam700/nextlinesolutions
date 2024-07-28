import Image from "next/image";
import React from "react";
import { FaMapMarker, FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="m-20">
      <div className="border shadow-md hover:shadow-lg grid grid-cols-2 sm:grid-cols-3 md:gap-6 xl:gap-8">
        <div className="group relative bg-gray-800 p-10 text-white">
          <p className="text-lg font-bold mb-5">
            How can we elevate your success?
          </p>
          <p className="font-thin mb-3">
            We believe in the power of dialogue to ignite innovation and drive
            success. Share your contact information, and one of our expert
            business analysts will reach out to discuss how we can transform
            your ambitions into reality.
          </p>
          <p className="font-thin mb-8">
            Let's connect and create something extraordinary together.
          </p>

          <div className="flex items-center gap-5 mb-3 font-thin">
            <FaEnvelope size={25} />
            <p>contact@nextlinesolutions.com</p>
          </div>

          <div className="flex items-center gap-5 mb-3 font-thin">
            <FaMapMarkerAlt size={25} />
            <p>Lahore</p>
          </div>
        </div>
        <div className="group relative md:col-span-2 p-10">
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
              <label className="font-semibold text-sm">Area of Interest</label>
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
            <button className="border bg-slate-700 px-10 py-3 text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
