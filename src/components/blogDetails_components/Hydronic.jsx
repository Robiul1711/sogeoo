import Title from "../common/Title";
import HoverBorderCard from "./HoverBorderCard"; // Don't forget to import this if you use it

const Hydronic = ({ hydronicsDetails }) => {
  const data = hydronicsDetails;

  return (
    <div className="section-padding-x section-padding-y">
      <div className="max-w-[1000px]">
        <Title level="title48" className="text-Primary">
          {data?.title || "Untitled"}
        </Title>
        <div
          className="mt-4 text-[#333333] text-base leading-relaxed"
          dangerouslySetInnerHTML={{ __html: data?.description || "" }}
        />
      </div>

      <HoverBorderCard />
    </div>
  );
};

export default Hydronic;
