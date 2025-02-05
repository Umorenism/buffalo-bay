import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import GlobalContainer from "./Container";

const Location = () => {
  const [copied, setCopied] = useState(false);
  const address = "1600 Pennsylvania Avenue NW, Washington, DC 20500, USA"; // Random address

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="h-full w-full bg-gray-50 py-5 px-4 md:px-10">
      <GlobalContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* sectionA - Location Info */}
          <div className="text-start md:w-[373px] md:h-[440px] mb-8 md:mb-0">
            <h1 className="text-2xl font-semibold mb-4">Location</h1>
            <p className="text-gray-700 mb-4">
              The location is <strong>{address}</strong>. This address is a
              well-known landmark and a significant place.
            </p>
            <p className="text-gray-700 mb-4">
              It is easily accessible by public transportation and car, located
              near various other points of interest.
            </p>

            <div className="flex items-center justify-center md:justify-start mb-6">
              <button
                onClick={handleCopy}
                className="bg-slate-400 text-white px-6 py-2 rounded flex items-center gap-2"
              >
                Google Map
                <IoCopyOutline className="text-white" />
                <span className="ml-2">
                  {copied ? "Copied!" : "Copy Address"}
                </span>
              </button>
            </div>
          </div>

          {/* sectionB - Google Map */}
          <div
            className="w-full md:w-[
818px] h-64 md:h-[537px] rounded-lg overflow-hidden"
          >
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d36856066.273693986!2d36.85509089715201!3d1.7417735632926017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1738755019122!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="mt-10 md:mt-20">
          <h1 className="text-xl font-bold text-start md:text-start mb-4 w-full">Teams</h1>
          <p className="md:w-[982px] md:h-[110px]">
            Architect Anton Uzunov, Uzunov Architectural Studio Construction
            <br />engineer Maya Misheva Construction engineer Aleksandar Mishev <br />
            Architect Stefan Gerenski Visualizations: HAUSstudio
          </p>
        </div>
      </GlobalContainer>
    </div>
  );
};

export default Location;
