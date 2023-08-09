"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";

function BestSeller() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024, // for screens larger than 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // for screens larger than 600px and smaller than 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // for screens smaller than 600px
        settings: {
          slidesToShow: 1.25,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="bg-white py-0">
        <div className="flex mt-12 max-w-screen-xl px-4 py-1 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 overflow-x-hidden">
          <div className="w-full">
            <div className="font-bold font-serif text-2xl">Best sellers</div>
            <p className="font-sans">Most popular products on Doof</p>
            <div className="overflow-hidden">
              <Slider {...settings}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </Slider>
            </div>
          </div>
        </div>{" "}
      </section>
    </>
  );
}

export default BestSeller;
