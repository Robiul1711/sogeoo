import CommonBanner from '@/components/common/CommonBanner'
import ImageCard from '@/components/common/ImageCard'
import BrandSection from '@/components/home_components/BrandSection'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import useAxiosPublic from '@/hooks/useAxiosPublic'
import BlogDetailsPage from '../blog_page/BlogDetailsPage'
const BlogDetaisPage = () => {
    const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const { data: BlogDetails } = useQuery({
    queryKey: ["blog-details", id],
    enabled: !!id,
    queryFn: async () => {
      const response = await axiosPublic.get(`/blogs/${id}`);
      return response?.data;
    },
  });
  const blogDetails = BlogDetails?.data;
  console.log(blogDetails);
  return (
    <div>
      <CommonBanner 
        image={blogDetails?.images[0].image}
        title={blogDetails?.title}
        description={blogDetails?.description}
     link={"/contact"}
        linkText={"Contact Us"}
      />
     <BlogDetailsPage blogDetails={blogDetails} />
      <ImageCard />
      <BrandSection />
    </div>
  )
}

export default BlogDetaisPage
