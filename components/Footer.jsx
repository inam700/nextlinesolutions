import Image from "next/image";
import React from "react";
import brand from "@/assets/icons/brand-new.png";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSkype,
  FaWhatsapp,
} from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { footerLinks } from "@/assets/data/footer";
import servicebg from "@/assets/images/service-bg-1.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div
        className="text-white p-5 lg:p-20 relative"
        style={{
          backgroundColor: "#252033",
        }}
      >
        <Image
          src={servicebg}
          alt="service-bg"
          className="absolute bottom-0 left-0 overflow-hidden -rotate-90 opacity-50 z-10"
        />
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="z-20">
            <Link href={"/"} className="flex gap-3 items-center mb-10 ">
              <Image src={brand} alt="brand" className={"w-32"} />
            </Link>
            <p className="mb-5">
              We're the dream team for digital innovation, <br /> building
              amazing solutions that elevate your business.
            </p>
            <div className="flex items-center gap-5 mb-2">
              <FaEnvelope size={25} className="text-logoColorPrimary" />
              <p className="text-sm">contact@nextlinesolutions.com</p>
            </div>

            <div className="flex items-center gap-5 mb-2">
              <FaMobileAlt size={25} className="text-logoColorPrimary" />
              <p className="text-sm">+92 (370) 6036749</p>
            </div>
          </div>
          {footerLinks.map((item, index) =>
            item.title !== "Our Technologies" ? (
              <div className="flex flex-col" key={index}>
                <p className="text-logoColorPrimary font-bold text-xl mb-5">
                  {item.title}
                </p>
                {item.links.map((link, subIndex) => (
                  <Link
                    key={subIndex}
                    href={link.href}
                    className="font-thin mb-3 hover:text-logoColorPrimary transition-all"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            ) : (
              <div>
                <p className="text-logoColorPrimary font-bold text-xl mb-5">
                  {item.title}
                </p>
                <div className="flex flex-wrap gap-10">
                  {item.links.map((link, subIndex) => (
                    <div className="flex flex-col" key={subIndex}>
                      <p className="font-bold mb-3">{link.title}</p>
                      {link.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          href={link.href}
                          className="font-thin mb-3 hover:text-logoColorPrimary transition-all"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="px-5 lg:px-20 py-4 flex items-center flex-col lg:flex-row justify-between">
        <p className="text-xs font-bold">
          {" "}
          Copyrights ©{" "}
          <span className="uppercase ms-1">
            NextLine Solutions Private Limited{" "}
          </span>{" "}
          , All Rights Reserved
        </p>{" "}
        <div className="flex items-center justify-center lg:justify-start gap-5">
          <Link
            href={"https://www.linkedin.com/company/104358802/admin/dashboard/"}
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
    </div>
  );
};

export default Footer;
