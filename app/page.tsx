import React from 'react'
import { Hero } from './comp/Hero'
import About from './comp/About'
import OurVision from './comp/OurVision'
import { OurPartners } from './comp/OurPartners'
import ContactUs from './comp/Contact'

const page = () => {
  return (
    <div>
      <Hero />
      <About/>
      <OurVision/>
      <OurPartners/>
      <ContactUs/>
    </div>
  )
}

export default page