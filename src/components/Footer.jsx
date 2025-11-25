import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInfo,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full bg-gray-100/80 backdrop-blur-md py-8 text-gray-700">
      <div className="flex justify-center gap-6 text-sm font-medium flex-wrap">
        <a
          className="relative pb-1 hover:text-green-600 transition-all duration-300
            after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0
            after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
          href="/"
        >
          Home
        </a>
        <a
          className="relative pb-1 hover:text-green-600 transition-all duration-300
            after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0
            after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
          href="/about"
        >
          About
        </a>
        <a
          className="relative pb-1 hover:text-green-600 transition-all duration-300
            after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0
            after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
          href="/contact"
        >
          Contact
        </a>
      </div>
      <div className="flex justify-center gap-4 md:gap-8 mt-6 flex-wrap">
        <a
          href="https://facebook.com"
          className="text-gray-600 hover:text-green-600 ease-in-out transition-transform duration-300 hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF size={23} />
        </a>
        <a
          href="https://instagram.com"
          className="text-gray-600 hover:text-green-600 ease-in-out transition-transform duration-300 hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={23} />
        </a>
        <a
          href="https://x.com"
          className="text-gray-600 hover:text-green-600 ease-in-out transition-transform duration-300 hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={23} />
        </a>
        <a
          href="https://github.com/"
          className="text-gray-600 hover:text-green-600 ease-in-out transition-transform duration-300 hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={23} />
        </a>
        <a
          href="https://www.youtube.com/"
          className="text-gray-600 hover:text-green-600 ease-in-out transition-transform duration-300 hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube size={23} />
        </a>
      </div>
      <div>
        <p className="text-center mt-6 text-xs text-gray-600 tracking-wide">
          © {new Date().getFullYear()} Espresso Check — All rights reserved.
        </p>
      </div>
    </div>
  );
}
