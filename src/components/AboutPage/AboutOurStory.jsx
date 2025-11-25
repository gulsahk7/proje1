import React from "react";

export default function AboutOurStory() {
  return (
    <section className="w-full py-20 hover:shadow-gray-400 border border-gray-100">
      <div className="max-w-7xl mx-auto px-4 grid gap-8 md:gap-20 md:grid-cols-2 items-center">
        <div className="overflow-hidden rounded-md shadow-md p-1 hover:shadow-emerald-800 border border-green-300 ">
          <img
            src="https://images.pexels.com/photos/1752806/pexels-photo-1752806.jpeg"
            alt="Barista preparing coffee"
            className="w-full h-40 md:h-72 object-cover rounded-md transition-transform duration-300 hover:scale-95"
          />
        </div>
        <div>
          <p className="text-xl md:text-2xl text-center font-semibold uppercase text-green-700">
            Our Story
          </p>

          <h2 className="mt-4 text-base md:text-lg text-center font-medium text-gray-700">
            From a simple espresso bar to a cozy coffee community.
          </h2>

          <p className="mt-2 text-sm md:text-base text-center text-gray-600 leading-relaxed">
            Espresso Check started with a small idea: create a place where
            people can slow down, breathe, and enjoy a truly good cup of coffee.
            We carefully source our beans, respect every brewing method, and
            focus on warmth in both flavor and atmosphere. Today, every drink we
            make is a mix of craftsmanship and care – served to students,
            freelancers, friends, and anyone who needs a quiet moment between
            the noise of the day.
          </p>
        </div>
      </div>
    </section>
  );
}
