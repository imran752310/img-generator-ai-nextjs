"use client"
import { Button } from '@/components/ui/button'
import axios from 'axios';
import { Loader  } from 'lucide-react';
import React, { useState } from 'react'
import { toast } from 'sonner';
import Image from 'next/image';
const Hero = () => {

const [promt, setPrompt] = useState("");
const [image, setImage] = useState("");
const [loading, setLoading] = useState(false);

const handleImageGeneration = async () => {
    setLoading(true);
  
    try {
      const response = await axios.post('/api/generate-image', {
        prompt: promt,
      });
  
      setImage(response.data.url);
      toast.success('Image generated successfully');
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.message || 'Image generation failed');
      } else {
        toast.error('An error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

const handleDownloadImage = ()=>{
    const link = document.createElement('a');
    link.target="_blank";
    link.href=image;
    link.download="generated-img.jpg"
    link.click();
}

  return (
    <div className='w-[95%] min-h-screen relative mx-auto mt-[20vh]'>
        {/* content  */}
        <div className='relative z-10 text-white flex flex-col items-center justify-center'>
            <h1 data-aos="fade-up" className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center bg-gradient-to-r from-orange-300 to-cyan-500 bg-clip-text text-transparent'>
                Create Beautiful Image with <br /> Artificial  Intelligence{" "}
            </h1>
            <p data-aos="fade-up"
            data-aos-delay="100"
             className='mt-3 text-sm md:text-base font-semibold text-center text-gray-300'>Get started with our AI-powered image generator tools</p>
            {/* propmt input box  */}

             <div className='h-11 md:h-16 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-white rounded-lg mt-12 px-2 md:px-6 flex items-center justify-between'>
            <input type="text" placeholder='Generate Your Dream Image' className="h-full rounded-lg outline-none w-full text-black block flex-1 text-sm placeholder:text-xs sm:placeholder:text-base placeholder:items-center" 
            value={promt}
            onChange={(e)=>setPrompt(e.target.value)}/>
            <Button onClick={handleImageGeneration} variant={"default"} size={"lg"}>Generate</Button>
         </div>
         {/*Tages*/}
         <div className='flex items-center mt-6 space-x-4 flex-wrap space-y-3'>
            <p className='text-sm'>Popular Tag : </p>
            <Button variant={"secondary"}>Creative</Button>
            <Button variant={"secondary"}>Hypereality</Button>
            <Button variant={"secondary"}>Steampunk</Button>
            <Button variant={"secondary"}>Animation</Button>
            <Button variant={"secondary"}>Business</Button>
         </div>
         {/* show loded image  */}
         {loading && (<div>
            <Loader className='animate-spin mt-6' />
            </div>
        )}
        {image && <div className='mt-8 flex flex-col items-center'>
            <Image 
            src={image} 
            alt="Ai Generated Image" className="max-w-full h-[400px] rounded-lg shadow-lg" 
            loading='lazy' width={300} height={300} />
            <Button onClick={handleDownloadImage} className='mt-4 mb-4 bg-orange-500 hover:bg-orange-600'>Download</Button>
        </div>

        }
        </div>
        </div>
  )
}

export default Hero