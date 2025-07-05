import React from "react";
import faq from "@/assets/images/faq.png";
import Title from "../common/Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const data = [
  {
    id: 1,
    question: "What services does Sógeo provide?",
    answer: "We provide trusted insurance services designed to protect what matters most—your health, home, vehicle, and business. With clear policies, responsive claims support, and a personal touch, we ensure you're covered through every stage of life..",
  },
  {
    id: 2,
    question: "What services does Sógeo provide?",
    answer: "We provide trusted insurance services designed to protect what matters most—your health, home, vehicle, and business. With clear policies, responsive claims support, and a personal touch, we ensure you're covered through every stage of life.",
  },
  {
    id: 3,
    question: "What services does Sógeo provide?",
    answer: "We provide trusted insurance services designed to protect what matters most—your health, home, vehicle, and business. With clear policies, responsive claims support, and a personal touch, we ensure you're covered through every stage of life.",
  },
  {
    id: 4,
    question: "What services does norcal provide?",
    answer: "We provide trusted insurance services designed to protect what matters most—your health, home, vehicle, and business. With clear policies, responsive claims support, and a personal touch, we ensure you're covered through every stage of life.",
  },
];
const FAQ = () => {
  return (
    <div className="section-padding-x section-padding-y">
      <div className="w-full flex justify-between items-center gap-12 lg:gap-24">
        <div className="w-1/2">
          <img src={faq} alt="" />
        </div>
        <div className="w-1/2">
          <Title level="title48" className="text-Primary ">
            Frequently Asked Questions
          </Title>
          <Title level="title18" className="text-[#6E6E6E] py-5">
            Have questions? Find quick answers to common inquiries about our
            insurance plans, claims, payments, and more. Need help? Our support
            team is always here for you.{" "}
          </Title>

          <div>
            <Accordion type="single" collapsible>
                {
                  data.map((item) => (
                    <AccordionItem value={`item-${item.id}`}>
                      <AccordionTrigger className={"text-Primary text-2xl"}>
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className={"text-Primary text-lg"}>
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))
                }

            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
