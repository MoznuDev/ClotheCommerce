import React from "react";
import Bestsaler3 from "../../../assets/Bestsaler3.png";

const ExcutiveOffer = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 mt-[60px] ">
      {/* Image (20px up from box) */}
     <div className="flex justify-between bg-bgColor flex-col md:flex-row items-center md:items-start md:gap-10 md:p-10 rounded-2xl shadow-lg">
         <div className=" space-y-6 w-full md:w-1/2">
        <img
          src={Bestsaler3}
          alt="Exclusive Offer"
            className="w-full h-auto object-cover rounded-2xl mt-[-100px]"
        />
      </div>

      {/* Content Box */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10  rounded-2xl  pt-[200px] px-6">
        <div className="space-y-6 w-full md:w-1/2">
          <h2 className="text-3xl font-semibold font-roboto text-gray-800">
            Exclusive Offers
          </h2>
          <p className="text-[20px] text-gray-600 leading-relaxed">
            Unlock the ultimate style upgrade with our exclusive offer — enjoy
            savings of up to 40% off on our latest new arrivals.
          </p>

          {/* Counter Section */}
          <div className="flex items-center justify-start gap-6 mt-6">
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
     </div>
    </section>
  );
};

export default ExcutiveOffer;
