"use client";
import React, { useState } from "react";
import { FaMugHot, FaBars, FaTimes } from "react-icons/fa";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white/60 backdrop-blur-xl border-b border-green-400 ">
      <div className="flex justify-between max-w-6xl mx-auto py-2 px-4 md:px-6 items-center text-base">
        <a href="/" className="flex items-center gap-3 text-green-700 group">
          <div
            className="flex items-center justify-center w-10 h-10 
               transition-transform  duration-300 
               group-hover:scale-150 group-hover:text-green-600 "
          >
            <FaMugHot className="text-xl" />
          </div>

          <p className="text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-green-600">
            Espresso <span className="font-medium">Check</span>
          </p>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium text-green-700">
          <a
            href="/"
            className="relative pb-1 hover:text-green-600 transition-all duration-300
            after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0
            after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </a>
          <a
            href="/about"
            className="relative pb-1 hover:text-green-600 transition-all duration-300
            after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0
            after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>
          <a
            href="/contact"
            className="relative pb-1 hover:text-green-600 transition-all duration-300
            after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0
            after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-green-700 hover:text-green-600 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md border-t border-green-400">
          <div className="flex flex-col gap-4 font-medium text-green-700 p-4">
            <a
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-green-600 transition-colors"
            >
              Home
            </a>
            <a
              href="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-green-600 transition-colors"
            >
              About
            </a>
            <a
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-green-600 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
