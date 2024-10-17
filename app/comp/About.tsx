import React from 'react'


import { ShootingStars } from '@/components/ui/shooting-stars'
import { StarsBackground } from '@/components/ui/stars-background'
import Image from 'next/image'

const About = () => {
  return (
    <div id="about">
         <div className="h-fit   rounded-md bg-white dark:bg-neutral-900 flex   relative w-full">
      <div className='m-8   md:m-20 w-full'>
        <div className=' text-4xl colgra underline underline-offset-2 md:text-6xl lg:text-7xl font-extrabold tex '>
            About Us</div>
            <br/>
        <div className=' lg:flex'>
        <ul className="list-disc list-inside space-y-2 text-white text-sm lg:text-lg 2xl:text-xl ">
          <div className='flex justify-center '>
          <Image src='/pics.png' alt="Shazin" width={500} height={500} className='rounded-full lg:hidden' />
          </div>
        
          <li>CrossRoads with Shazin Hijazy is a dynamic talk show that brings together leaders, innovators, and change-makers to share their journeys, insights, and experiences.</li>
  <li>The show, hosted by Shazin Hijazy, serves as a platform to connect students, alumni, and professionals across generations, particularly within the Andhra University ecosystem.</li>
  <li>Focused on promoting entrepreneurship, leadership, and innovation, CrossRoads features conversations with industry experts, entrepreneurs, and thought leaders from various fields, including technology, business, defense, and education.</li>
  <li>Each episode offers viewers a deep dive into real-world challenges, strategies for success, and personal growth, providing both inspiration and actionable insights.</li>
  <li>Supported by partners such as the Andhra University Alumni Association, codeiam.club, and A-Hub, CrossRoads has grown into a space where ideas are exchanged, and meaningful connections are fostered.</li>
  <li>Through compelling dialogues and expert mentorship, CrossRoads is more than just a talk show—it&apos;s a hub for inspiration, collaboration, and growth, encouraging the next generation of leaders to dream big and achieve their goals.</li>
</ul>
          <div className='lg:ml-2'>
         
          <div className='text-center mx-auto flex justify-center 2xl:-mt-20 lg:justify-end flex-grow overflow-hidden'>
          
          
          <Image src='/picfull.png' alt="Shazin" width={500} height={700} className='rounded-full hidden lg:flex' />

          </div>
          </div>
          </div>

      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
    </div>
  )
}

export default About