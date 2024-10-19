"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const pathname = usePathname();
  return (
    <div>
        <nav className='bg-background/80 h-16 text-lg font-bold  transition-all backdrop-blur-lg z-50 top-0 left-0 fixed w-full duration-300 border-primary border-b-2'>
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
<Link href="/">
<div className='md:container flex h-16 items-center font-bold font-sans text-md'>
    &nbsp;
    <Image src={"/logoss.png"} alt="CrossRoads" width={45} height={45} />&nbsp;&nbsp;
    <span className='text-sm md:text-md lg:text-lg'>

    Cross Roads with <span className='colgra'>
    Shazin Hijazy.
        </span>
        </span>
</div>
</Link>

<div className='flex space-x-5'>
<div className={`${pathname == "/"?"hidden md:block text-teal-600":"hidden md:block"}`}>
    <Link href="/">
    Home
    </Link>
   
</div>
<div className={`${pathname == "/TalkShows"?"hidden md:block text-teal-600":"hidden md:block"}`}>
    <Link href="/TalkShows">
    Talk Shows
    </Link>
</div>
<div className={`${pathname == "/Teams"?"hidden md:block text-teal-600":"hidden md:block"}`}>
    <Link href="/Teams">
    Our Team
    </Link>
  
</div>
</div>



        </div>

        </nav>
    </div>
  )
}

export default Navbar