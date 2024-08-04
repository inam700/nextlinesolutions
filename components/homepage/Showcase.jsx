import Link from "next/link";

const Showcase = () => {
  return (
    <div class="h-screen relative">
      <div class="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center bg-[url('../../assets/images/showcase-bg.jpg')]" />
      <div class="w-full h-full absolute top-0 left-0 z-10 bg-black/50 lg:bg-black/5" />
      <div className="md:px-20 absolute left-0 right-0 z-10 px-5 bottom-0 mb-20 md:mt-20 text-white">
        <p className="text-3xl md:text-5xl font-bold leading-tight">Turning</p>
        <p className="text-3xl md:text-5xl font-bold leading-tight">
          Ideas into <span className="text-logoColorPrimary">Code</span>
        </p>
        <p className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
          Innovation into <span className="text-logoColorPrimary">Reality</span>
        </p>

        <p className="max-w-md mx-auto md:mx-0 text-sm md:text-base mb-7">
          Your vision, our expertise. We don't just build software; we craft
          comprehensive solutions. From innovative custom applications to
          streamlined enterprise systems, we transform your vision into a
          digital reality.
        </p>

        <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-3 md:space-y-0 md:space-x-5">
          <Link
            href={"/contact"}
            type="button"
            className="rounded-full min-w-48 text-center text-sm font-bold px-10 py-3 bg-slate-200 text-gray-900 
                        hover:shadow-slate-800 transition-shadow duration-300 ease-in-out"
          >
            Let's Connect
          </Link>
          <Link
            href={"/about"}
            type="button"
            className="rounded-full min-w-48 text-center text-sm font-bold px-10 py-3 bg-logoColorPrimary text-white
                        hover:shadow-slate-800 transition-shadow duration-300 ease-in-out"
          >
            Why Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
