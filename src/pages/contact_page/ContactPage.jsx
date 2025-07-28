import CommonBanner from "@/components/common/CommonBanner";
import React from "react";
import contactBanner from "../../assets/images/contactBanner.png";
import ContactForm from "@/components/contact_component/ContactForm";
import BrandSection from "@/components/home_components/BrandSection";
const ContactPage = () => {
  return (
    <div>
      <CommonBanner
        image={contactBanner}
        title={"Contact Us"}
        description={
          "Whether you have a question, comment, or feedback, please don't hesitate to reach out to us. We're here to help and look forward to connecting with you."
        }
        link={"#"}
        // linkText={"Contact Us"}
      />
      <ContactForm />
      <BrandSection />
    </div>
  );
};

export default ContactPage;
