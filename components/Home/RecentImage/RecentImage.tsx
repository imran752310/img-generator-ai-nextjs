import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import ImageSlider from './imageSlider'

const RecentImage = () => {
  return (
    <div className='py-16 bg-gray-950'>
        {/* heading  */}
        <SectionHeading heading='Explore Our Recent'  />
        {/* slider  */}
        <div className='w-[90%] md:w-[80%] mx-auto mt-16'>
            <ImageSlider />
        </div>
    </div>
  )
}

export default RecentImage