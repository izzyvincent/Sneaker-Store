import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"; // If using react-icons

const ProductCard = ({ product, isFavorited, onToggleFavorite }) => {
  return (
    <div className="border p-4 flex flex-col items-center justify-center shadow-md rounded-md">
      <img src={product.image} alt={product.title} className="w-32 h-32 object-cover mb-2" />
      <h2 className="font-bold text-lg">{product.title}</h2>
      <p className="text-gray-600 mb-2">${product.price}</p>

      {/* Favorite Button */}
      <button
        onClick={() => onToggleFavorite(product.id)}
        className="flex items-center gap-1"
      >
        {isFavorited ? (
          <AiFillHeart className="text-red-500" />
        ) : (
          <AiOutlineHeart className="text-gray-400" />
        )}
        <span className="text-sm">Favorite</span>
      </button>
    </div>
  );
};

export default ProductCard;