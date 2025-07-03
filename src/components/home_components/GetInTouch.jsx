
import { useForm } from "react-hook-form";
import { FaUser, FaEnvelope, FaPhoneAlt, FaRegCommentDots } from "react-icons/fa";

import getin from '../../assets/images/getin.png'
import Title from '../common/Title'

const GetInTouch = () => {
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  const inputStyles =
    "w-full pl-10 pr-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-primary text-sm placeholder-gray-400";


  return (
    <div className='section-padding-x section-padding-y'>
      <div className='w-full flex justify-between gap-20'>
<div className='w-1/2'>
<div className='w-full h-[800px]'>
<img src={getin}  alt="" className="w-full h-full"/>

</div>
</div>
<div className='w-1/2'>
<Title level="title48" className='text-Primary '>Let’s Get In Touch</Title>
<Title level="title18" className='text-Primary py-5'>Have a question or want to work together? Let’s get in touch — we’d love to hear from you and will respond as soon as we can.</Title>
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
            {...register("phone", { required: "Phone is required" })}
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
            className="w-full pl-10 pr-4 pt-3 pb-20 border rounded-lg outline-none focus:ring-2 focus:ring-primary text-sm placeholder-gray-400 resize-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-[#394049] text-white py-3 rounded-full font-semibold hover:bg-[#2e353c] transition-all"
      >
        Submit
      </button>
    </form>
</div>
      </div>
    </div>
  )
}

export default GetInTouch
