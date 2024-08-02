import React from "react";
import consultationbg from "@/assets/images/consultation-bg.jpg";
import Image from "next/image";

const Consultation = () => {
  return (
    <div className="relative">
      <Image src={consultationbg} className="w-full h-96" />
      <div className="flex flex-col items-center justify-center absolute bg-black/60 w-full h-full top-0 left-0">
        <p className="font-extrabold text-4xl text-white text-center mb-5">
          Transform Your Ideas into{" "}
          <b className="text-logoColorPrimary">Cutting-Edge</b> Software, <br />{" "}
          Designed for Success
        </p>
        <p className="text-center text-white text-lg mb-5">
          Got a software vision? Let's build it together. Our experts craft
          custom solutions for your unique needs, <br /> from mobile apps to
          enterprise platforms. Start the conversation today.
        </p>
        <button
          type="button"
          className="outline-none rounded-full min-w-40 text-sm font-bold px-10 py-3 mb-5 bg-logoColorPrimary text-white before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-slate-600 before:opacity-10 before:duration-700 hover:shadow-slate-800 hover:before:-translate-x-60"
        >
          Schedule a Consultation
        </button>
      </div>
    </div>
  );
};

export default Consultation;
