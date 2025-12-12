import React, { useContext, useState } from 'react';
import { MenuContext } from '../Context/MenuContext.jsx';
import { categoryItem } from '../asset';

const Menu = () => {
  const { products } = useContext(MenuContext);
  const [category, setCategory] = useState("All");

  return (
    <div className='px-4 py-12 max-w-6xl mx-auto'>
      {/* Header */}
      <div className='text-center mb-6'>
        <h1 className='text-4xl font-bold text-white'>Discover Our Menu</h1>
      </div>

      {/* Category Buttons */}
      <div className='flex flex-wrap justify-center gap-4 mb-8'>
        {categoryItem.map((item, index) => (
          <button
            key={index}
            onClick={() =>
              setCategory((prev) =>
                prev === item.category_title ? "All" : item.category_title
              )
            }
            className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 border-2 ${
              category === item.category_title
                ? 'bg-amber-500 text-black border-dashed shadow-md scale-105'
                : 'bg-amber-900 text-white border-transparent hover:bg-amber-700 hover:text-black hover:scale-105 hover:shadow-sm'
            }`}
          >
            {item.category_title}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {products.length > 0 ? (
          products
            .filter(
              (product) =>
                category === "All" || category === product.category
            )
            .map((product) => (
              <div
                key={product._id}
                className='flex items-center gap-6 p-4 border-2 border-dashed border-gray-600 rounded-xl transition duration-300 hover:shadow-lg'
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className='w-24 h-24 object-cover rounded-full'
                />
                <div className='flex-1'>
                  <div className='flex justify-between items-center border-b border-dotted border-gray-400 pb-1 mb-2'>
                    <h3 className='text-lg font-semibold text-white'>
                      {product.name}
                    </h3>
                    <span className='text-lg font-semibold text-amber-400'>
                      R{product.price}
                    </span>
                  </div>
                  <p className='text-sm text-gray-400'>
                    Wholesome meals that balance taste and nutrition, inspired
                    by both local and global flavors.
                  </p>
                </div>
              </div>
            ))
        ) : (
          <p className='text-sm col-span-2 text-gray-400'>
            No items available
          </p>
        )}
      </div>
    </div>
  );
};

export default Menu;
