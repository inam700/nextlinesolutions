import { approach } from "../../../assets/data/approach";
import React from "react";
import AboutUs from "./About";

const HowWeDo = () => {
  return (
    <>
      <div className="py-20">
        <div className="px-5 lg:px-20">
          <p className="mb-3 text-4xl font-extrabold">
            How we <span className="text-logoColorPrimary">Do</span>
          </p>
          <p className="mb-20">
            Every project is a masterpiece built on a blueprint of brilliance.
            Our transparent delivery process ensures <br /> consistency at every
            stage, turning your vision into reality with precision and clarity.
          </p>
          <div className="grid lg:grid-cols-3 gap-10">
            {approach.map((item, index) => (
              <div
                className="px-10 h-full py-10 mb-5 shadow-lg hover:shadow-2xl rounded-md relative bg-gray-50"
                key={index}
              >
                <p
                  className={`font-bold uppercase absolute bottom-0 right-0 me-10 text-logoColorPrimary opacity-15 `}
                  style={{ fontSize: "15rem" }}
                >
                  {item.step}
                </p>
                <p className="text-2xl font-bold my-5">{item.name}</p>
                <p className="">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HowWeDo;
