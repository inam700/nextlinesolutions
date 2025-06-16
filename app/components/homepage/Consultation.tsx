import Link from "next/link";

const Consultation = () => {
  return (
    <div className="relative mt-20 flex flex-col items-center justify-center bg-porcelain1 text-darkPurple w-full h-full p-5 md:p-20">
      <p className="font-extrabold text-2xl md:text-3xl lg:text-5xl text-center mb-3 md:mb-5 leading-tight">
        Transform Your Ideas into{" "}
        <span className="text-mainColor">Cutting-Edge</span> Software,
        <br className="hidden md:block" />
        Designed for Success
      </p>

      <p className="text-center text-lg text-darkPurple mb-5">
        Got a software vision? Let's build it together. Our experts craft custom
        solutions for your unique needs,
        <br className="hidden md:block" />
        from mobile apps to enterprise platforms. Start the conversation today.
      </p>

      <Link
        href="#contact"
        className="mt-4 font-semibold text-porcelain bg-mainColor hover:bg-darkPurple2 transition-all duration-300 py-3 px-6 text-center"
      >
        Get Consultation
      </Link>
    </div>
  );
};

export default Consultation;
