import Link from "next/link";
import React from "react";

const NavLink = ({ type, text, link }) => {
  const linkHover =
    "relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center";

  if (type === "navbar")
    return (
      <Link href={link} className={`font-semibold leading-6 ${linkHover}`}>
        {text}
      </Link>
    );
  else if (type === "footer")
    return (
      <Link href={link} className={`${linkHover}`}>
        {text}
      </Link>
    );
};

export default NavLink;
