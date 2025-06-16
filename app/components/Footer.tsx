import Image from "next/image";
import React from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { footerLinks } from "../../assets/data/footer";
import brandIcon from "../../assets/icons/brand.png";
import Link from "next/link";

// -------------------------
// Type Definitions
// -------------------------
interface FooterLink {
  name: string;
  href: string;
}

interface FooterItem {
  title: string;
  links: FooterLink[] | ExtendedFooterLinkGroup[];
}

interface ExtendedFooterLinkGroup {
  title: string;
  links: FooterLink[];
}

const Footer = () => {
  return (
    <div>
      <div className="text-darkPurple p-5 lg:p-20 relative bg-porcelain1">
        <div className="flex flex-col lg:flex-row gap-10">
          <div>
            <Link href="/">
              <span className="sr-only">NextLine Solutions</span>
              <Image alt="" src={brandIcon} className="h-12 lg:h-16 w-auto" />
            </Link>
            <p className="mb-5 text-lg">
              We're the dream team for digital innovation, <br /> building
              amazing solutions that elevate your business.
            </p>
            <div className="flex items-center gap-5 mb-2">
              <FaEnvelope size={25} className="text-mainColor" />
              <p className="text-sm">contact@nextlinesolutions.com</p>
            </div>
            <div className="flex items-center gap-5 mb-2">
              <FaMobileAlt size={25} className="text-mainColor" />
              <p className="text-sm">+92 (370) 6036749</p>
            </div>
          </div>

          <div className="grid lg:hidden grid-cols-2 gap-5">
            <div className="flex flex-col">
              <p className="text-mainColor font-bold text-xl mb-5">Company</p>
              <Link
                href={"/"}
                className="mb-3 hover:text-mainColor transition-all"
              >
                About us
              </Link>
              <Link
                href={"/"}
                className="mb-3 hover:text-mainColor transition-all"
              >
                Why NextLine
              </Link>
              <Link
                href={"/"}
                className="mb-3 hover:text-mainColor transition-all"
              >
                Contact us
              </Link>
            </div>
            <div className="flex flex-col">
              <p className="text-mainColor font-bold text-xl mb-5">
                Our Services
              </p>
              <Link
                href={"/"}
                className="mb-3 hover:text-mainColor transition-all"
              >
                UI/UX Design
              </Link>
              <Link
                href={"/"}
                className="mb-3 hover:text-mainColor transition-all"
              >
                Web App Development
              </Link>
              <Link
                href={"/"}
                className="mb-3 hover:text-mainColor transition-all"
              >
                Mobile App Development
              </Link>
              <Link
                href={"/"}
                className="mb-3 hover:text-mainColor transition-all"
              >
                Data & AI
              </Link>
              <Link
                href={"/"}
                className="mb-3 hover:text-mainColor transition-all"
              >
                DevOps
              </Link>
              <Link
                href={"/"}
                className="mb-3 hover:text-mainColor transition-all"
              >
                Premium Themes
              </Link>
            </div>
          </div>

          {footerLinks.map((item, index) =>
            item.title !== "Our Technologies" ? (
              <div className="hidden lg:flex flex-col" key={index}>
                <p className="text-mainColor font-bold text-xl mb-5">
                  {item.title}
                </p>
                {(item.links as FooterLink[]).map((link, subIndex) => (
                  <Link
                    key={subIndex}
                    href={link.href}
                    className="mb-3 hover:text-mainColor transition-all"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            ) : (
              <div key={index}>
                <p className="text-mainColor font-bold text-xl mb-5">
                  {item.title}
                </p>
                <div className="flex flex-wrap gap-10">
                  {(item.links as ExtendedFooterLinkGroup[]).map(
                    (group, subIndex) => (
                      <div className="flex flex-col" key={subIndex}>
                        <p className="font-bold mb-3">{group.title}</p>
                        {group.links.map((link, linkIndex) => (
                          <Link
                            key={linkIndex}
                            href={link.href}
                            className="mb-3 hover:text-mainColor transition-all"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    )
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <div className="px-5 lg:px-20 py-4 flex items-center flex-col md:flex-row justify-between">
        <p className="text-xs font-bold">
          {new Date().getFullYear()} ©
          <span className="uppercase ms-1">
            NextLine Solutions Private Limited
          </span>
          , All Rights Reserved
        </p>
        <div className="flex items-center justify-center lg:justify-start gap-5">
          <Link
            href="https://www.linkedin.com/company/104358802/admin/dashboard/"
            target="_blank"
          >
            <FaLinkedin
              size={25}
              className="cursor-pointer hover:text-mainColor transition-all"
            />
          </Link>
          <Link
            href="https://www.instagram.com/nextline.solutions/"
            target="_blank"
          >
            <FaInstagram
              size={25}
              className="cursor-pointer hover:text-mainColor transition-all"
            />
          </Link>
          <Link href="https://wa.me/923706036749" target="_blank">
            <FaWhatsapp
              size={25}
              className="cursor-pointer hover:text-mainColor transition-all"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
