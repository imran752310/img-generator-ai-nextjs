import React from 'react'

const Footer = () => {
  return (
    <div className='py-16 bg-black'>
        <div className='w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center pb-8 border-b-2 border-gray-900 space-y-6 sm:space-y-0'>
            {/* col-1  */}
            <div>
                <p className='text-2xl sm:text-3xl md:text-4xl text-white w-[80%] font-bold '>We develop & create digital future</p>

            </div>
            {/* col-2  */}
            <div >
                <h1 className='text-xl font-bold text-white mt-6'>Address </h1>
                <p className='text-white opacity-60 mt-4 text-base'>Switzerland of Pakistan</p>
                <p className='text-white opacity-60 mt-4 text-base'>Swat kpk</p>
            </div>
            {/* col-3  */}
            <div>
                <h1 className='text-xl font-bold text-white mt-6'>Contact Us</h1>
                <p className='text-white opacity-60 mt-4 text-base'>info@digitalfuture
                    </p>
                    <p className='text-white opacity-60 mt-4 text-base'>+927445000000
                    </p>
            </div>
        </div>
    </div>
  )
}

export default Footer