"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import brandIcon from "../../assets/icons/brand.png";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-porcelain shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="flex w-full items-center justify-between px-5 xl:px-20">
        {/* Logo */}
        <Link href="/" className="p-1.5">
          <span className="sr-only">NextLine Solutions</span>
          <div className="flex gap-3">
            <Image
              alt=""
              src={brandIcon}
              className="h-12 mt-1 lg:mt-0 lg:h-16 w-auto"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="group relative transition-colors duration-300"
            >
              {label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-mainColor transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block text-porcelain">
          <Link
            href="/themes"
            className="font-semibold text-porcelain bg-mainColor hover:bg-darkPurple2 transition-all duration-500 ease-in-out py-3 min-w-44 text-center inline-block"
          >
            Premium Themes
          </Link>
        </div>
        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <button onClick={() => setDrawerOpen(true)}>
            <Menu className="w-6 h-6 text-porcelain" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6 text-mainColor outline-none" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-darkGray text-porcelain border-none"
            >
              <SheetHeader>
                <SheetTitle className="text-left text-lg">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-5">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-lg font-medium hover:text-darkPurple transition"
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href="/themes"
                  className="mt-4 font-semibold text-porcelain bg-mainColor hover:bg-darkPurple2 transition-all duration-300 py-3 px-4 text-center"
                >
                  Premium Themes
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-darkGray text-porcelain z-[9999] transform transition-transform duration-300 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={() => setDrawerOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col p-6 gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-lg font-medium hover:text-mainColor transition"
              onClick={() => setDrawerOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/themes"
            className="mt-4 font-semibold text-porcelain bg-mainColor hover:bg-darkPurple2 transition-all duration-300 py-3 px-4 text-center"
            onClick={() => setDrawerOpen(false)}
          >
            Premium Themes
          </Link>
        </div>
      </div>

      {/* Backdrop */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[9998]"
          onClick={() => setDrawerOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
