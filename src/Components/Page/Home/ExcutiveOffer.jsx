import React from "react";
import Bestsaler3 from "../../../assets/Bestsaler3.png";

const ExcutiveOffer = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 mt-20">
      {/* Main Box */}
      <div className="relative bg-bgColor flex flex-col md:flex-row items-center justify-between rounded-2xl shadow-lg overflow-visible">
        
        {/* Image Section — বাইরে 10px উপরে */}
        <div className="absolute top-[-300px] left-1/2 md:left-10 transform -translate-x-1/2 md:translate-x-0">
          <img
            src={Bestsaler3}
            alt="Exclusive Offer"
            className="w-[300px] md:w-[468px] object-contain drop-shadow-xl"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 ml-auto px-6 py-10 mt-[250px] md:mt-0 md:py-16 md:pr-12">
          <h2 className="text-3xl font-semibold font-roboto text-gray-800">
            Exclusive Offers
          </h2>
          <p className="text-[20px] text-gray-600 leading-relaxed mt-4">
            Unlock the ultimate style upgrade with our exclusive offer — enjoy
            savings of up to 40% off on our latest new arrivals.
          </p>

          {/* Counter Section */}
          <div className="flex items-center gap-6 mt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-btnColor">05</p>
              <span className="text-sm text-gray-500">Days</span>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-btnColor">12</p>
              <span className="text-sm text-gray-500">Months</span>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-btnColor">2025</p>
              <span className="text-sm text-gray-500">Year</span>
            </div>
          </div>

          {/* Button */}
          <button className="mt-6 bg-btnColor text-white py-3 px-8 rounded-full hover:bg-black transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExcutiveOffer;
