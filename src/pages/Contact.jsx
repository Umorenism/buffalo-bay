import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai"; // Import the arrow icon

const Contact = () => {
  return (
   <div className="w-full flex justify-center items-center">
     <div className="flex flex-col w-[1729px] items-center justify-center h-[351px] mt-24 p-4 bg-[#F3F3F3]">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black">
        Looking for a Quality Construction?
      </h1>

      <a
        href="#contact-form" // Add the anchor link to scroll to the form section
        className="flex items-center justify-center px-6 py-3 border text-black rounded-lg shadow-lg hover:bg-[#6D142a] hover:text-white transition-all duration-300"
      >
        Contact Us
        <AiOutlineArrowRight className="ml-2 text-xl" />
      </a>
    </div>
   </div>
  );
};

export default Contact;
