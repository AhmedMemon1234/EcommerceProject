"use client";
import { useState } from "react";

export default function VipSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      className="relative bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 text-white py-20"
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
          Unlock Exclusive Benefits with Our VIP Program
        </h2>
        <p className="text-lg md:text-xl mb-12">
          Join our VIP program and gain access to a curated shopping experience with exclusive offers and early releases.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl text-center">
            <div className="mb-6 text-4xl text-yellow-400">
              <i className="fas fa-gift"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Exclusive Discounts</h3>
            <p>Enjoy VIP-only discounts on a wide range of products updated regularly.</p>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl text-center">
            <div className="mb-6 text-4xl text-blue-400">
              <i className="fas fa-star"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Early Access</h3>
            <p>Be the first to shop new collections and limited-edition releases.</p>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl text-center">
            <div className="mb-6 text-4xl text-pink-400">
              <i className="fas fa-user-secret"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Personalized Service</h3>
            <p>Get personalized product recommendations and a tailored shopping experience.</p>
          </div>

          {showMore && (
            <>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl text-center">
                <div className="mb-6 text-4xl text-green-400">
                  <i className="fas fa-crown"></i>
                </div>
                <h3 className="text-xl font-semibold mb-4">Priority Support</h3>
                <p>Access our priority support team for fast and exclusive customer service.</p>
              </div>

              <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl text-center">
                <div className="mb-6 text-4xl text-red-400">
                  <i className="fas fa-box-open"></i>
                </div>
                <h3 className="text-xl font-semibold mb-4">Free Shipping</h3>
                <p>Get free shipping on all orders as a VIP member.</p>
              </div>

              <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl text-center">
                <div className="mb-6 text-4xl text-purple-400">
                  <i className="fas fa-gem"></i>
                </div>
                <h3 className="text-xl font-semibold mb-4">Exclusive Gifts</h3>
                <p>Receive VIP-only gifts and rewards throughout the year.</p>
              </div>
            </>
          )}
        </div>

        <div className="mt-6">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-8 py-4 bg-black text-white rounded-lg text-lg font-semibold shadow-xl hover:scale-105 transition-transform"
          >
            {showMore ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
}
