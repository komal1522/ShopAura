import React from 'react';
import BannerImg from "/img/food.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text and Icons */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-primary dark:text-yellow-300">
              Fresh Food Delivered to Your Doorstep
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Enjoy the best quality food with the fastest delivery in town. Our service guarantees
              fresh ingredients and safe packaging.
            </p>
            <div className="flex space-x-4">
              {/* Secure Payment */}
              <div data-aos="fade-up" className="flex items-center space-x-2">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-300 dark:bg-violet-400 text-primary " />
                <p className="text-gray-800 dark:text-white">Secure Payment</p>
              </div>
              {/* Fast Delivery */}
              <div data-aos="fade-up" className="flex items-center space-x-2">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-300 dark:bg-green-400 text-primary "  />
                <p className="text-gray-800 dark:text-white">Fast Delivery</p>
              </div>
              {/* Food Truck */}
              <div data-aos="fade-up" className="flex items-center space-x-2">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-blue-300 dark:bg-blue-400 text-primary "  />
                <p className="text-gray-800 dark:text-white">Food Truck Service</p>
              </div>
              <div data-aos="fade-up" className="flex items-center space-x-2">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-200 dark:bg-yellow-300 text-primary "  />
                <p className="text-gray-800 dark:text-white">Get Offers</p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div 
          data-aos="zoom-in"
          className="flex justify-center sm:justify-end">
            <img
              src={BannerImg}
              alt="Food Delivery"
              className="w-full max-w-[400px]   h-;[350px] drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
