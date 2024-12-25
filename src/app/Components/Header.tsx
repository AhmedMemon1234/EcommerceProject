'use client';

import { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaStore, FaInfoCircle, FaPhone } from 'react-icons/fa';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <div className="text-2xl font-bold">
          <Link href="/">
            <li className="flex items-center space-x-2">
              <FaStore className="text-3xl text-blue-500" />
              <span>Cruse Store</span>
            </li>
          </Link>
        </div>

        <button
          className="block md:hidden text-2xl transition-transform duration-300 hover:scale-110"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/">
            <li className="flex items-center space-x-2 hover:text-gray-400 transition-colors duration-300">
              <FaHome />
              <span>Home</span>
            </li>
          </Link>
          <Link href="/Shop">
            <li className="flex items-center space-x-2 hover:text-gray-400 transition-colors duration-300">
              <FaStore />
              <span>Shop</span>
            </li>
          </Link>
          <Link href="/About">
            <li className="flex items-center space-x-2 hover:text-gray-400 transition-colors duration-300">
              <FaInfoCircle />
              <span>About</span>
            </li>
          </Link>
          <Link href="/Contact">
            <li className="flex items-center space-x-2 hover:text-gray-400 transition-colors duration-300">
              <FaPhone />
              <span>Contact</span>
            </li>
          </Link>
        </nav>
      </div>

      <div
        className={`absolute top-0 left-0 w-full bg-gray-800 text-white shadow-lg transform ${
          isMenuOpen ? 'translate-y-12' : '-translate-y-full'
        } transition-transform duration-500 ease-in-out md:hidden`} 
      >
        <nav className="flex flex-col items-center space-y-6 py-8">
          <Link href="/">
            <li
              onClick={toggleMenu}
              className="flex items-center space-x-2 text-lg hover:text-gray-400 transition-colors duration-300"
            >
              <FaHome />
              <span>Home</span>
            </li>
          </Link>
          <Link href="/shop">
            <li
              onClick={toggleMenu}
              className="flex items-center space-x-2 text-lg hover:text-gray-400 transition-colors duration-300"
            >
              <FaStore />
              <span>Shop</span>
            </li>
          </Link>
          <Link href="/about">
            <li
              onClick={toggleMenu}
              className="flex items-center space-x-2 text-lg hover:text-gray-400 transition-colors duration-300"
            >
              <FaInfoCircle />
              <span>About</span>
            </li>
          </Link>
          <Link href="/contact">
            <li
              onClick={toggleMenu}
              className="flex items-center space-x-2 text-lg hover:text-gray-400 transition-colors duration-300"
            >
              <FaPhone />
              <span>Contact</span>
            </li>
          </Link>
        </nav>
      </div>
    </header>
  );
}
