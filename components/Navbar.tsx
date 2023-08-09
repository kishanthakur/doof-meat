import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <div className="flex flex-row justify-between items-center h-16 sm:h-20 w-full mt-1 sm:-mt-1 ">
        <div className="hidden sm:block">
          <Image
            alt="Doof meat"
            src="/doof-meat-logo.svg"
            className="hidden xl:block"
            width={300}
            height={30}
          />
          <Image
            alt="Doof meat"
            src="/logo-2.png"
            className="xl:hidden"
            width={70}
            height={20}
          />
        </div>
        <div className="flex">
          <input
            type="search"
            placeholder="Search the items..."
            className="lg:w-96 ml-5 sm:ml-0 px-1 py-1 sm:py-2 rounded border-2 border-gray-300"
          />
        </div>
        <div className="flex flex-row justify-center items-center ">
          <button className="hidden sm:flex  flex-row justify-center items-center ml-6 sm:ml-0 mr-4 xl:mr-2 px-2 sm:px-2 py-1 sm:py-2 rounded text-black font-semibold ">
            <Image
              alt="Image"
              src="/about-icon.png"
              width={20}
              height={10}
              className="mr-2"
            />
            About
          </button>
          <button className="hidden sm:flex flex-row justify-center items-center ml-6 sm:ml-0 mr-4 xl:mr-2 px-2 sm:px-2 py-1 sm:py-2 rounded text-black font-semibold ">
            <Image
              alt="Image"
              src="/contact-icon.png"
              width={20}
              height={10}
              className="mr-2 align-middle"
            />
            Contact
          </button>
          <button className="hidden sm:flex flex-row justify-center items-center ml-6 sm:ml-0 mr-4 xl:mr-2 px-2 sm:px-2 py-1 sm:py-2 rounded text-black font-semibold ">
            <Image
              alt="Image"
              src="/shop-icon.png"
              width={20}
              height={10}
              className="mr-2"
            />
            Shop
          </button>

          <button className="ml-6 sm:ml-0 mr-2 xl:mr-6 px-2 sm:px-3 py-1 sm:py-2 rounded text-white font-semibold bg-red-500">
            Account
          </button>
          <Image
            className="mr-4"
            alt="Bag"
            src="/bag-icon.png"
            width={38}
            height={10}
          />
        </div>
      </div>
      <div className="z-50 fixed flex flex-row justify-centre items-center w-full bg-white h-16 bottom-0 left-1/2 transform -translate-x-1/2 sm:hidden">
        <Image alt="Doof meat" src="/logo-2.png" width={70} height={20} />
        <div className="flex flex-col justify-start items-center">
          <Image
            className="-mb-1 mt-2"
            alt="Shop"
            src="/shop-icon.png"
            width={20}
            height={20}
          />
          <button className="text-lg ml-6 sm:ml-0 mr-4 xl:mr-6 px-2 sm:px-3 py-1 sm:py-2 rounded text-black font-semibold ">
            Shop
          </button>
        </div>
        <div className="flex flex-col justify-start items-center">
          <Image
            className="-mb-1 mt-2"
            alt="Shop"
            src="/about-icon.png"
            width={20}
            height={20}
          />
          <button className="text-lg ml-6 sm:ml-0 mr-4 xl:mr-6 px-2 sm:px-3 py-1 sm:py-2 rounded text-black font-semibold ">
            About
          </button>
        </div>
        <div className="flex flex-col justify-start items-center">
          <Image
            className="-mb-1 mt-2"
            alt="Shop"
            src="/contact-icon.png"
            width={20}
            height={20}
          />
          <button className="text-lg ml-6 sm:ml-0 mr-4 xl:mr-6 px-2 sm:px-3 py-1 sm:py-2 rounded text-black font-semibold ">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
