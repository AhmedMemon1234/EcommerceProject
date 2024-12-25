"use client";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function VipFooter() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-4">
          <h3 className="text-2xl font-semibold mb-2">
            Join Our VIP Program
          </h3>
          <p className="text-sm">
            Get exclusive rewards early access and VIP-only offers.
          </p>
        </div>

        <div className="text-center mb-4">
          <div className="flex justify-center space-x-6">
            <motion.a
              href="#"
              className="text-2xl text-white hover:text-blue-400"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              href="#"
              className="text-2xl text-white hover:text-blue-400"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href="#"
              className="text-2xl text-white hover:text-blue-400"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <FaInstagram />
            </motion.a>
          </div>
        </div>

        <div className="text-center text-sm">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-white hover:text-blue-400">Privacy Policy</a>
            <a href="#" className="text-white hover:text-blue-400">Terms of Service</a>
            <a href="#" className="text-white hover:text-blue-400">Contact Us</a>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
