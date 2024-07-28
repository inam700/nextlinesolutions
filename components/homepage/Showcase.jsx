"use client";
import Image from "next/image";
import React, { useState } from "react";
import brandIcon from "@/assets/icons/brand.png";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { linkHover } from "@/Utils/Utils";
import NavLink from "../NavLink";

const Showcase = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="h-screen bg-cover bg-no-repeat bg-[url('../../assets/images/showcase-bg.jpg')] before:content-[''] before:w-full before:h-full before:absolute before:left-0 before:top-0 before:z-10 before:bg-black/90">
      <header className="md:px-20 py-5 bg-transparent z-10 flex items-center absolute w-full top-0 left-0 text-white">
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
            <NavLink type={"navbar"} link="/" text="Services" />
            <NavLink type={"navbar"} link="/" text="Portfolio" />
          </PopoverGroup>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <NavLink
              type={"navbar"}
              link="/"
              text={
                <>
                  Contact us <span aria-hidden="true">&rarr;</span>
                </>
              }
            />
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
                  <Link
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                  >
                    Marketplace
                  </Link>
                  <Link
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                  >
                    Company
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
      <div className="md:px-20 absolute left-0 right-0 z-10 px-5 lg:top-52 lg:mt-20 text-white">
        <p className="text-5xl font-bold mb-5">Turning</p>
        <p className="text-5xl font-bold mb-5">Ideas into Code</p>
        <p className="text-5xl font-bold mb-5">Innovation into Reality</p>
        <p className="text-2xl font-thin">
          Your vision, our expertise. We don't just build software, we craft
          comprehensive solutions.
        </p>
        <p className="text-2xl font-thin">
          From innovative custom applications to streamlined enterprise systems,
          we transform your vision into a digital reality.
        </p>
        <button
          type="button"
          className="outline-none px-10 py-3 mt-5 rounded bg-slate-200 text-gray-900 before:ease relative overflow-hidden border transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-slate-600 before:opacity-10 before:duration-700 hover:shadow-slate-800 hover:before:-translate-x-40"
        >
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Showcase;
