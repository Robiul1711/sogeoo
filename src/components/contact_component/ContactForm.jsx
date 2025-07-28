import React from "react";
import contactForm from "../../assets/images/contactForm.png";
import { useForm } from "react-hook-form";
import Title from "../common/Title";
import { FaUser, FaEnvelope, FaPhoneAlt, FaRegCommentDots } from "react-icons/fa";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";
const ContactForm = () => {
  const axiosPublic = useAxiosPublic();
  const ContactMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosPublic.post("/contact-message-send", data);
      return response?.data;
    },
    onSuccess: (response) => {
      toast.success(response?.message || "Message sent successfully");
    },
    onError: (error) => {
      console.log(error);
      const errorMessage =
        error.response?.data?.message || "Something went wrong, try again later!!";
      toast.error(errorMessage);
    },
  })
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    ContactMutation.mutate(data);
  };

  const inputStyles =
    "w-full pl-10 pr-4 py-3 border bg-white rounded-full outline-none focus:ring-2 focus:ring-primary text-sm placeholder-gray-400";
  return (
    <div className="section-padding-x  section-padding-y">
        <div className="w-full bg-[#EFE9D6] rounded-2xl flex flex-col md:flex-row items-center gap-5 p-5">
      <div className="bg-Custom-primary w-full md:w-1/2 p-6 sm:p-8 md:p-10 rounded-2xl space-y-6">
        {/* Header Section */}
        <img src={contactForm} alt="" />
      </div>
      <div className="w-full md:w-1/2">
      <Title level="title48" className='text-Primary '>Let’s Get In Touch</Title>
      <Title level="title18" className='text-Primary '>Have a question or want to work together? Let’s get in touch — we’d love to hear from you and will respond as soon as we can.</Title>
        <form
           onSubmit={handleSubmit(onSubmit)}
           className=" space-y-6 mt-10"
         >
           {/* Name */}
           <div>
             <label className="block text-sm font-medium mb-1">Name</label>
             <div className="relative">
               <FaUser className="absolute left-3 top-3.5 text-gray-400 text-sm" />
               <input
                 type="text"
                 {...register("name", { required: "Name is required" })}
                 placeholder="enter your name"
                 className={inputStyles}
               />
             </div>
           </div>
     
           {/* Email */}
           <div>
             <label className="block text-sm font-medium mb-1">Email Address</label>
             <div className="relative">
               <FaEnvelope className="absolute left-3 top-3.5 text-gray-400 text-sm" />
               <input
                 type="email"
                 {...register("email", { required: "Email is required" })}
                 placeholder="example@gmail.com"
                 className={inputStyles}
               />
             </div>
           </div>
     
           {/* Phone Number */}
           <div>
             <label className="block text-sm font-medium mb-1">Phone Number</label>
             <div className="relative">
               <FaPhoneAlt className="absolute left-3 top-3.5 text-gray-400 text-sm" />
               <input
                 type="tel"
                 {...register("number", { required: "Phone is required" })}
                 placeholder="enter your phone number"
                 className={inputStyles}
               />
             </div>
           </div>
     
           {/* Message */}
           <div>
             <label className="block text-sm font-medium mb-1">Phone Number</label>
             <div className="relative">
               <FaRegCommentDots className="absolute left-3 top-3.5 text-gray-400 text-sm" />
               <textarea
                 {...register("message", { required: "Message is required" })}
                 placeholder="enter your main text here"
                 className="w-full pl-10 pr-4 pt-3 pb-20 border bg-white rounded-lg outline-none focus:ring-2 focus:ring-primary text-sm placeholder-gray-400 resize-none"
               />
             </div>
           </div>
     
           {/* Submit Button */}
           <button
             type="submit"
             className="w-full bg-[#394049] text-white py-3 rounded-full font-semibold hover:bg-[#2e353c] transition-all"
           >
           {ContactMutation?.isPending ? (
            <BeatLoader
              loading={ContactMutation?.isPending}
              color="white"
              size={10}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            "  Send Message"
          )}
           </button>
         </form>
      </div>

        </div>
    </div>
  );
};

export default ContactForm;
