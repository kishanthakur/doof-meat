import React from "react";

function SubscribeToEmail() {
  return (
    <section className="bg-red-50">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-black sm:text-4xl">
            Subscribe to Doof Newsletter
          </h2>

          <form action="#">
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label
                  htmlFor="email"
                  className="hidden mb-2 text-sm font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  className="block p-3 pl-10 w-full text-sm text-black bg-white rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="py-3 px-5 w-full bg-red-500 text-sm font-semibold text-center text-white rounded-lg border cursor-pointer sm:rounded-none sm:rounded-r-lg "
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="mx-auto max-w-screen-sm font-sans text-[12px] sm:text-lg text-centre text-black -mt-2">
              We don&apos;t spam at all and they&apos;re super cute and fun.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SubscribeToEmail;
