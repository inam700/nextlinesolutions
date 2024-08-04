"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import brandIcon from "@/assets/icons/brand-new.png";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  PopoverGroup,
} from "@headlessui/react";
import NavLink from "./NavLink";
import NavDropdown from "./NavDropdown";
import { navbarData } from "@/assets/data/showcase";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // State to track scroll position
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      style={{
        backgroundColor:
          isScrolled || pathname !== "/" ? "#252033" : "transparent",
      }}
      className={`top-0 md:px-20 py-1 z-20 flex items-center ${
        isScrolled ? "shadow-md shadow-black lg:fixed" : "absolute"
      } w-full left-0 text-white transition-shadow`}
    >
      <nav
        aria-label="Global"
        className="flex w-full items-center justify-between py-6 px-6 lg:px-0"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="p-1.5">
            <span className="sr-only">NextLine Solutions</span>
            <div className="flex gap-3">
              <Image
                alt=""
                src={brandIcon}
                className="h-9 mt-1 lg:mt-0 lg:h-12 w-auto"
              />
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          {mobileMenuOpen ? (
            <FaXmark
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
              className="h-6 w-6"
            />
          ) : (
            <FaBars
              aria-hidden="true"
              className="h-6 w-6"
              onClick={() => setMobileMenuOpen(true)}
            />
          )}
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {navbarData.map((data, index) => (
            <NavDropdown
              key={index}
              title={data.title}
              mainLink={data.mainLink}
              menuType={data.menuType}
              links={data.links}
            />
          ))}

          <NavLink type={"navbar"} link="/portfolio" text="Work" />
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="text-sm rounded-full font-bold px-5 py-3 bg-logoColorPrimary before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-slate-600 before:opacity-10 before:duration-700 hover:shadow-slate-800 hover:before:-translate-x-52"
          >
            Schedule a Consultation
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        as="div"
        className="lg:hidden relative z-10 focus:outline-none"
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex h-full items-center justify-center">
            <DialogPanel
              transition
              style={{ backgroundColor: "#252033" }}
              className="w-full h-full mt-28 px-10 text-white"
            >
              <div className="flex flex-col gap-5">
                <NavLink type="navbar" link={"/about"} text="About us" />
                <NavLink type="navbar" link={"/services"} text="Services" />
                <NavLink type="navbar" link={"/portfolio"} text="Work" />
              </div>

              <div className="mt-20">
                <Link
                  href="/contact"
                  className="text-sm mt-10 rounded-full font-bold px-5 py-3 bg-logoColorPrimary"
                >
                  Contact Us
                </Link>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </header>
  );
};

export default Header;
