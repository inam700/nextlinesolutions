import Link from "next/link";
import React from "react";

// -------------------------
// Type Definitions
// -------------------------
interface NavLinkProps {
  type: "navbar" | "footer";
  text: string;
  link: string;
  handleChange?: () => void;
}

// -------------------------
// Component
// -------------------------
const NavLink: React.FC<NavLinkProps> = ({
  type,
  text,
  link,
  handleChange,
}) => {
  const linkHover =
    "relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-logoColorPrimary after:w-full after:scale-x-0 after:hover:scale-x-110 after:transition after:duration-300 after:origin-center";

  if (type === "navbar") {
    return (
      <Link
        href={link}
        className={`font-semibold py-2 leading-6 ${linkHover}`}
        onClick={handleChange}
      >
        {text}
      </Link>
    );
  }

  if (type === "footer") {
    return (
      <Link href={link} className={linkHover} onClick={handleChange}>
        {text}
      </Link>
    );
  }

  return null; // fallback
};

export default NavLink;
