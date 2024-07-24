import React from "react";

const AboutUs = () => {
  return (
    <div className="relative px-20 py-20 pb-32 bg-cover bg-no-repeat  bg-[url('../../assets/images/about-bg.png')]">
      <div className="grid grid-cols-2">
        <div></div>
        <div>
          <p className="text-6xl mb-5 font-bold">About Us</p>
          <p className="text-2xl mb-10 font-semibold">
            We bring trusted solutions for your business
          </p>
          <p className="text-lg font-thin mb-5">
            NextLine Solutions is a dynamic software company specializing in
            full-stack development, cutting-edge Artificial Intelligence and
            e-commerce solutions. With expertise in different technologies, we
            transform ideas into robust, user-friendly applications.
          </p>
          <p className="text-lg font-thin">
            Our commitment to excellence drives us to create innovative software
            that empowers businesses and enhances user experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
