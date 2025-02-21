import React, { useState, useEffect } from "react";
import Storefront from "./components/StoreFront";
import FeaturedBanner from "./components/FeaturedBanner";;
import productsData from "./data/products.json";

function App() {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Fetch products from JSON (you can also just use them directly if local)
  useEffect(() => {
    setProducts(productsData);
  }, []);

  // Toggle Favorite Function
  const handleToggleFavorite = (productId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(productId)) {
        // Remove from favorites
        return prevFavorites.filter((id) => id !== productId);
      } else {
        // Add to favorites
        return [...prevFavorites, productId];
      }
    });
  };

  // Let's pick the first product in our JSON for the banner
  const featuredProduct = products.length > 0 ? products[0] : null;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-full mx-auto p-8">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold">Sneaker Store</h1>
        </header>

        {/* Featured Banner */}
        <FeaturedBanner featuredProduct={featuredProduct} />

        {/* Storefront displaying all products */}
        <Storefront
          products={products}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
        />
      </div>  
    </div>
  );
}

export default App;