"use client";
import { useState } from "react";

export default function VipSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
          VIP Benefits Await You
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Unlock exclusive perks and enjoy personalized VIP experiences designed just for you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div
          onClick={() => setActiveCategory("rewards")}
          className={`relative p-8 cursor-pointer transition-all duration-300 transform rounded-full bg-white text-center border-2 border-gray-200 shadow-xl hover:scale-105 hover:border-blue-500 ${
            activeCategory === "rewards" ? "scale-105 shadow-2xl border-blue-500" : ""
          }`}
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-500">Exclusive Rewards</h3>
          <p className="text-base">Earn points with every purchase for VIP-only rewards.</p>
        </div>

        <div
          onClick={() => setActiveCategory("early-access")}
          className={`relative p-8 cursor-pointer transition-all duration-300 transform rounded-full bg-white text-center border-2 border-gray-200 shadow-xl hover:scale-105 hover:border-green-500 ${
            activeCategory === "early-access" ? "scale-105 shadow-2xl border-green-500" : ""
          }`}
        >
          <h3 className="text-xl font-semibold mb-4 text-green-500">Early Access</h3>
          <p className="text-base">Get early access to new collections and limited-edition items.</p>
        </div>

        <div
          onClick={() => setActiveCategory("priority-support")}
          className={`relative p-8 cursor-pointer transition-all duration-300 transform rounded-full bg-white text-center border-2 border-gray-200 shadow-xl hover:scale-105 hover:border-purple-500 ${
            activeCategory === "priority-support" ? "scale-105 shadow-2xl border-purple-500" : ""
          }`}
        >
          <h3 className="text-xl font-semibold mb-4 text-purple-500">Priority Support</h3>
          <p className="text-base">Enjoy faster support and VIP customer service.</p>
        </div>

        <div
          onClick={() => setActiveCategory("personalized-service")}
          className={`relative p-8 cursor-pointer transition-all duration-300 transform rounded-full bg-white text-center border-2 border-gray-200 shadow-xl hover:scale-105 hover:border-yellow-500 ${
            activeCategory === "personalized-service" ? "scale-105 shadow-2xl border-yellow-500" : ""
          }`}
        >
          <h3 className="text-xl font-semibold mb-4 text-yellow-500">Personalized Service</h3>
          <p className="text-base">Get personalized recommendations and one-on-one consultations.</p>
        </div>
      </div>

      {activeCategory && (
        <div className="mt-12 p-6 bg-white rounded-lg shadow-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            {activeCategory === "rewards" && "Exclusive Rewards"}
            {activeCategory === "early-access" && "Early Access"}
            {activeCategory === "priority-support" && "Priority Support"}
            {activeCategory === "personalized-service" && "Personalized Service"}
          </h3>
          <p className="text-lg text-gray-700">
            {activeCategory === "rewards"
              ? "Earn points on every purchase, redeemable for exclusive rewards like discounts and VIP gifts."
              : activeCategory === "early-access"
              ? "Be the first to shop new collections, exclusive drops, and limited-edition items before anyone else."
              : activeCategory === "priority-support"
              ? "VIP members receive priority customer service, ensuring fast and efficient support at all times."
              : "Enjoy a tailored shopping experience with personal product recommendations and VIP-only perks."}
          </p>
        </div>
      )}
    </section>
  );
}
