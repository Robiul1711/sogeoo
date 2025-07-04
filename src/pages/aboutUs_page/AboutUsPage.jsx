import CommonBanner from '@/components/common/CommonBanner'
import React from 'react'
import aboutpage from '../../assets/images/aboutpage.png'
import AboutUs from '@/components/home_components/AboutUs'
import AboutUsMoreDetail from '@/components/aboutUs_components/AboutUsMoreDetail'
import BrandSection from '@/components/home_components/BrandSection'
import PoweringAGreener from '@/components/aboutUs_components/PoweringAGreener'
const AboutUsPage = () => {
  return (
    <div>
      <CommonBanner
        image={aboutpage}
        title={"About SóGeo – Melbourne’s Geothermal & Hydronic Specialists"}
        description={
          "Learn about SóGeo, a third-generation Melbourne hydronic heating company specializing in geothermal and air-source heat pump solutions. Our mission: sustainable, luxury comfort for homes & businesses"
        }
        link={"#"}
        linkText={"Contact Us"}
      />
        <AboutUs />
        <AboutUsMoreDetail />
        <PoweringAGreener />
        <BrandSection />
    </div>
  )
}

export default AboutUsPage
