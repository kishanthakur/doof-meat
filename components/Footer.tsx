import React from "react";
import QuickLinks from "./QuickLinks";
import TalkToUs from "./TalkToUs";
import Image from "next/image";

function Footer() {
  return (
    <section className="bg-white mt-8 mb-24 sm:mb-4">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col justify-between items-start ml-7 sm:ml-32">
          <QuickLinks />
          <TalkToUs />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center mt-9">
        <Image
          alt="Pinterest"
          src="/pinterest-icon.png"
          width={40}
          height={10}
        />
        <Image
          alt="Pinterest"
          src="/insta-icon.png"
          className="ml-4"
          width={40}
          height={10}
        />
        <Image
          alt="Pinterest"
          className="ml-4"
          src="/tumblr-icon.png"
          width={40}
          height={10}
        />
      </div>
      <div className="flex flex-row justify-center items-center mt-3">
        <p> Copyright © 2023, Doof India </p>
      </div>
    </section>
  );
}

export default Footer;
