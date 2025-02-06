import React from "react";
import pic from "../../src/assets/contact.png";
import pic2 from "../../src/assets/call.png";

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
            <h1 className="font-bold text-4xl text-pink-950 w-full text-start">
              Give us a phone call
            </h1>
          </div>

          {/* Horizontal divider */}
          <hr className="w-full my-6 border-t-2 border-pink-950" />
        </div>

        {/* Container for the second section */}
        <div className="w-full mx-auto px-6 flex justify-center items-center h-[501px]">
          <div className="w-full md:w-[1182px] p-6  flex justify-center items-center  rounded-lg">
            <div className="w-full flex-col h-[259px]  flex justify-center items-center">
              {/* Content inside the box */}
              <h1 className="text-pink-800 text-3xl font-serif w-full">Tel</h1>
              <div className="flex gap-20 flex-col md:flex-row justify-between items-center  w-full">
                <div className="md:w-1/2 mt-2 w-full">
                  <h1 className="text-4xl font-bold text-black">0810 782 5959, </h1>
                  <h1 className="text-4xl mt-2 font-bold text-black">0905 276 6460</h1>
                  <p className="text-sm text-slate-700">
                    <strong>Department in charge:</strong> Sales Department
                    <br />
                    <strong>Hours:</strong> 9 a.m. – 5 p.m., Mon. – Fri.
                    (excluding national holidays and New Year holiday)
                  </p>
                </div>
                <div className="md:w-1/2 mt-2 text-center w-full ">
                  <div className="w-24 h-24  animate-bounce duration-300 bg-pink-800  rounded-full flex  justify-center items-center">
                    <img src={pic2} alt="call"  />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactService;
