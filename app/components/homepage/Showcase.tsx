"use client";
import Link from "next/link";
import AnimatedBackground from "../BackgroundAnimation"; // adjust path as needed

const Showcase = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center px-5 md:px-20">
      {/* Local background animation */}
      <AnimatedBackground />

      {/* Foreground content */}
      <div className="relative z-10 text-center mt-20">
        <p className="text-3xl md:text-6xl font-extrabold leading-tight">
          We Turn <span className="text-mainColor">Ideas</span> into Code
        </p>
        <p className="text-3xl md:text-6xl font-extrabold mb-5 leading-tight">
          <span className="text-mainColor">Innovation</span> into Reality
        </p>

        <p className="mx-auto text-xl mb-10">
          We build smart, scalable software that brings your ideas to life.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            href="#contact"
            className="min-w-40 text-center font-semibold py-3 text-porcelain bg-mainColor hover:bg-darkPurple2 transition-all duration-500 ease-in-out"
          >
            Let's Connect
          </Link>
          {/* <Link
            href="/about"
            className="min-w-40 text-center font-semibold py-3 text-porcelain bg-mainColor hover:bg-mainColor1 transition-all duration-500 ease-in-out"
          >
            Why Us
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
