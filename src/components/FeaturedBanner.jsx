import React from "react";

const FeaturedBanner = ({ featuredProduct }) => {
  if (!featuredProduct) {
    return null; 
  }

  return (
    <div className="relative bg-white mb-6 flex flex-col items-center p-4 rounded-md shadow-sm">
      <h2 className="text-2xl font-bold mb-2">Featured Sneakers</h2>
      <img
        src={featuredProduct.image}
        alt={featuredProduct.title}
        className="w-48 h-48 object-cover mb-2"
      />
      <h3 className="text-xl font-semibold">{featuredProduct.title}</h3>
      <p className="text-gray-700">
        Only <span className="font-bold">${featuredProduct.price}</span>!
      </p>
      <p className="text-sm mt-2 text-gray-500 text-center">
        Get your hands on our featured sneakers of the week!
      </p>
    </div>
  );
};

export default FeaturedBanner;