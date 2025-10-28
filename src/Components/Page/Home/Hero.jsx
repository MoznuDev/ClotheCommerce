import React from "react";
import Banner from "../../../assets/Banner.png";

const Hero = () => {
  return (
    <section className="bg-bgColor py-10">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Text Section */}
          <div className="text-center md:text-left md:w-1/4  space-y-6">
            <h1 className="text-4xl md:text-5xl w-[423px] font-rufina font-extrabold leading-tight text-gray-800">
              Discover And Find Your Own Fashion
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-medium w-[417px]">
              Explore our curated collection of stylish clothing and accessories
              tailored to your unique fashion.
            </p>
            <button className="py-4 px-8 bg-btnColor text-white font-semibold rounded-md hover:bg-bgColor transition duration-300">
              EXPLORE NOW
            </button>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 flex justify-center md:justify-end mr-[-100px]">
            <img
              src={Banner}
              alt="Fashion Banner"
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
