import { QuoteIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

type Props = {
    image: string;
    name: string;
    role: string
}


const ReviewCard = ({image, name, role}:Props) => {
  return (
    <div className='flex items-center justify-center flex-col'>
        <QuoteIcon className='w-10 h-10 text-yellow-300' />

        <p className='text-center mt-4 text-white text-base '>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptatem itaque? Facilis saepe,explicabo eos ducimus pariatur accusantium distinctio temporibus ipsum consectetur sequi laudantium.
        </p>

        <div className='mt-8'>
            <h1>{name}</h1>
            <p>{role}</p>
            <Image src={image} alt='slider' height={80} width={80} />
        </div>

    </div>
  )
}

export default ReviewCard