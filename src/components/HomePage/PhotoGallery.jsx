import React from "react";

export default function PhotoGallery() {
  return (
    <div className="flex flex-col md:flex-row gap-2 shadow-md p-2 hover:shadow-emerald-800 border border-green-300 max-w-7xl mx-auto">
      <img
        src="https://images.pexels.com/photos/16716142/pexels-photo-16716142.jpeg"
        alt="Coffee shop interior"
        className="object-cover w-full md:w-1/3 h-40 md:h-80 border border-gray-500 rounded-xl transition-transform duration-300 hover:scale-95"
      />
      <img
        src="https://images.pexels.com/photos/5987088/pexels-photo-5987088.jpeg"
        alt="Coffee preparation"
        className="object-cover w-full md:w-1/3 h-40 md:h-80 border border-gray-500 rounded-xl transition-transform duration-300 hover:scale-95"
      />
      <img
        src="https://images.pexels.com/photos/5192032/pexels-photo-5192032.jpeg"
        alt="Coffee cup"
        className="object-cover w-full md:w-1/3 h-40 md:h-80 border border-gray-500 rounded-xl transition-transform duration-300 hover:scale-95"
      />
    </div>
  );
}
