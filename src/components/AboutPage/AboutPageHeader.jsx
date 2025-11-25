import React from "react";

export default function AboutPageHeader() {
  return (
    <header className="w-full bg-white py-10">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-2xl md:text-3xl uppercase tracking-wider text-green-700 font-bold">
          Espresso Check
        </p>
        <h1 className="mt-4 text-xl md:text-2xl font-medium text-gray-600">
          Crafted coffee, thoughtful spaces, genuine connections.
        </h1>
        <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed mx-auto max-w-5xl">
          Espresso Check is a cozy coffee brand focused on rich flavors, warm
          atmospheres, and simple moments of joy. We carefully source our beans
          and design every cup to make your day feel a little calmer and a lot
          more flavorful.
        </p>
      </div>
    </header>
  );
}
