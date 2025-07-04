import AboutUs from '@/components/home_components/AboutUs'
import Banner from '@/components/home_components/Banner'
import BrandSection from '@/components/home_components/BrandSection'
import GetInTouch from '@/components/home_components/GetInTouch'
import WhatOurClient from '@/components/home_components/WhatOurClient'
import WhyChooseUsSection from '@/components/home_components/WhyChooseUsSection'
import React from 'react'

const Home = () => {
  return (
    <div>
     <Banner />
     <AboutUs />
     <WhyChooseUsSection />
     <WhatOurClient />
     <GetInTouch />
     <BrandSection />

    </div>
  )
}

export default Home
