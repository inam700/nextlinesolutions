import Image from "next/image";
import React from "react";
import brand from "@/assets/icons/brand.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import { linkHover } from "@/Utils/Utils";
import NavLink from "./NavLink";

const Footer = () => {
  return (
    <div>
      <div className="bg-gray-900 text-white p-20">
        <div className="flex justify-between items-center mb-20">
          <div className="">
            <p className="text-4xl font-semibold mb-1">Ready to Elevate your</p>
            <p className="text-6xl font-bold">Business?</p>
          </div>
          <div>
            {/* <p className="text-lg font-bold mb-3">Let's Connect</p> */}
            <div className="flex gap-3 items-center">
              <div>
                <Image src={brand} alt="brand" className={"w-14"} />
              </div>
              <div>
                <p className="text-2xl font-bold tracking-widest">NEXTLINE</p>
                <p className="text-2xl font-bold">SOLUTIONS</p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="flex items-end justify-between">
          <button className="px-5 py-3 rounded hover:before:bg-red border-white relative overflow-hidden border text-white transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-gray-900 hover:shadow-white hover:before:left-0 hover:before:w-full">
            <span class="relative z-10">Contact us Now</span>
          </button>
          <div className="flex items-end gap-20">
            <div className="flex gap-10">
              {["Services", "Portfolio", "About Us", "Contact Us"].map(
                (item, index) => (
                  <NavLink type="footer" text={item} key={index} link={"/"} />
                )
              )}
            </div>

            <div>
              <p className="text-lg font-bold">Email us:</p>
              <a href="mailto:info@nextlinesolutions.com" className="text-sm">
                info@nextlinesolutions.com
              </a>
              <div className="flex mt-3 gap-3">
                <FaLinkedin
                  className="hover:text-slate-400 cursor-pointer"
                  size={20}
                />
                <FaFacebook
                  className="hover:text-slate-400 cursor-pointer"
                  size={20}
                />
                <FaInstagram
                  className="hover:text-slate-400 cursor-pointer"
                  size={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4">
        <p className="text-xs text-center">
          {new Date().getFullYear()} © NextLine Solutions , All Rights Reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
