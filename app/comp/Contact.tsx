"use client"
import React from 'react'
import { Vortex } from '@/components/ui/vortex'
import { SocialIcon } from 'react-social-icons'
const ContactUs = () => {
  const urls = [
    "https://api.whatsapp.com/send?phone=9063850784",  
                // WhatsApp// LinkedIn
    // Instagram
    
    "https://www.instagram.com/crossroadswithshazinhijazy/",
    "https://www.linkedin.com/company/crossroads-with-shazin-hijazy"              
  ];
  return (
    <div id="contact" className='-mt-[10%]  bg-black'>
           <div className="w-full mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
       baseHue={120}
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Connect With Us
        </h2>
    
        <div className="flex-col  items-center gap-4 mt-6">
          {
            urls.map((url,index)=>(
            <SocialIcon url={url} key={index} fgColor="white" bgColor="transparent" style={{ height: 50, width: 50 }}/>
            ))
          }
        </div>
      </Vortex>
    </div>
    </div>
   
  )
}

export default ContactUs