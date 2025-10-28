import React, { useState } from "react";
import com from "../../../assets/com.png";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Coustomer = () => {
  const [activeIndex, setActiveIndex] = useState(1); 
  const [rightActive, setRightActive] = useState(false);

  const handleRightClick = () => {
    setActiveIndex((prev) => (prev + 1) % 3); 
    setRightActive(true);
    setTimeout(() => setRightActive(false), 400); 
  };

  const handleLeftClick = () => {
    setActiveIndex((prev) => (prev - 1 + 3) % 3);
    setRightActive(false);
  };

  const feedbacks = [
    {
      id: 1,
      name: "Rolex",
      text: "I absolutely love the quality and style of the clothing I purchased from this website. Customer service was outstanding and I received my order quickly. Highly recommended!",
    },
    {
      id: 2,
      name: "Ariana",
      text: "The fabric feels premium, and the fit is perfect. I got so many compliments wearing their collection. Totally worth it!",
    },
    {
      id: 3,
      name: "Michael",
      text: "Excellent quality and fast delivery. This brand really understands customer satisfaction. I’ll shop again for sure!",
    },
  ];

  return (
    <section className="max-w-screen-2xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-semibold text-center mb-12 font-roboto">
        Feedback Corner
      </h2>

      {/* Feedback Cards */}
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        {feedbacks.map((item, index) => (
          <div
            key={item.id}
            className={`px-6 py-10 border rounded-2xl shadow-md transition duration-300 space-y-6  ${
              activeIndex === index
                ? "bg-btnColor text-white shadow-xl scale-105"
                : "bg-white text-gray-700 hover:shadow-lg"
            }`}
          >
            <img
              src={com}
              alt={item.name}
              className="w-20 h-20 rounded-full"
            />
            <h2 className="text-2xl font-semibold">{item.name}</h2>
            <p className="text-[15px] leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-6 mt-10">
        <button
          onClick={handleLeftClick}
          className={`p-4 rounded-full border transition duration-300 ${
            !rightActive ? "bg-btnColor text-white" : "bg-white text-gray-600"
          }`}
        >
          <FaAngleLeft size={22} />
        </button>

        <button
          onClick={handleRightClick}
          className={`p-4 rounded-full border transition duration-300 ${
            rightActive ? "bg-btnColor text-white" : "bg-white text-gray-600"
          }`}
        >
          <FaAngleRight size={22} />
        </button>
      </div>
    </section>
  );
};

export default Coustomer;
