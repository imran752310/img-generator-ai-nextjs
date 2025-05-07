import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
const About = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center' >
    {/* Image  */}
    <div className='order-2 xl:order-1' data-aos="zoom-in" data-aos-anchor-placement="top-center">
        <Image 
        
        src="/images/about.jpg"
        alt="About"
        width={500}
        height={400}
        className="rounded-lg "
        />
    </div>

     {/* content  */}
     <div className='order-1 xl:order-2'>
            <h1 className='text-gray-300 mb-4 font-semibold text-lg capitalize'>What we do</h1>
            <h3 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'>
                Create Your Own AI Business easily
            </h3>
            <p className='text-gray-200  mb-8 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus id odit esse voluptatem autem quae dolor magni dignissimos totam! Temporibus repellendus laudantium in exercitationem officiis eligendi asperiores. Blanditiis, repellendus earum.</p>
            <Button className='bg-rose-500 h-12 text-base uppercase ' size={'lg'}>About Us</Button>
    </div>
   
        </div>
    </div>
  )
}

export default About