import AboutUs from "@/components/homepage/About";
import Consultation from "@/components/homepage/Consultation";
import Contact from "@/components/homepage/Contact";
import Industries from "@/components/homepage/Industries";
import Portfolio from "@/components/homepage/Portfolio";
import Showcase from "@/components/homepage/Showcase";
import Technologies from "@/components/homepage/Technologies";
import WhatWeDo from "@/components/homepage/WhatWeDo";

const Homepage = () => {
  return (
    <>
      <Showcase />
      <AboutUs />
      <WhatWeDo />
      <Technologies />
      <Industries />
      <Portfolio />
      <Consultation />
      <Contact />
    </>
  );
};

export default Homepage;
