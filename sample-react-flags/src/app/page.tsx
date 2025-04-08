"use client";

import { StatsigProvider, useFeatureGate, useGateValue, useStatsigClient } from "@statsig/react-bindings";
import { Component, useState } from "react";

export function MyComponent() {
  const [bananaCount, setBananaCount] = useState(0);
  const [appleCount, setAppleCount] = useState(0);
  const [showBanana, setShowBanana] = useState(false);
  const [showApple, setShowApple] = useState(false);

  const addToCart = () => {
    setBananaCount(bananaCount + 1);
    setShowBanana(true);
    setTimeout(() => setShowBanana(false), 500);
  };

  const addAppleToCart = () => {
    setAppleCount(appleCount + 1);
    setShowApple(true);
    setTimeout(() => setShowApple(false), 500);
  };

  const gate = useFeatureGate('apple_gate');
  
  const gateValue = gate.value;
  console.log("gate");
  console.log(gate.details);
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
        {gateValue && (
          <button 
            onClick={addAppleToCart}
            className="bg-red-400 px-4 py-2 rounded hover:bg-red-500 transition-colors text-black"
        >
          Add apple to cart
        </button>
        )}
        <div className="flex items-center">
          <span>bananas in cart: {bananaCount}</span>
          {showBanana && (
            <span className="ml-2 animate-bounce">🍌</span>
          )}
        </div>
        {gateValue && (
          <div className="flex items-center">
            <span>apples in cart: {appleCount}</span>
            {showApple && (
              <span className="ml-2 animate-bounce">🍎</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
    <StatsigProvider sdkKey="client-yr1tFsoqiCicrhc8p4Ylbn9oDjAD2ToPtBtDijsWSKQ" user={{}}
    loadingComponent={
        <div style={{ height: 100, width: 300, padding: 16 }}>Loading...</div>
      }
    >
      <MyComponent />
    </StatsigProvider>
    </>
  );
};