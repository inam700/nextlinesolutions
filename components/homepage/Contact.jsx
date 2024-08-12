"use client";
import Image from "next/image";
import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSkype,
  FaWhatsapp,
} from "react-icons/fa6";
import { useForm, ValidationError } from "@formspree/react";

import servicebg from "@/assets/images/service-bg-1.png";
import { toast } from "react-toastify";
import Link from "next/link";

// re_ey8UKVde_ELQD9uZoTJVNT5jQ2Jvo4hPF ----- resend

// K6UQU6UW457WSCLQULASCQVY ----- mailgrid

const Contact = () => {
  const [state, handleSubmit] = useForm("mzzpryez");

  const handleSubmitForm = async () => {
    await handleSubmit();
    if (state.succeeded) {
      toast.success("Request Submitted. Thank You!");
    }
  };
  return (
    <div className="lg:p-20 relative">
      <div>
        <div className="border shadow-md hover:shadow-lg grid grid-cols-1 lg:grid-cols-3 md:gap-6 xl:gap-8">
          <div
            className="group relative p-10 text-white"
            style={{
              backgroundColor: "#252033",
            }}
          >
            <Image
              src={servicebg}
              alt="service-bg"
              className="absolute top-0 right-0 overflow-hidden opacity-25"
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
              <p className="text-lg">+92 (312) 9609459</p>
            </div>
            <div className="flex gap-5 mt-20">
              <Link
                href={
                  "https://www.linkedin.com/company/104358802/admin/dashboard/"
                }
                target="_blank"
              >
                <FaLinkedin
                  size={25}
                  className="cursor-pointer hover:text-logoColorPrimary transition-all"
                />
              </Link>
              <Link
                href={"https://www.instagram.com/nextline.solutions/"}
                target="_blank"
              >
                <FaInstagram
                  size={25}
                  className="cursor-pointer hover:text-logoColorPrimary transition-all"
                />
              </Link>
              <Link href={"https://wa.me/923129609459"} target="_blank">
                <FaWhatsapp
                  size={25}
                  className="cursor-pointer hover:text-logoColorPrimary transition-all"
                />
              </Link>
            </div>
          </div>
          <div className="group relative md:col-span-2 p-10 bg-white">
            <form className="w-full">
              <div className="grid lg:grid-cols-2 gap-10 mb-5">
                <div className="group relative flex flex-col gap-2 w-full">
                  <label className="font-semibold text-sm">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="border px-5 py-2 outline-none"
                  />
                </div>
                <div className="group relative flex flex-col gap-2 w-full">
                  <label className="font-semibold text-sm">Organization</label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    className="border px-5 py-2 outline-none"
                  />
                </div>
                <div className="group relative flex flex-col gap-2 w-full">
                  <label className="font-semibold text-sm">Phone Number</label>
                  <input type="tel" className="border px-5 py-2 outline-none" />
                </div>
                <div className="group relative flex flex-col gap-2 w-full">
                  <label
                    id="phone"
                    name="phone"
                    className="font-semibold text-sm"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="border px-5 py-2 outline-none"
                  />
                </div>
                <div className="group relative flex flex-col gap-2 w-full md:col-span-2">
                  <label className="font-semibold text-sm">
                    Area of Interest
                  </label>
                  <select
                    name="area"
                    id="area"
                    className="border px-5 py-2 outline-none"
                  >
                    <option selected disabled>
                      Select
                    </option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile Development</option>
                    <option value="uiux">UI/UX</option>
                    <option value="ai">Artificial Intelligence</option>
                    <option value="data">Data Science</option>
                    <option value="cms">E-Commerce</option>
                    <option value="blockchain">Blockchain</option>
                  </select>
                </div>
                <div className="group relative flex flex-col gap-2 w-full md:col-span-2">
                  <label className="font-semibold text-sm">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    className="border px-5 py-2 outline-none"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => handleSubmitForm}
                  className="text-sm rounded-full font-bold px-16 py-3 text-white bg-logoColorPrimary before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-slate-600 before:opacity-10 before:duration-700 hover:shadow-slate-800 hover:before:-translate-x-52"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
