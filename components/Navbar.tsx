import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <div className=" flex flex-row justify-between items-center h-16 sm:h-20 w-full mt-1 sm:-mt-1 ">
        <div className="hidden sm:block">
          <Image
            alt="Doof meat"
            src="/doof-meat-logo.svg"
            width={300}
            height={30}
          />
        </div>
        <div className="flex">
          <input
            type="search"
            placeholder="Search the items..."
            className="lg:w-96 ml-5 sm:ml-0 px-1 py-1 sm:py-2 rounded border-2 border-gray-300"
          />
        </div>
        <div className="flex flex-row justify-center items-center">
          <button className="ml-6 sm:ml-0 mr-4 xl:mr-6 px-2 sm:px-3 py-1 sm:py-2 rounded text-white font-semibold bg-red-500">
            Login
          </button>
          <Image
            className="mr-3"
            alt="Bag"
            src="/bag-icon.png"
            width={40}
            height={10}
          />
        </div>
      </div>
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 sm:hidden">
        <Image
          alt="Doof meat"
          src="/doof-meat-logo.svg"
          width={300}
          height={30}
        />
      </div>
    </nav>
  );
}
