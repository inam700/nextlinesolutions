import AboutUs from "@/components/homepage/About";
import Contact from "@/components/homepage/Contact";
import HowWeDo from "@/components/homepage/HowWeDo";
import Portfolio from "@/components/homepage/Portfolio";
import Showcase from "@/components/homepage/Showcase";
import Technologies from "@/components/homepage/Technologies";
import WhatWeDo from "@/components/homepage/WhatWeDo";

const Homepage = () => {
  return (
    <>
      <Showcase />
      <AboutUs />
      <HowWeDo />
      <WhatWeDo />
      <Portfolio />
      <Technologies />
      <Contact />
    </>
  );
};

export default Homepage;
