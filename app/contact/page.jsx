import Contact from "@/components/homepage/Contact";
import React from "react";

const ContactPage = () => {
  return (
    <div className="mt-20">
      <div
        className="pt-20 px-20 pb-10"
        style={{
          backgroundColor: "#252033",
        }}
      >
        <p className="text-5xl font-extrabold mb-3">
          <span className="text-logoColorPrimary">Contact Us </span>{" "}
        </p>

        <p className="mb-20 text-lg text-white">
          Your trusted partner in innovative software solutions.
        </p>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage;
