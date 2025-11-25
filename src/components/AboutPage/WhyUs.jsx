import React from "react";
import { FaLeaf, FaMugHot, FaHeart, FaUsers } from "react-icons/fa";

export default function WhyUs() {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold text-green-700">
          Why Choose Us?
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-l leading-relaxed">
          We combine quality beans, expert craftsmanship, and a warm atmosphere
          to create a coffee experience that feels both premium and personal.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          <div className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-110">
            <FaLeaf className="text-green-600 text-4xl " />
            <h3 className="mt-3 text-m font-bold text-green-700">
              Premium Beans
            </h3>
            <p className="text-s text-gray-600 mt-1">
              Freshly sourced, high-quality Arabica beans.
            </p>
          </div>
          <div className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-110">
            <FaMugHot className="text-green-600 text-4xl " />
            <h3 className="mt-3 text-m font-bold text-green-700">
              Fresh Brews
            </h3>
            <p className="text-s text-gray-600 mt-1">
              Every cup brewed to perfection, always fresh.
            </p>
          </div>
          <div className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-110">
            <FaHeart className="text-green-600 text-4xl " />
            <h3 className="mt-3 text-m font-bold text-green-700">
              Cozy Atmosphere
            </h3>
            <p className="text-s text-gray-600 mt-1">
              A warm, relaxing environment for every moment.
            </p>
          </div>
          <div className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-110">
            <FaUsers className="text-green-600 text-4xl " />
            <h3 className="mt-3 text-m font-bold text-green-700">
              Friendly Staff
            </h3>
            <p className="text-s text-gray-600 mt-1">
              Baristas who care about your experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
