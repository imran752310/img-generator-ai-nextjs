import Image from 'next/image'
import React from 'react'
import FaqCard from './FaqCard'

const Faq = () => {
  return (
    <div className='py-16 bg-gray-950'>
        <div className='  w-[80%] mx-auto mt-16 grid-cols-1 grid md:grid-cols-2 xl:grid-cols-2 gap-10 items-center'>
            {/* Image  */}
            <div data-aos="zoom-out">
                <Image src="/images/faq.png" alt='faq' width={500} height={500} />
            </div>
            {/* Faq Card  */}
            <div>
                <FaqCard />
            </div>
        </div>
    </div>
  )
}

export default Faq