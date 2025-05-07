import { Navlinks } from '@/constant/constant'
import { XIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {
  showNav: boolean
  closeNav: () => void
}

const MobileNav = ({closeNav, showNav}:Props) => {
  const navOpen = showNav?'translate-y-0':'translate-y-[-200%]';

  return (
    <div>
      {/* navlinks  */}
      <div className={`${navOpen} text-white fixed justify-center flex flex-col h-screen transform transition-all duration-1000 w-full bg-gray-950 space-y-6 z-[1050] top-8`}>
      {
        Navlinks.map((link)=>{
          return(
            <Link className='text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]' key={link.id} href={link.url}>
                {link.label}
            </Link>
          )
        })}
        {/* Closer icon*/}
        <XIcon onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 w-6 h-6 pointer-curser' />
      </div>
    </div>
  )
}

export default MobileNav