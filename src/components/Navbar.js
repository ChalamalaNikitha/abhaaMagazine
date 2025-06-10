"use client";

import { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="websiteBackground shadow-sm border-b sticky top-0 z-50">
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 py-4 flex justify-between items-center">
        {/* Left: Logo + Nav */}
        <div className="flex items-center space-x-6">
          <img
            src="/logo.png"
            alt="Aabha Magazine"
            className="h-12 w-auto"
          />
          <ul className="hidden md:flex space-x-6 text-black font-medium">
            {["Home", "Monthly Edition", "About Us", "Article", "Contact Us"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-[#9b2c89] transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Search Bar */}
        <div className="hidden md:flex items-center">
          <input
            type="text"
            placeholder="Search in हिन्दी"
            className="border border-gray-300 rounded-l-md px-6 py-2 text-sm focus:outline-none w-[300px]"
          />
          <button className="bg-[#9b2c89] p-3 rounded-r-md hover:bg-[#7c246e] transition">
            <FaSearch className="text-white text-sm" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <FaTimes className="text-xl text-[#9b2c89]" />
            ) : (
              <FaBars className="text-xl text-[#9b2c89]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2 text-black font-medium">
            {["Home", "Monthly Edition", "About Us", "Article", "Contact Us"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block hover:text-[#9b2c89] transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Search */}
          <div className="flex mt-3">
            <input
              type="text"
              placeholder="Search in हिन्दी"
              className="border border-gray-300 rounded-l-md px-4 py-1 text-sm focus:outline-none w-full"
            />
            <button className="bg-[#9b2c89] p-2 rounded-r-md hover:bg-[#7c246e] transition">
              <FaSearch className="text-white text-sm" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
