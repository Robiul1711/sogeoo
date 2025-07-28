import React from "react";
import faq from "@/assets/images/faq.png";
import Title from "../common/Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const FAQ = () => {
  const axiosPublic = useAxiosPublic();
  const { data } = useQuery({
    queryKey: ["faqs"],
    queryFn: async () => {
      const response = await axiosPublic.get("/faqs");
      return response?.data;
    },
  });

  const faqs = data?.data;

  return (
    <div className="section-padding-x section-padding-y">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-12 ">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2  flex justify-center">
          <img src={faq} alt="FAQ" className="max-w-full h-auto rounded-xl" />
        </div>

        {/* Right: FAQ Content */}
        <div className="w-full lg:w-1/2">
          <Title level="title48" className="text-Primary">
            Frequently Asked Questions
          </Title>
          <Title level="title18" className="text-[#6E6E6E] py-5">
            Have questions? Find quick answers to common inquiries about our
            insurance plans, claims, payments, and more. Need help? Our support
            team is always here for you.
          </Title>

          <div>
            <Accordion type="single" collapsible>
              {faqs?.map((item) => (
                <AccordionItem key={item.id} value={`item-${item.id}`}>
                  <AccordionTrigger className="text-Primary text-lg sm:text-xl">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4B5563] text-base sm:text-lg">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
