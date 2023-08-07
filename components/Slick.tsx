"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import ProductCard from "./ProductCard";

export default function Slick() {
  const settings = {
    className: "",
    infinite: false,
    centerPadding: "",
    slidesToShow: 3,
    speed: 500,
  };

  const tempArr = [1, 2, 3, 4, 5];

  return (
    <div>
      <h2>Center Mode</h2>
      <Slider {...settings}>
        {tempArr.map(() => {
          return (
            <>
              <div className="flex flex-row justify-between items-center">
                <ProductCard />
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
}
