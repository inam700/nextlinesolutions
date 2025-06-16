"use client";
import { projects } from "../../../assets/data/portfolio";
import Slider from "react-slick";
import Image from "next/image";
import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Portfolio = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="work" className="p-5 xl:p-20 pb-0 mt-20 relative bg-porcelain1">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-5 md:mb-20">
        <div className="mb-10 md:mb-0">
          <p className="text-2xl md:text-5xl font-extrabold">
            Featured <b className="text-mainColor">Projects</b>
          </p>
          <p className="text-lg md:text-lg mt-3">
            We build success through client-focused solutions, innovation, and
            results.
          </p>
        </div>
      </div>
      <div className="relative mx-auto">
        <Slider ref={sliderRef} {...settings}>
          {projects.map((project, index) => (
            <div className="px-5">
              <div className="bg-white grid xl:grid-cols-2">
                <div className="p-10">
                  <p className="text-2xl font-bold mb-5">{project.title}</p>
                  <p className="text-lg text-justify mb-10">
                    {project.description}
                  </p>
                  <div>
                    <p className="text-lg mb-5">Technologies Used</p>

                    <div className="flex flex-wrap gap-2 md:gap-5">
                      {project.tools.map((item) => (
                        <div className="w-fit">
                          <div className="flex flex-col items-center bg-porcelain1 min-w-[120px] p-3 shadow-lg hover:shadow-xl">
                            <Image src={item.image} alt="tech" width={50} />
                            <div className="text-sm font-bold">{item.name}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className={`p-10 flex justify-center items-ce
                  ${index === 0 ? "bg-[#416364]" : "bg-[#ff6500]"}
                  `}
                >
                  <Image src={project.image} alt="portfolio" width={600} />
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* Custom Arrows at Bottom Right */}
        <div className="absolute -top-12 right-[19px] flex gap-2 z-10">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="bg-porcelain2 text-darkPurple2 hover:shadow-xl p-2 transition-all duration-500 ease-in-out"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="bg-porcelain2 text-darkPurple2 hover:shadow-xl p-2 transition-all duration-500 ease-in-out"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
