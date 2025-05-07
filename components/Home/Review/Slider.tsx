"use client";
import { ReviewSlider } from "@/constant/constant";
import { QuoteIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ImageSlider = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
    >
      {ReviewSlider.map((data, index) => (
        <div key={index} className="p-4">
          <div className="flex items-center justify-center flex-col">
            <QuoteIcon className="w-10 h-10 text-yellow-300" />

            <p className="text-center mt-4 text-white text-base px-32 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, voluptatem itaque? Facilis saepe,explicabo eos ducimus
              pariatur accusantium distinctio temporibus ipsum consectetur sequi
              laudantium.
            </p>

            <div className="mt-8">
              <h1 className="text-white text-xl font-bold">{data.name}</h1>
              <p className="text-yellow-400 text-base">{data.role}</p>
              <Image src={data.image} alt="slider" className="rounded-full"  height={80} width={80} />
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
