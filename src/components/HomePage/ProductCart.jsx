import Link from "next/link";
import React from "react";

export default function ProductCart() {
  return (
    <div className="space-y-3">
      <p className="text-center text-green-700 text-2xl font-medium ">
        Coffee Products
      </p>
      <div className="max-w-4xl mx-auto mt-4">
        <p className="text-center text-gray-600 text-lg">
          Discover our handcrafted coffee selections, freshly prepared with rich
          flavors and premium ingredients to elevate every moment of your day.
        </p>
      </div>
      <div className="px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="w-full bg-white rounded-xl shadow-md p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-emerald-800 border border-green-300">
            <img
              src="https://images.pexels.com/photos/3219809/pexels-photo-3219809.jpeg"
              alt=""
              className="w-full h-64 object-cover rounded-md"
            />
            <p className="text-center text-green-700 mt-2 font-medium text-xl">
              Arabica Beans
            </p>
            <p className="mt-2 text-sm text-gray-700 text-center">
              A rich and aromatic Arabica blend with smooth chocolate notes and
              a naturally sweet finish. Perfect for espresso, pour-over, or
              classic drip brewing.
            </p>
            <p className="text-center text-green-700 mt-3">$14.90</p>
            <div className="mt-4 flex justify-center">
              <div className="inline-flex items-stretch overflow-hidden rounded-lg border border-gray-300 bg-gray-100">
                <input
                  className="w-30 bg-transparent px-3 py-2 text-sm outline-none"
                  type="number"
                  defaultValue={1}
                  min={1}
                />
                <Link
                  href="#"
                  className=" w-25 flex items-center justify-center bg-green-500 px-1 py-2 text-sm font-medium text-white whitespace-nowrap hover:bg-green-700 transition-colors duration-200"
                >
                  Add To Cart
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full bg-white rounded-xl shadow-md p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-emerald-800 border border-green-300">
            <img
              src="https://images.pexels.com/photos/2074122/pexels-photo-2074122.jpeg"
              alt="Caramel Latte"
              className="w-full h-64 object-cover rounded-md"
            />
            <p className="text-center text-green-700 mt-2 font-medium text-xl">
              Caramel Latte
            </p>
            <p className="mt-2 text-sm text-gray-700 text-center">
              A creamy caramel latte paired with crunchy hazelnut biscotti. A
              warm, cozy treat crafted for slow mornings and peaceful coffee
              breaks.
            </p>
            <p className="text-center text-green-700 mt-3">$5.45</p>
            <div className="mt-4 flex justify-center">
              <div className="inline-flex items-stretch overflow-hidden rounded-lg border border-gray-300 bg-gray-100">
                <input
                  className="w-30 bg-transparent px-3 py-2 text-sm outline-none"
                  type="number"
                  defaultValue={1}
                  min={1}
                />
                <Link
                  href="#"
                  className=" w-25 flex items-center justify-center bg-green-500 px-1 py-2 text-sm font-medium text-white whitespace-nowrap hover:bg-green-700 transition-colors duration-200"
                >
                  Add To Cart
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full bg-white rounded-xl shadow-md p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-emerald-800 border border-green-300">
            <img
              src="https://images.pexels.com/photos/3750709/pexels-photo-3750709.jpeg"
              alt="Spiced Tea"
              className="w-full h-64 object-cover rounded-md"
            />
            <p className="text-center text-green-700 mt-2 font-medium text-xl">
              Spiced Tea
            </p>
            <p className="mt-2 text-sm text-gray-700 text-center">
              A fragrant black tea infused with cinnamon, star anise, and winter
              spices. Served with buttery holiday cookies for the perfect
              seasonal comfort.
            </p>
            <p className="text-center text-green-700 mt-3">$3.90</p>
            <div className="mt-4 flex justify-center">
              <div className="inline-flex items-stretch overflow-hidden rounded-lg border border-gray-300 bg-gray-100">
                <input
                  className="w-30 bg-transparent px-3 py-2 text-sm outline-none"
                  type="number"
                  defaultValue={1}
                  min={1}
                />
                <Link
                  href="#"
                  className=" w-25 flex items-center justify-center bg-green-500 px-1 py-2 text-sm font-medium text-white whitespace-nowrap hover:bg-green-700 transition-colors duration-200"
                >
                  Add To Cart
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full bg-white rounded-xl shadow-md p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-emerald-800 border border-green-300">
            <img
              src="https://images.pexels.com/photos/10026524/pexels-photo-10026524.png"
              alt="Turkish Coffee"
              className="w-full h-64 object-cover rounded-md"
            />
            <p className="text-center text-green-700 mt-2 font-medium text-xl">
              Turkish Coffee
            </p>
            <p className="mt-2 text-sm text-gray-700 text-center">
              Authentic Turkish coffee brewed to perfection, served with light
              buttery cookies. Rich, bold, and smooth — a classic taste of
              tradition.
            </p>
            <p className="text-center text-green-700 mt-3">$4.20</p>
            <div className="mt-4 flex justify-center">
              <div className="inline-flex items-stretch overflow-hidden rounded-lg border border-gray-300 bg-gray-100">
                <input
                  className="w-30 bg-transparent px-3 py-2 text-sm outline-none"
                  type="number"
                  defaultValue={1}
                  min={1}
                />
                <Link
                  href="#"
                  className=" w-25 flex items-center justify-center bg-green-500 px-1 py-2 text-sm font-medium text-white whitespace-nowrap hover:bg-green-700 transition-colors duration-200"
                >
                  Add To Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
