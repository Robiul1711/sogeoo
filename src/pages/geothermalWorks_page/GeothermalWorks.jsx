import CommonBanner from '@/components/common/CommonBanner'
import React from 'react'
import geotharmal from '@/assets/images/geothrmal.png'
import HowGeoTharmalWork from '@/components/geothermalWorks_components/HowGeoTharmalWork'
import BrandSection from '@/components/home_components/BrandSection'
import VideoSection from '@/components/geothermalWorks_components/VideoSection'
const GeothermalWorks = () => {
  return (
    <div >
      <CommonBanner
        image={geotharmal}
        title={"How Geothermal Works"}
        description={
            "Geothermal heating and cooling systems are efficient, sustainable, and environmentally friendly alternative to fossil fuel-based heating systems."
        }
        link={"#"}
        linkText={"Contact Us"}
      />
      <HowGeoTharmalWork />
      <div className='section-padding-x mb-20'>
      <VideoSection />

      </div>
      <BrandSection />
    </div>
  )
}

export default GeothermalWorks
