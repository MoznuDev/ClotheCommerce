
import React, { useState } from 'react';
import Frame1 from '../../../assets/Frame1.png';
import image1 from '../../../assets/image1.png';
import image2 from '../../../assets/image2.png';
import image3 from '../../../assets/image3.png';
import image4 from '../../../assets/image3.png';
import image5 from '../../../assets/image3.png';
import Bestsaler1 from "../../../assets/Bestsaler1.png";
import Bestsaler2 from "../../../assets/Bestsaler2.png";
import { FaStar } from 'react-icons/fa';

const products = [
  { id: 1, image: Frame1, name: "Name of the product", price: "$35.6", rating: 5 },
  { id: 2, image: image1, name: "Name of the product", price: "$35.6", rating: 4 },
  { id: 3, image: image2, name: "Name of the product", price: "$35.6", rating: 5 },
  { id: 4, image: image3, name: "Name of the product", price: "$35.6", rating: 3 },
  { id: 5, image: image4, name: "Name of the product", price: "$35.6", rating: 4 },
  { id: 6, image: image5, name: "Name of the product", price: "$35.6", rating: 5 },
  { id: 7, image: Bestsaler1, name: "Name of the product", price: "$35.6", rating: 4 },
  { id: 8, image: Bestsaler2, name: "Name of the product", price: "$35.6", rating: 5 },
];

const BestSaling = () => {
  // শুরুতে ৪টা প্রোডাক্ট দেখাবে
  const [visibleCount, setVisibleCount] = useState(4);

  // বোতামে ক্লিক করলে সব প্রোডাক্ট দেখাবে
  const handleShowMore = () => {
    setVisibleCount(products.length);
  };

  return (
    <section className="py-20 bg-bg1Color">
      <div className="max-w-screen-2xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center font-roboto">
          Best Selling
        </h2>

        {/* Category Buttons */}
        <div className="flex justify-center items-center gap-6 mt-4">
          <button className='py-2 px-4 rounded-full text-center bg-gray-600 hover:bg-white hover:text-black'>Sales</button>
          <button className='py-2 px-4 rounded-full text-center bg-gray-600 hover:bg-white hover:text-black'>Trending</button>
          <button className='py-2 px-4 rounded-full text-center bg-gray-600 hover:bg-white hover:text-black'>Popular</button>
          <button className='py-2 px-4 rounded-full text-center bg-gray-600 hover:bg-white hover:text-black'>New</button>
        </div>

        {/* Product Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.slice(0, visibleCount).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5 cursor-pointer"
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-120 object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-300"
              />

              {/* Product Info */}
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                {item.name}
              </h3>

              <div className="flex justify-center items-center mt-3">
                <p className="text-btnColor font-bold">{item.price}</p>

                {/* Rating */}
                <div className="flex items-center ml-4">
                  {[Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < item.rating ? "text-yellow-400" : "text-gray-300"
                      } text-lg`}
                    />
                  ))}
                  <span className="ml-1 text-sm text-gray-500">
                    ({item.rating}.0)
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < products.length && (
          <div className="text-center mt-10">
            <button
              onClick={handleShowMore}
              className="bg-btnColor text-white px-6 py-3 rounded-xl font-semibold hover:bg-btnHover transition"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BestSaling;
