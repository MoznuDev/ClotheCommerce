import React from "react";
import { FaStar } from "react-icons/fa";
import Bestsaler1 from "../../../assets/Bestsaler1.png";
import Bestsaler2 from "../../../assets/Bestsaler2.png";
import Bestsaler3 from "../../../assets/Bestsaler3.png";
import { HiArrowCircleRight } from "react-icons/hi";

const products = [
  { id: 1, image: Bestsaler1, name: "Name of the product", price: "$35.6", rating: 5 },
  { id: 2, image: Bestsaler2, name: "Name of the product", price: "$35.6", rating: 5 },
  { id: 3, image: Bestsaler3, name: "Name of the product", price: "$35.6", rating: 5 },
];

const Selling = () => {
  return (
    <section className="py-20 bg-bg1Color">
      <div className="max-w-screen-2xl mx-auto px-4 text-center space-y-4">
        {/* Section Title */}
        <h2 className="text-4xl font-semibold text-textColor font-roboto">
          Best Selling
        </h2>
        <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto">
          Get in on the trend with our curated selection of best-selling styles.
        </p>

        {/* Product Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5 cursor-pointer"
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-120 object-cover bg-bgColor rounded-xl mb-4 hover:scale-105 transition-transform duration-300"
              />
                 <h3 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h3>
              <div className="flex justify-center items-center">
                {/* Product Info */}
             
              <p className="text-btnColor font-bold mt-1">{item.price}</p>
              <div className="h-5 w-0.5 bg-gray-700 mt-2 mx-4"></div>

              {/* Product Rating */}
              <div className="flex justify-center md:justify-start items-center mt-3">
                {[Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < item.rating ? "text-yellow-400" : "text-gray-300"
                    } text-lg`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-500">
                  ({item.rating}.0)
                </span>
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Button */}
        <button className="mt-12 py-3 px-10 bg-btnColor text-white  font-semibold hover:bg-gray-700 transition duration-300">
         <div className="flex justify-center items-center gap-2">
          <h2> Explore More</h2>
          <HiArrowCircleRight/>
         </div>
        </button>
      </div>
    </section>
  );
};

export default Selling;
