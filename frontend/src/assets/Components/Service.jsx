import React from 'react';
import img1 from '../servedrinks.webp';
import img2 from '../servedessert.jpg';
import img3 from '../servemeals.webp';

const Service = () => {
  return (
    <div className='bg3 py-16 px-4 md:px-12'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12'>
        {/* Drinks Section */}
        <div className='flex flex-col items-center text-center space-y-6 group transition duration-500 ease-in-out transform hover:-translate-y-1'>
          <img
            src={img1}
            alt="Drinks"
            className='w-full h-64 object-cover rounded-lg shadow-md transition duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-amber-500 group-hover:shadow-lg'
          />
          <div className='transition-opacity duration-700 opacity-0 group-hover:opacity-100'>
            <h2 className='text-4xl font-bold text-amber-500'>Drinks</h2>
            <p className='mt-3 text-gray-300'>
              A curated selection of hot and cold drinks, crafted to complement every meal.
            </p>
          </div>
        </div>

        {/* Dessert Section */}
        <div className='flex flex-col items-center text-center space-y-6 group transition duration-500 ease-in-out transform hover:-translate-y-1'>
          <img
            src={img2}
            alt="Dessert"
            className='w-full h-64 object-cover rounded-lg shadow-md transition duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-pink-400 group-hover:shadow-lg'
          />
          <div className='transition-opacity duration-700 opacity-0 group-hover:opacity-100'>
            <h2 className='text-4xl font-bold text-amber-500'>Dessert</h2>
            <p className='mt-3 text-gray-300'>
              Finish strong with irresistible desserts, crafted with love and a touch of creativity.
            </p>
          </div>
        </div>

        {/* Meals Section */}
        <div className='flex flex-col items-center text-center space-y-6 group transition duration-500 ease-in-out transform hover:-translate-y-1'>
          <img
            src={img3}
            alt="Meals"
            className='w-full h-64 object-cover rounded-lg shadow-md transition duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-green-400 group-hover:shadow-lg'
          />
          <div className='transition-opacity duration-700 opacity-0 group-hover:opacity-100'>
            <h2 className='text-4xl font-bold text-amber-500'>Meals</h2>
            <p className='mt-3 text-gray-300'>
              Hearty and flavorful dishes prepared with fresh ingredients, perfect for any appetite.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;