import { approach } from "@/assets/data/data";
import React from "react";

const HowWeDo = () => {
  return (
    <div className="py-20">
      <div className="px-20">
        <p className="mb-20 text-6xl font-bold">Our Approach</p>
        <div className="grid grid-cols-3 gap-10">
          {approach.map((item) => (
            <div className="border-t-2 px-3 py-10 mb-5 relative" key={item.id}>
              <p
                className={`font-bold uppercase absolute top-0 right-0 me-20 opacity-5 ${
                  item.step === "A" || item.step === "D"
                    ? "-mt-12"
                    : item.step === "B" || item.step === "E"
                    ? "-mt-8"
                    : item.step === "C" || item.step === "F"
                    ? "-mt-4"
                    : null
                }`}
                style={{ fontSize: "15rem" }}
              >
                {item.step}
              </p>
              <p className="text-4xl font-bold my-5">{item.name}</p>
              <p className="text-lg font-thin">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeDo;
