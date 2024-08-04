import React from "react";
import consultationbg from "@/assets/images/consultation-bg.jpg";
import Image from "next/image";

const Consultation = () => {
  return (
    <div className="relative">
      <Image
        src={consultationbg}
        className="w-full h-48 md:h-72 lg:h-96 object-cover"
        alt="Consultation Background"
      />
      <div className="flex flex-col items-center justify-center absolute bg-black/60 w-full h-full top-0 left-0 p-5 md:p-10">
        <p className="font-extrabold text-xl md:text-3xl lg:text-4xl text-white text-center mb-3 md:mb-5 leading-tight">
          Transform Your Ideas into{" "}
          <b className="text-logoColorPrimary">Cutting-Edge</b> Software,
          <br className="hidden md:block" />
          Designed for Success
        </p>

        <p className="text-center text-xs md:text-sm lg:text-base text-white mb-5 max-w-sm md:max-w-md lg:max-w-lg">
          Got a software vision? Let's build it together. Our experts craft
          custom solutions for your unique needs,
          <br className="hidden md:block" />
          from mobile apps to enterprise platforms. Start the conversation
          today.
        </p>

        <button
          type="button"
          className="rounded-full min-w-[180px] text-xs md:text-sm font-bold px-8 md:px-10 py-2 md:py-3 bg-logoColorPrimary text-white 
                    hover:shadow-slate-800 transition-shadow duration-300 ease-in-out"
        >
          Schedule a Consultation
        </button>
      </div>
    </div>
  );
};

export default Consultation;
