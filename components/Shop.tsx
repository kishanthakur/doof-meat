import React from "react";
import Image from "next/image";

function Shop() {
  return (
    <>
      <div className="flex mt-10 max-w-screen-xl px-4 py-1 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div>
          <div className="font-bold font-serif text-2xl">
            Shop by categories
          </div>
          <p className="font-sans">Freshest meats and much more</p>
          <div className="flex flex-col sm:flex-row justify-center items-center">
            <div className="mt-12 mr-4 max-w-sm bg-red-50 border border-gray-200 rounded-lg shadow ">
              <a href="#">
                <Image
                  className="rounded-t-lg"
                  src="/category-1.png"
                  alt=""
                  width={400}
                  height={30}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Poultry
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">
                  Domesticated birds like chicken known for lean protein and
                  versatility in dishes. A healthier meat alternative with
                  global culinary appeal.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-red-600 rounded-lg hover:bg-red-400 focus:ring-4 focus:outline-none"
                >
                  View Products
                </a>
              </div>
            </div>

            <div className="mt-12 mr-4 max-w-sm bg-red-50 border border-gray-200 rounded-lg shadow ">
              <a href="#">
                <Image
                  className="rounded-t-lg"
                  src="/category-2.png"
                  alt=""
                  width={400}
                  height={30}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Mutton
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">
                  Meat from mature sheep, offering a rich, robust flavor.
                  Celebrated in global cuisines, it&apos;s best slow-cooked for
                  tenderness and taste.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-red-600 rounded-lg hover:bg-red-400 focus:ring-4 focus:outline-none"
                >
                  View Products
                </a>
              </div>
            </div>

            <div className="mt-12 max-w-sm bg-red-50 border border-gray-200 rounded-lg shadow ">
              <a href="#">
                <Image
                  className="rounded-t-lg"
                  src="/category-3.png"
                  alt=""
                  width={400}
                  height={30}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Fish & Sea Meat
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">
                  A variety of seafood from oceans and lakes, like salmon and
                  lobster. Known for health benefits and a distinct taste.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-red-600 rounded-lg hover:bg-red-400 focus:ring-4 focus:outline-none"
                >
                  View Products
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
