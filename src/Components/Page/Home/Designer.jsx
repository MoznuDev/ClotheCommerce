import React from "react";
import Bestsaler1 from "../../../assets/Bestsaler1.png";
import Bestsaler2 from "../../../assets/Bestsaler2.png";
import Bestsaler3 from "../../../assets/Bestsaler3.png";

const Designer = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 py-20 bg-white">
      {/* Section Title */}
      <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl font-bold font-roboto text-gray-800">
          Designer Clothes For You
        </h2>
        <p className="text-gray-600 text-md leading-relaxed">
          Immerse yourself in the world of luxury fashion with our meticulously
          crafted designer clothes!
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className=" rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center">
          <img
            src={Bestsaler1}
            alt="Accessories"
            className="bg-bgColor w-full h-[300px] object-cover rounded-xl mb-5 hover:scale-105 transition-transform duration-300"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Accessories
          </h3>
          <p className="text-gray-600 px-6">
            Complete your ensemble with designer accessories such as hats and
            belts.
          </p>
        </div>

        {/* Card 2 */}
        <div className=" rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center">
          <img
            src={Bestsaler2}
            alt="Casual Wear"
            className="bg-bgColor w-full h-[300px] object-cover rounded-xl mb-5 hover:scale-105 transition-transform duration-300"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Casual Wear
          </h3>
          <p className="text-gray-600 px-6">
            Discover relaxed styles with an elegant touch for everyday wear.
          </p>
        </div>

        {/* Card 3 */}
        <div className=" rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center">
          <img
            src={Bestsaler3}
            alt="Formal Collection"
            className="bg-bgColor w-full h-[300px] object-cover rounded-xl mb-5 hover:scale-105 transition-transform duration-300"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Formal Collection
          </h3>
          <p className="text-gray-600 px-6">
            Elevate your look with premium formal wear designed for impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Designer;
