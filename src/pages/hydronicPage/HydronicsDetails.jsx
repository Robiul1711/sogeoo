import CommonBanner from '@/components/common/CommonBanner'
import React from 'react'
import blogdetails from '../../assets/images/blogdetails.png'
import StepByStep from '@/components/blogDetails_components/StepByStep'
import ImageCard from '@/components/common/ImageCard'
import BrandSection from '@/components/home_components/BrandSection'
const HydronicsDetails = () => {
  return (
    <div>
      <CommonBanner 
        image={blogdetails}
        title={"A Step-by-Step Guide to Upgrading to an Air Source Heat Pump"}
        description={"As the demand for sustainable & energy-efficient solutions increases by the day, air source heat pumps (ASHPs) are becoming the ideal choice for homeowners and businesses. If you currently use conventional systems, transitioning to this renewable energy technology is all you need to further reduce your energy bills in the long term."}
     link={"/contact"}
        linkText={"Contact Us"}
      />
      <StepByStep />
      <ImageCard />
      <BrandSection />
    </div>
  )
}

export default HydronicsDetails