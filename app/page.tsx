import React from "react";
import Showcase from "./components/homepage/Showcase";
import AboutUs from "./components/homepage/About";
import WhatWeDo from "./components/homepage/WhatWeDo";
import Consultation from "./components/homepage/Consultation";
import Contact from "./components/homepage/Contact";
import Portfolio from "./components/homepage/Portfolio";

const Homepage = () => {
  return (
    <div>
      <Showcase />
      <AboutUs />
      <Consultation />
      <WhatWeDo />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Homepage;
