import React from "react";
import pic from "../../src/assets/contact.png";

const ContactService = () => {
  return (
    <>
      <div
        className="h-[520px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${pic})` }}
      />

      <div className="relative bg-white w-full rounded-t-[50px] z-10 -mt-[100px] pt-20 flex-col flex items-center justify-center">

      <div className="w-full flex-col flex justify-center items-center">
  {/* Container for the title */}
  <div className="md:w-[1182px] w-full  flex justify-start items-center p-6">
    <h1 className="font-bold text-4xl text-pink-950 w-full text-start">Give us a phone call</h1>
  </div>

  {/* Horizontal divider */}
  <hr className="w-full my-6 border-t-2 border-pink-950" />
</div>

{/* Container for the second section */}
<div className="w-full mx-auto px-6 flex justify-center items-center h-[501px]">
  <div className="w-full md:w-[1182px] p-6 bg-pink-700 flex justify-center items-center rounded-lg">
    <div className="w-full h-[259px] bg-pink-800 flex justify-center items-center text-white">
      {/* Content inside the box */}
      hh
    </div>
  </div>
</div>

      </div>
      
    </>
  );
};

export default ContactService;
