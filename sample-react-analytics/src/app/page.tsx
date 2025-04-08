"use client";

import { useState } from "react";

export default function Home() {
  const [bananaCount, setBananaCount] = useState(0);
  const [showBanana, setShowBanana] = useState(false);

  const addToCart = () => {
    setBananaCount(bananaCount + 1);
    setShowBanana(true);
    setTimeout(() => setShowBanana(false), 500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 gap-6 font-serif">
      <h1 className="text-5xl font-bold text-yellow-600">Brock's banana store</h1>
      
      <p className="text-lg">the best bananas in the business</p>
      
      <div className="flex items-center gap-4">
        <button 
          onClick={addToCart}
          className="bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-500 transition-colors text-black"
        >
          Add banana to cart
        </button>
        <div className="flex items-center">
          <span>bananas in cart: {bananaCount}</span>
          {showBanana && (
            <span className="ml-2 animate-bounce">🍌</span>
          )}
        </div>
      </div>
    </div>
  );
}