import React from "react";

import GlobalContainer from "../component/Container";
import pic from "../../src/assets/np.png";
import pic2 from "../../src/assets/pro.png";
import vec1 from "../../src/assets/f-vector.png";
import property from "../../src/assets/propertfull.png";
import Location from "../component/Location";
import Mail from "../component/Mail";
import Slider from "../component/Slider";

const ProjectDes = () => {
  return (
    <>
      <Slider/>
      <div className="h-full w-full bg-gray-50 py-5 px-4 md:px-10">
        <GlobalContainer>
          <div className="mt-10 md:mt-20">
            <h1 className="text-xl md:text-2xl font-bold mb-2">
              UNN Physio Building
            </h1>
            <p className="text-sm md:text-base mb-4">
              Full Building Construction
            </p>
            <hr className="my-4" />

            <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-start md:items-center justify-between">
              <h1 className="text-sm md:text-base">
                Address: St. Nishava 97, Nbhd. Strelbishte, Sofia
              </h1>
              <span className="hidden md:inline">|</span>

              <h1 className="text-sm md:text-base">
                Level of completion: Rough construction
              </h1>
              <span className="hidden md:inline">|</span>

              <h1 className="text-sm md:text-base">Year: 2024</h1>
              <span className="hidden md:inline">|</span>

              <h1 className="text-sm md:text-base">Residential</h1>
            </div>

            <hr className="my-4" />
          </div>

          {/* card1 */}
          <div className="py-8 px-4 mt-24 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Text Section */}
              <div>
                <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                  About Project
                </h1>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  The exterior features a contrast of white ceramic tiles and
                  dark gray vertical grid. The French windows reveal an
                  incredible urban landscape overlooking Sofia and the Vitosha
                  mountain as a backdrop.
                </p>
              </div>

              {/* Image Section */}
              <div>
                <img
                  src={pic} // Replace with your image URL
                  alt="Urban Landscape"
                  className="w-full h-auto rounded-xl shadow-md object-cover"
                />
              </div>
            </div>
          </div>
          <div className="py-8 px-4 mt-24 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Image Section */}
              <div>
                <img
                  src={pic2} // Replace with your image URL
                  alt="Urban Landscape"
                  className="w-full h-auto rounded-xl shadow-md object-cover"
                />
              </div>

              {/* Text Section */}
              <div>
                <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                  About Project
                </h1>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  The exterior features a contrast of white ceramic tiles and
                  dark gray vertical grid. The French windows reveal an
                  incredible urban landscape overlooking Sofia and the Vitosha
                  mountain as a backdrop.
                </p>
              </div>
            </div>
          </div>

          <div className="py-8 px-4 mt-24 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto gap-8 items-center">
              <h1 className="text-2xl font-serif font-bold items-start md:text-start w-full  mb-10">
                Features
              </h1>
              <div className="flex flex-col md:flex-row gap-8 mb-5">
                <div className="flex flex-col items-center md:items-start w-full">
                  <img
                    src={vec1}
                    alt="Feature 1"
                    className="h-10 w-10 object-contain"
                  />
                  <p className="mt-4 text-start md:text-left">
                    The heating in the building is centrally provided by
                    Toplofikatsiya AD. All rooms in all apartments are equipped
                    with underfloor heating, ensuring comfort, cleanliness, and
                    spaciousness.
                  </p>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <img
                    src={vec1}
                    alt="Feature 2"
                    className="h-10 w-10 object-contain"
                  />
                  <p className="mt-4 text-start md:text-left">
                    The heating in the building is centrally provided by
                    Toplofikatsiya AD. All rooms in all apartments are equipped
                    with underfloor heating, ensuring comfort, cleanliness, and
                    spaciousness.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <img
                  src={vec1}
                  alt="Feature 3"
                  className="h-10 w-10 object-contain"
                />
                <p className="mt-4 text-start md:text-left md:w-[50%]">
                  The heating in the building is centrally provided by
                  Toplofikatsiya AD. All rooms in all apartments are equipped
                  with underfloor heating, ensuring comfort, cleanliness, and
                  spaciousness.
                </p>
              </div>
            </div>
          </div>
        </GlobalContainer>
        <img
          src={property}
          alt=""
          className="w-full h-[783px] mt-4 object-cover bg-center"
        />
        <Location/>
      </div>
      <Mail/>
    </>
  );
};

export default ProjectDes;
