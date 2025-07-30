import HoverBorderCard from "@/components/blogDetails_components/HoverBorderCard";
import Title from "@/components/common/Title";

const BlogDetailsPage = ({ blogDetails }) => {

  return (
    <div className="section-padding-x section-padding-y">
      <div className="">
        <Title level="title48" className="text-Primary ">
          {blogDetails?.title}
        </Title>
        <div
          className="mt-4 text-[#333333] text-base leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blogDetails?.long_description }}
        ></div>
        <div className="my-20">

          <img src={blogDetails?.images[0].image} alt="" />
        </div>
      </div>
      <HoverBorderCard
       
      />
    </div>
  );
};

export default BlogDetailsPage;
