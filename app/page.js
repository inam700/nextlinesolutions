import AboutUs from "@/components/homepage/About";
import HowWeDo from "@/components/homepage/HowWeDo";
import Portfolio from "@/components/homepage/Portfolio";
import Showcase from "@/components/homepage/Showcase";
import WhatWeDo from "@/components/homepage/WhatWeDo";

const Homepage = () => {
  return (
    <>
      <Showcase />
      <AboutUs />
      <HowWeDo />
      <WhatWeDo />
      <Portfolio />
    </>
  );
};

export default Homepage;
