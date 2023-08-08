import React from "react";
import Image from "next/image";

function FoodMeansDoof() {
  return (
    <>
      <div className="flex mt-10 max-w-screen-xl px-4 py-1 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div>
          <div className="font-bold font-mono text-center text-4xl">
            FOOD MEANS DOOF
          </div>
          <div className="hidden lg:flex flex-col sm:flex-row justify-center items-center">
            <div className="mt-12 mr-4 max-w-[280px] max-h-[450px] bg-red-50 border border-gray-200 rounded-lg shadow ">
              <a href="#" className="flex justify-center items-center ">
                <Image
                  className="rounded-t-lg mt-7 "
                  src="/doof-picked.png"
                  alt=""
                  width={250}
                  height={30}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900">
                    Doof-Picked
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">
                  Our animals are slaughtered only after following FSSAI
                  Guidelines and many health checks.
                </p>
              </div>
            </div>

            <div className="mt-12 mr-4 max-w-[280px] max-h-[450px] bg-red-50 border border-gray-200 rounded-lg shadow ">
              <a href="#" className="flex justify-center items-center">
                <Image
                  className="rounded-t-lg mt-7"
                  src="/doof-cut.png"
                  alt=""
                  width={250}
                  height={30}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900">
                    Doof-cut
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">
                  Professionally trained butchers to make the most beautiful
                  cuts for your meats.
                </p>
              </div>
            </div>

            <div className="mt-12 mr-4 max-w-[280px] h-[450px] bg-red-50 border border-gray-200 rounded-lg shadow">
              <a href="#" className="flex justify-center items-center">
                <Image
                  className="rounded-t-lg mt-7"
                  src="/doof-cleaned.png"
                  alt=""
                  width={250}
                  height={30}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900">
                    Doof-clean
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">
                  No blood, no odour, just hassle-free meats ready to be cooked.
                </p>
              </div>
            </div>
            <div className="mt-12 mr-4 max-w-[280px] h-[450px] bg-red-50 border border-gray-200 rounded-lg shadow ">
              <a href="#" className="flex justify-center items-center">
                <Image
                  className="rounded-t-lg mt-7 "
                  src="/doof-delivered.png"
                  alt=""
                  width={250}
                  height={30}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900">
                    Doof-delivered
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">
                  Doof Meat is delivered within 90 minutes of you placing the
                  order.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-7 lg:hidden">
            <a
              href="#"
              className="mb-6 flex flex-row items-center bg-red-50 border border-gray-200 rounded-lg shadow max-w-xl"
            >
              <Image
                className="object-cover ml-2 rounded-t-lg h-auto w-48 rounded-l-lg"
                src="/doof-picked.png"
                alt="mockup"
                width={100}
                height={30}
              />
              <div className="flex flex-col justify-between px-3 leading-normal">
                <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight text-black">
                  Doof-Picked
                </h5>
                <p className="mb-3 font-normal text-gray-700">
                  Our animals are slaughtered only after following FSSAI
                  Guidelines and many health checks.
                </p>
              </div>
            </a>

            <a
              href="#"
              className=" mb-6 flex flex-row items-center bg-red-50 border border-gray-200 rounded-lg shadow max-w-xl"
            >
              <Image
                className="object-cover ml-2 rounded-t-lg h-auto w-48 rounded-l-lg"
                src="/doof-cut.png"
                alt="mockup"
                width={100}
                height={30}
              />
              <div className="flex flex-col justify-between px-3 leading-normal">
                <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight text-black">
                  Doof-Cut
                </h5>
                <p className="mb-3 font-normal text-gray-700">
                  Professionally trained butchers to make the most beautiful
                  cuts for your meats.
                </p>
              </div>
            </a>
            <a
              href="#"
              className=" mb-6 flex  flex-row h-[130px] items-center bg-red-50 border border-gray-200 rounded-lg shadow max-w-xl"
            >
              <Image
                className="object-cover ml-2 rounded-t-lg h-auto w-48 rounded-l-lg"
                src="/doof-cleaned.png"
                alt="mockup"
                width={100}
                height={30}
              />
              <div className="flex flex-col justify-between px-3 leading-normal">
                <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight text-black">
                  Doof-Cleaned
                </h5>
                <p className="mb-3 font-normal text-gray-700">
                  No blood, no odour, just hassle-free meats ready to be cooked.
                </p>
              </div>
            </a>
            <a
              href="#"
              className=" mb-6  flex flex-row h-[130px] items-center bg-red-50 border border-gray-200 rounded-lg shadow max-w-xl"
            >
              <Image
                className="object-cover ml-2 rounded-t-lg h-auto w-48 rounded-l-lg"
                src="/doof-delivered.png"
                alt="mockup"
                width={100}
                height={30}
              />
              <div className="flex flex-col justify-between px-3 leading-normal">
                <h5 className="mb-2 mt-3 text-2xl font-bold tracking-tight text-black">
                  Doof-Delivered
                </h5>
                <p className="mb-3 font-normal text-gray-700">
                  Doof Meat is delivered within 90 minutes of you placing the
                  order.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodMeansDoof;
