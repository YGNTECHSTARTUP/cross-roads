"use client"
import React from 'react'

import { AiTwotoneHome } from "react-icons/ai";
import { MdGroups2 } from "react-icons/md";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PiApplePodcastsLogoFill } from "react-icons/pi";
const MobNav = () => {
    const pathname = usePathname();
  return (
    <div>
        <nav className='bg-background/80 h-16 bottom-0 left-0 backdrop-blur-lg border-t-2 border-primary  fixed z-40 w-full transition-all duration-300 '>
         
         <div className='container justify-between flex h-16 items-center   px-4 md:px-6'>
           <Link href={'/'}>
           <div className={`${pathname == "/" ?"ml-4 text-teal-600" :"ml-4"}`}>
                <div>
                <AiTwotoneHome className='ml-4'/>
                </div>
                
                Home
            </div>
           </Link>
           <Link href={'/TalkShows'}>
           <div className={`${pathname == "/TalkShows" ?"ml-4 text-teal-600" :"ml-4"}`}>
                <PiApplePodcastsLogoFill className='ml-[37%]'/>
                TalkShows
            </div>
           </Link>
           <Link href={'/Teams'}>
           
           <div className={`${pathname == "/Teams" ?"mr-4 text-teal-600" :"mr-4"}`}>
                <MdGroups2 className='ml-[37%]'/>
                 Our Team
            </div>
           </Link>
           
         </div>
        </nav>
    </div>
  )
}

export default MobNav