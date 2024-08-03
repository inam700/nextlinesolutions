import Image from "next/image";
import React from "react";

const PortfolioGradient = ({ item }) => {
  const boxShadow = () => {
    if (item.id === 1) return "from-blue-950 to-blue-900 hover:to-blue-800";
    else if (item.id === 2)
      return "from-teal-950 to-teal-900 hover:to-teal-800";
    else if (item.id === 3)
      return "from-green-950 to-green-900 hover:to-green-800";
    else if (item.id === 4)
      return "from-purple-950 to-purple-900 hover:to-purple-800";
    else if (item.id === 5)
      return "from-orange-950 to-orange-900 hover:to-orange-800";
    else if (item.id === 6) return "from-sky-950 to-sky-900 hover:to-sky-800";
    else if (item.id === 7)
      return "from-blue-950 to-blue-900 hover:to-blue-800";
    else if (item.id === 8) return "from-red-950 to-red-900 hover:to-red-800";
  };

  const projectImage = () => {
    if (item.id === 1) return "w-96";
    else if (item.id === 1) return "w-96";
    else if (item.id === 2) return "w-72";
    else if (item.id === 3) return "w-72";
    else if (item.id === 4) return "w-72";
    else if (item.id === 5) return "w-56";
    else if (item.id === 6) return "w-72";
    else if (item.id === 7) return "w-60";
    else if (item.id === 8) return "w-72";
  };

  if (item.grid === 2)
    return (
      <div className="col-span-2" key={item.name}>
        {/* Ensure each item gets a unique key for React */}
        <div
          className={`grid md:grid-cols-2 gap-10 border rounded-lg shadow-lg hover:shadow-xl px-10 py-12 bg-gradient-to-r ${boxShadow()}`}
        >
          <div>
            {/* <Image src={item.icon} className="w-20" alt="portfolio" /> */}
            <p className="text-2xl font-bold mt-3 mb-1">{item.name}</p>
            <p className="text-sm mb-5">{item.platform}</p>
            <p>{item.description}</p>
            <div className="flex gap-3 flex-wrap mt-10">
              {item.tags.map((tag) => (
                <div
                  key={tag.name}
                  className="flex items-center gap-2 group rounded-md border shadow-md hover:shadow-xl hover:bg-white hover:text-black px-4 py-2"
                >
                  <Image
                    src={tag.image}
                    className="w-8 invert group-hover:invert-0"
                    alt="tag"
                  />
                  <p className="text-sm">{tag.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:place-self-end mt-5 md:mt-0">
            {/* Adjust image placement on smaller screens */}
            <Image
              src={item.image}
              className={`${projectImage()}`}
              alt="portfolio"
            />
          </div>
        </div>
      </div>
    );
  return (
    <div className="h-full">
      <div
        className={`h-full grid gap-20 border rounded-lg shadow-lg hover:shadow-xl px-10 py-12 bg-gradient-to-r ${boxShadow()}`}
      >
        <div className="">
          <p className="text-2xl font-bold mt-3 mb-1">{item.name}</p>
          <p className="text-sm mb-5">{item.platform}</p>
          <p className="">{item.description}</p>
          <div className="flex gap-3 flex-wrap mt-10">
            {item.tags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center gap-2 group rounded-md border shadow-md hover:shadow-xl hover:bg-white hover:text-black px-4 py-2"
              >
                <Image
                  src={tag.image}
                  className="w-8 invert group-hover:invert-0"
                  alt="tag"
                />
                <p className="text-sm">{tag.name}</p>{" "}
              </div>
            ))}
          </div>
        </div>
        <div className="place-self-center">
          <Image
            src={item.image}
            className={`${projectImage()}`}
            alt="portfolio"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioGradient;
