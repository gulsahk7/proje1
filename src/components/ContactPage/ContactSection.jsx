import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
export default function ContactSection() {
  return (
    <section className="w-full bg-white py-14 border border-gray-100">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-5 rounded-md p-4 md:p-8 border border-green-700 shadow-md shadow-emerald-800 flex flex-col items-center text-center">
          <p className="text-center text-sm md:text-lg uppercase font-bold text-green-700">
            Contact Info
          </p>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <FaMapMarkerAlt className="text-green-700 text-xl shrink-0" />
            <p className="text-sm md:text-base text-gray-700 text-left">
              Bahçelievler, Prof. Muammer Aksoy Cd
              <br />
              No:37/A, 06490 Çankaya/Ankara
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <FaPhoneAlt className="text-green-700 text-xl shrink-0" />
            <p className="text-sm md:text-base text-gray-700">+90 536 714 11 22</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <FaEnvelope className="text-green-700 text-xl shrink-0" />
            <p className="text-sm md:text-base text-gray-700">support@espressocheck.com</p>
          </div>
          <div className="mt-6 rounded-xl border border-green-700 overflow-hidden w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.581011346779!2d32.8272692!3d39.9283917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34fa94f6331f1%3A0xd887e8db29cfa41d!2sEspresso%20Check!5e0!3m2!1str!2str!4v1763654725536!5m2!1str!2str"
              className="w-full h-[200px] md:h-[260px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <form className="space-y-5 rounded-md p-4 md:p-8 border border-green-700 shadow-md shadow-emerald-800 ">
          <p className="text-center text-sm md:text-lg uppercase font-bold text-green-700">
            Send Us Message
          </p>
          <div className="flex flex-col text-left">
            <label className="font-medium text-sm md:text-base text-gray-700">Name*</label>
            <input
              type="text"
              className="mt-1 px-3 py-2 border rounded-md outline-green-600 text-sm"
              placeholder="Your name"
            />
          </div>
          <div className="flex flex-col text-left">
            <label className="font-medium text-sm md:text-base text-gray-700">Email*</label>
            <input
              type="email"
              className="mt-1 px-3 py-2 border rounded-md outline-green-600 text-sm"
              placeholder="yourmail@example.com"
            />
          </div>
          <div className="flex flex-col text-left">
            <label className="font-medium text-sm md:text-base text-gray-700">Message*</label>
            <textarea
              className="mt-1 px-3 py-2 border rounded-md outline-green-600 min-h-[120px]"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
