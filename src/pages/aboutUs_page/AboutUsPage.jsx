import CommonBanner from '@/components/common/CommonBanner'
import AboutUs from '@/components/home_components/AboutUs'
import AboutUsMoreDetail from '@/components/aboutUs_components/AboutUsMoreDetail'
import BrandSection from '@/components/home_components/BrandSection'
import PoweringAGreener from '@/components/aboutUs_components/PoweringAGreener'
import useAxiosPublic from '@/hooks/useAxiosPublic'
import { useQuery } from '@tanstack/react-query'
const AboutUsPage = () => {
    const axiosPublic = useAxiosPublic();
  const { data: banner } = useQuery({
    queryKey: ["aboutpage-banner"],
    queryFn: async () => {
      const response = await axiosPublic.get("/cms/about/banner");
      return response?.data;
    },
  });

  return (
    <div>
      <CommonBanner
        image={banner?.data?.image}
        title={banner?.data?.title}
        description={banner?.data?.sub_title}
        link={"/contact"}
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
