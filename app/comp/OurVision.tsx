import Image from 'next/image'
import React from 'react'

const OurVision = () => {
  return (
    <div className='bg-black mx-auto'>
        <div className=' font-extrabold  w-full min-w-full  container  text-black dark:text-white '>
       
        <div className=' text-4xl  text-center lg:px-8 sm:px-4 md:px-6 colgra underline underline-offset-2 md:text-6xl lg:text-7xl font-extrabold tex '>
            Our Vision</div>
            
        <Image src={'/vision.png'} className='mx-auto -mt-[8%] 2xl:-mt-0 ' alt='Vision' width={940} height={940}/>
        </div>
<div></div>
    </div>
  )
}

export default OurVision