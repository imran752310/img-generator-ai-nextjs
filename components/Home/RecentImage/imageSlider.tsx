"use client"
import { sliderData } from '@/constant/constant';
import Image from 'next/image';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const ImageSlider = () => {
  return  <Carousel 
  responsive={responsive} 
  infinite={true} 
  autoPlay={true}
  autoPlaySpeed={5000}
  keyBoardControl={true}
  >
  {sliderData.map(
    (image, index) => (
        <div key={index} className='p-4'>
            <div className='h-[400px] relative'>
                <Image 
                src={`${image.image}`}
                alt='image'
                className='object-cover rounded-md'
               fill
                />
            </div>
        </div>
    )
  )}
</Carousel>
  
}

export default ImageSlider