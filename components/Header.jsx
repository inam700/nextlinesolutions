"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import brandIcon from "@/assets/icons/brand.png";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
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
        // Conditionally add 'fixed' class
        position: isScrolled ? "fixed" : "absolute",
        top: 0,
        width: "100%",
        zIndex: 100, // Ensure the header stays above other content
      }}
      className={`relative md:px-20 py-1 z-10 flex items-center ${
        isScrolled ? "shadow-md shadow-black" : ""
      } w-full left-0 text-white transition-shadow`}
    >
      <nav
        aria-label="Global"
        className="flex w-full items-center justify-between py-6"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">NextLine Solutions</span>
            <div className="flex gap-3">
              <Image alt="" src={brandIcon} className="h-12 w-auto" />
              <div className="-mt-1">
                <p className="text-xl font-extrabold tracking-widest">
                  NEXTLINE
                </p>
                <p className="text-lg font-extrabold tracking-wider">
                  SOLUTIONS
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <span className="sr-only">Open main menu</span>
            <FaBars aria-hidden="true" className="h-6 w-6" />
          </button>
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
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">NextLine Solutions</span>
              <Image alt="" src={brandIcon} className="h-12 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5"
            >
              <span className="sr-only">Close menu</span>
              <FaXmark aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                >
                  Features
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
