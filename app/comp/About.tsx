import React from 'react'


import { ShootingStars } from '@/components/ui/shooting-stars'
import { StarsBackground } from '@/components/ui/stars-background'
import Image from 'next/image'

const About = () => {
  return (
    <div id="about">
         <div className="h-fit   rounded-md bg-white dark:bg-black flex   relative w-full">
      <div className='m-8   md:m-20 w-full'>
        <div className=' text-4xl colgra text-center underline underline-offset-2 md:text-6xl lg:text-7xl font-extrabold tex '>
            About Us</div>
            <br/>
        <div className=' md:flex'>
        <ul className="list-disc list-inside space-y-2 text-white text-sm lg:text-md xl:text-lg  ">
          <div className='flex justify-center '>
          <Image src='/logo.png' alt="Shazin" width={500} height={500} className='z-30 rounded-full md:hidden' />
          </div>
        
  <li><strong>Crossroads with Shazin Hijazy</strong> started as a simple conversation between two friends, initially aimed at sharing personal experiences and ideas.</li>
  <li>Over time, the podcast has evolved into a platform that showcases inspiring stories of technology, innovation, and entrepreneurship, resonating with a diverse and global audience.</li>
  <li>The podcast features notable guests, including successful entrepreneurs, thought leaders, and industry experts, who share their unique experiences, insights, and lessons learned throughout their careers.</li>
  <li>Each episode of Crossroads focuses on impactful ideas that drive progress, delving into the journeys of innovators, entrepreneurs, and leaders who have made significant contributions to their fields.</li>
  <li className='hidden lg:block'>By engaging in meaningful and thought-provoking conversations, the podcast seeks to inform, inspire, and empower listeners from all backgrounds, encouraging them to pursue their passions and make a positive difference in the world.</li>
  <li className='hidden lg:block'>Through storytelling, fresh perspectives, and diverse voices, Crossroads celebrates the power of human creativity and the transformative impact of technology and entrepreneurship on society.</li>
  <li className='hidden lg:block'>The episodes are designed not only to entertain but also to provide valuable insights and actionable advice, helping individuals navigate their own paths toward success in both personal and professional life.</li>



        </ul>
          <div className='lg:ml-2'>
         
          <div className='text-center mx-auto flex justify-center 2xl:-mt-20 lg:justify-end flex-grow overflow-hidden'>
          
          
          <Image src='/logo.png' alt="Shazin" width={500} height={700} className='rounded-full hidden md:flex' />

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