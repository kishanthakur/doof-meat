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
          <div className="hidden lg:flex flex-col sm:flex-row justify-center items-center">
            <div className="mt-12 mr-4 max-w-sm bg-red-50 border border-white rounded-lg shadow ">
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

            <div className="mt-12 mr-4 max-w-sm bg-red-50 border border-white rounded-lg shadow ">
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

            <div className="mt-12 mr-4 max-w-sm bg-red-50 border border-white rounded-lg shadow">
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

          <div className="mt-5 lg:hidden">
            <a
              href="#"
              className="mb-6 flex flex-row items-center bg-red-50 border border-white rounded-lg shadow max-w-xl"
            >
              <Image
                className="object-cover rounded-t-lg h-auto w-48 rounded-l-lg"
                src="/category-1-1-1-1.png"
                alt="mockup"
                width={100}
                height={30}
              />
              <div className="flex flex-col justify-between px-3 leading-normal">
                <h5 className="mb-2 mt-1 text-2xl font-bold tracking-tight text-black">
                  Poultry
                </h5>
                <p className="mb-3 font-normal text-gray-700">
                  Birds like chicken known for lean protein and versatility in
                  dishes. A healthier meat alternative with global culinary
                  appeal.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-red-600 rounded-lg w-32 mb-2"
                >
                  View Products
                </a>
              </div>
            </a>

            <a
              href="#"
              className=" mb-6 flex flex-row items-center bg-red-50 border border-gray-200 rounded-lg shadow max-w-xl"
            >
              <Image
                className="object-cover rounded-t-lg h-auto w-48 rounded-l-lg"
                src="/category-3-3-3.png"
                alt="mockup"
                width={100}
                height={30}
              />
              <div className="flex flex-col justify-between px-3 leading-normal">
                <h5 className="mb-2 mt-1 text-2xl font-bold tracking-tight text-black">
                  Mutton
                </h5>
                <p className="mb-3 font-normal text-gray-700">
                  Meat from mature sheep, offering a rich, robust flavor.
                  Celebrated in global cuisines, it&apos;s best slow-cooked for
                  tenderness and taste.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-red-600 rounded-lg w-32 mb-2"
                >
                  View Products
                </a>
              </div>
            </a>
            <a
              href="#"
              className=" mb-6 flex flex-row items-center bg-red-50 border border-gray-200 rounded-lg shadow max-w-xl"
            >
              <Image
                className="object-cover rounded-t-lg h-auto w-48 rounded-l-lg"
                src="/category-2-2-2.png"
                alt="mockup"
                width={100}
                height={30}
              />
              <div className="flex flex-col justify-between px-3 leading-normal">
                <h5 className="mb-2 mt-1 text-2xl font-bold tracking-tight text-black">
                  Fish & Sea Meat
                </h5>
                <p className="mb-3 font-normal text-gray-700">
                  A variety of seafood from oceans and lakes, like salmon and
                  lobster. Known for health benefits and a distinct taste.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-red-600 rounded-lg w-32 mb-2"
                >
                  View Products
                </a>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
