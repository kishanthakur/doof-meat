import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="bg-red-50">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className=" mb-9 sm:mr-9 lg:mt-0 lg:col-span-5 lg:hidden">
          <Image
            className="rounded-xl shadow-2xl"
            src="/hero-11.png"
            alt="mockup"
            width={600}
            height={60}
          />
        </div>
        <div className="mr-auto place-self-center lg:col-span-7">
          <div className="">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-black">
              Gujarat&apos;s first FSSAI Approved Online Butchers!
            </h1>
            <p className="max-w-2xl mb-6 font-medium text-black lg:mb-8 md:text-lg lg:text-xl ">
              Get quick home delivery of fresh raw, cleaned, premium meats. Just
              open the package, and you&apos;re ready to cook.
            </p>
          </div>

          <a
            href="#"
            className="bg-red-600 font-semibold inline-flex items-center justify-center px-5 py-3 mr-3 text-base text-center text-white rounded-lg bg-primary-700"
          >
            <button>Order Now</button>
          </a>
        </div>
        <div className=" mb-7 sm:mr-9 lg:mt-0 lg:col-span-5  hidden lg:block">
          <Image src="/hero-10.png" alt="mockup" width={1200} height={100} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
