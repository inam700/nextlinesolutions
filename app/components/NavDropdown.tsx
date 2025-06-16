"use client";

import Link from "next/link";
import React, { useRef, useState, MouseEvent } from "react";

// -------------------------
// Type Definitions
// -------------------------
interface SimpleLink {
  name: string;
  href: string;
}

interface ExtendedLinkGroup {
  typeName: string;
  types: SimpleLink[];
}

interface NavDropdownProps {
  title: string;
  mainLink: string;
  menuType: "simple" | "extended";
  links: SimpleLink[] | ExtendedLinkGroup[];
}

// -------------------------
// Component
// -------------------------
const NavDropdown: React.FC<NavDropdownProps> = ({
  title,
  mainLink,
  links,
  menuType,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.relatedTarget as Node)
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
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`after:block after:content-[''] after:absolute after:h-[2px] after:bg-logoColorPrimary after:w-full after:scale-x-0 
          transition after:duration-300 after:origin-center 
          ${isOpen ? "after:scale-x-110" : "hover:after:scale-x-110"}`}
        >
          {title}
        </div>
      </Link>

      {isOpen && (
        <div className="origin-top-right absolute left-1/2 transform -translate-x-1/2 w-max bg-white text-black shadow-xl">
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
            className="w-full"
          >
            {menuType === "extended" ? (
              <div className="flex gap-10 px-20 py-16">
                {(links as ExtendedLinkGroup[]).map((item, index) => (
                  <div key={index}>
                    <p className="text-lg font-bold mb-5 text-gray-600">
                      {item.typeName}
                    </p>
                    {item.types.map((link, subIndex) => (
                      <Link
                        key={subIndex}
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
              <div className="py-5">
                {(links as SimpleLink[]).map((link, subIndex) => (
                  <Link
                    key={subIndex}
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
