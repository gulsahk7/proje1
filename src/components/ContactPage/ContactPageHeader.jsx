import React from "react";

export default function ContactPageHeader() {
  return (
    <header className="w-full bg-white py-8">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-2xl md:text-3xl uppercase tracking-wider text-green-700 font-bold">
          Contact
        </p>
        <h1 className="mt-4 text-xl md:text-2xl font-medium text-gray-600">
          Get in touch with Espresso Check
        </h1>
        <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed mx-auto max-w-5xl">
          Have a question, feedback, or collaboration idea? We'd love to hear
          from you. Send us a message and we'll get back to you as soon as
          possible.
        </p>
      </div>
    </header>
  );
}
