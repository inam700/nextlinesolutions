"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";

const NavDropdown = ({ title, mainLink, links, menuType }) => {
  const linkHover =
    "relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center";

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = (event) => {
    if (
      !dropdownRef.current ||
      !dropdownRef.current.contains(event.relatedTarget)
    ) {
      setIsOpen(false);
    }
  };
  return (
    <div
      className="relative inline-block text-left"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={mainLink}
        className={`
          inline-flex justify-center w-full font-semibold outline-none py-2 relative 
         
        `}
      >
        <div
          className={` after:block after:content-[''] after:absolute after:h-[2px] after:bg-logoColorPrimary after:w-full after:scale-x-0 
          transition after:duration-300 after:origin-center 
          ${isOpen ? "after:scale-x-110" : "hover:after:scale-x-110"}`}
        >
          {title}
        </div>
      </Link>

      {isOpen && (
        <div className="origin-top-right absolute left-1/2 transform -translate-x-1/2 w-max bg-white text-black shadow-lg">
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {menuType === "extended" ? (
              <div className="flex gap-10 px-16 py-10">
                {links?.map((item) => (
                  <div>
                    <p className="text-lg font-bold mb-5 text-gray-600">
                      {item.typeName}
                    </p>
                    {item.types.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block mb-3 hover:text-logoColorPrimary text-sm"
                        role="menuitem"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <div className="">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block hover:text-logoColorPrimary text-sm ps-10 pe-20 py-3"
                    role="menuitem"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavDropdown;
