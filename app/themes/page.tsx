import Link from "next/link";
import React from "react";

const ThemesPage = () => {
  return (
    <div className="mt-20">
      <div className="pt-20 px-20 pb-10 bg-white">
        <p className="text-5xl font-extrabold mb-10">
          <span className="text-logoColorPrimary">Coming Soon </span>{" "}
        </p>
        <Link
          href="/"
          className="mt-10 font-semibold text-porcelain bg-mainColor hover:bg-darkPurple2 transition-all duration-300 py-3 px-4 text-center"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default ThemesPage;
