import React from 'react';
import Man1 from "/img/Man1.png";
import Man2 from "/img/Man2.png";
import Man3 from "/img/Man3.png";
import Man4 from "/img/Man4.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Man1,
    title: "Casual wear",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    img: Man4,
    title: "T-shirts",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    img: Man2,
    title: "Shoes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    img: Man3,
    title: "Gadget",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const TopProduct = ({handleOrderPopup}) => {
  return (
    <div className="dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 text-white">
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary uppercase tracking-wider">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold mt-2 mb-4">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, placeat! Sunt itaque repudiandae eos.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center">
          {ProductsData.map((product) => (
            <div
              key={product.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 hover:text-gray-900 dark:hover:text-white relative shadow-lg transition duration-300 group max-w-[300px] p-6"
            >
              <div className="h-[150px] flex justify-center items-center">
                <img
                  src={product.img}
                  alt={product.title}
                  className="max-w-[120px] transform group-hover:scale-105 transition duration-300 drop-shadow-md"
                />
              </div>
              <h2 className="text-lg font-bold mt-4">{product.title}</h2>
              <p className="text-gray-500 dark:text-gray-300 text-sm mb-4">{product.description}</p>
              <div className="flex items-center justify-center gap-1 mb-4">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-gray-300" />
              </div>
              <button className="bg-primary hover:scale-105 transition duration-300 text-white py-2 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary dark:group-hover:bg-gray-900 dark:group-hover:text-white" 
              onClick={handleOrderPopup}>
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProduct;
