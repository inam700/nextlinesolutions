const Showcase = () => {
  return (
    <div className="h-screen bg-cover bg-no-repeat bg-[url('../../assets/images/showcase-bg.jpg')] before:content-[''] before:w-full before:h-full before:absolute before:left-0 before:top-0 before:z-10 before:bg-black/5">
      <div className="md:px-20 absolute left-0 right-0 z-10 px-5 lg:top-52 lg:mt-20 text-white">
        <p className="text-5xl font-bold mb-2">Turning</p>
        <p className="text-5xl font-bold mb-2">
          Ideas into <span className="text-logoColorPrimary">Code</span>
        </p>
        <p className="text-5xl font-bold mb-7">
          Innovation into <span className="text-logoColorPrimary">Reality</span>
        </p>
        <p className="mt-3">
          Your vision, our expertise. We don't just build software,
          <br /> we craft comprehensive solutions. From innovative custom
          applications to <br />
          streamlined enterprise systems, we transform your vision into a
          digital reality.
        </p>

        <button
          type="button"
          className="outline-none rounded-full min-w-40 text-sm font-bold px-10 py-3 mt-5 me-5 bg-slate-200 text-gray-900 before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-slate-600 before:opacity-10 before:duration-700 hover:shadow-slate-800 hover:before:-translate-x-40"
        >
          Let's Connect
        </button>
        <button
          type="button"
          className="outline-none rounded-full min-w-40 text-sm font-bold px-10 py-3 mt-5 bg-logoColorPrimary text-white before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-slate-600 before:opacity-10 before:duration-700 hover:shadow-slate-800 hover:before:-translate-x-40"
        >
          Why Us
        </button>
      </div>
    </div>
  );
};

export default Showcase;
