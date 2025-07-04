import CommonBanner from '@/components/common/CommonBanner'
import React from 'react'
import blog from '../../assets/images/blog.png'
import ExploringInnovations from '@/components/blog_components/ExploringInnovations'
import BrandSection from '@/components/home_components/BrandSection'

const BlogPage = () => {
  return (
    <div>
      <CommonBanner
        image={blog}
        title={"Blog"}
        description={
          "Insights & Tips: Learn more about geothermal, hydronic heating, heat pumps, and sustainable HVAC in our expert blogs."
        }
        link={"#"}
        linkText={"Contact Us"}
      />
  <ExploringInnovations />
  <BrandSection />
    </div>
  )
}

export default BlogPage
