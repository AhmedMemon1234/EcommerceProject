"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function VipSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
  };

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
          Discover Our Premium Watches Collection
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Elevate your style with exclusive VIP access to luxury timepieces and special rewards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          className="col-span-1 md:col-span-3 bg-white rounded-lg shadow-xl overflow-hidden relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="/watch1.jpg"
            alt="Card Image"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
            <h3 className="text-xl font-semibold">Luxury Timepieces</h3>
            <p className="text-sm mt-2">Explore watches that blend precision style and exclusivity.</p>
          </div>
        </motion.div>

        <motion.div
          className="col-span-1 bg-white rounded-lg shadow-xl overflow-hidden relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="/watch2.jpg"
            alt="Card Image"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
            <h3 className="text-xl font-semibold">Timeless Elegance</h3>
            <p className="text-sm mt-2">Get early access to our finest collection of premium watches.</p>
          </div>
        </motion.div>

        <motion.div
          className="col-span-1 bg-white rounded-lg shadow-xl overflow-hidden relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="/watch3.jpg"
            alt="Card Image"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
            <h3 className="text-xl font-semibold">Precision Engineering</h3>
            <p className="text-sm mt-2">Discover watches crafted with the highest level of craftsmanship.</p>
          </div>
        </motion.div>

        <motion.div
          className="col-span-1 bg-white rounded-lg shadow-xl overflow-hidden relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="/watch4.jpg"
            alt="Card Image"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
            <h3 className="text-xl font-semibold">VIP Exclusivity</h3>
            <p className="text-sm mt-2">Get VIP access to limited-edition watch releases and gifts.</p>
          </div>
        </motion.div>
      </div>

<div className="bg-gray-100 py-12 mt-20 rounded-lg">
  <div className="text-center mb-6">
    <h2 className="text-2xl md:text-3xl font-semibold mb-4">Stay Updated with Our Latest Offers</h2>
    <p className="text-lg mb-8">
      Subscribe to receive exclusive updates, new arrivals, and VIP offers directly in your inbox.
    </p>
  </div>

  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-4xl mx-auto">
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter your email"
      className="px-6 py-3 w-full sm:w-80 md:w-96 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      required
    />
    <motion.button
      type="submit"
      className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      Subscribe
    </motion.button>
  </form>
</div>

    </section>
  );
}
