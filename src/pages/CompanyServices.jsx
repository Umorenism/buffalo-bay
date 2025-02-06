import React from "react";
import openHouse from "../../src/assets/open.png";
import pics from "../../src/assets/step.png";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
const CompanyServices = () => {
  return (
    <>
      <div className="w-full min-h-screen  bg-white flex flex-col items-center py-10 px-5">
        <h1 className="text-3xl mt-20 font-bold text-gray-800 mb-10">
          Our Services
        </h1>

        <div className="w-full max-w-6xl flex flex-col gap-16">
          {/* Right Side Content */}
          <div className="flex flex-col  items-end text-center md:text-left">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Architectural Design
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At Dager Engineering, we are committed to being constant
                advisors to our clients and strive to build relationships based
                on trust. Our desire is to construct modern buildings with a
                priority on long-lasting partnerships grounded in fairness and
                trust.
              </p>
            </div>
            <div className="md:w-1/2 flex mt-4 justify-center">
              <img
                src={openHouse}
                alt="Architectural Design"
                className="w-full max-w-[788px] rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Left Side Content */}
          <div className="flex flex-col  items-start text-center md:text-left">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Development and execution of innovative interior solutions
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At Dager Engineering Ltd., we are committed to being constant
                advisors to our clients and strive to build relationships based
                on trust. With our expertise, refined sense of combining forms,
                colors, and materials, as well as composing volumes, our
                specialists will work in dialogue with you to achieve the
                impressive look of your home. We will design and execute such an
                interior.
              </p>
            </div>
            <div className="md:w-1/2 mt-4 flex justify-center">
              <img
                src={openHouse}
                alt="Structural Engineering"
                className="w-full max-w-[788px] rounded-lg shadow-md"
              />
            </div>
          </div>
          <hr />
        </div>

        <div className="flex flex-col md:flex-row  justify-center mt-[110px] px-5 gap-10 md:gap-20">
          {/* Left Section - Button */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-[30%] w-full"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border w-full items-center px-6 py-3 font-bold flex  gap-2 border-black  transition-all duration-300 hover:bg-gray-900 hover:text-white"
            >
              Review Project <FaArrowRight />
            </motion.button>
          </motion.div>

          {/* Right Section - Image */}
          <motion.div
            className="flex justify-center w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={openHouse}
              alt="Interior & Exterior Design"
              className="w-full min-w-[300px] mt-4 max-w-[100%] md:max-w-[788px] rounded-lg shadow-xl object-cover"
            />
          </motion.div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col justify-center  items-center text-center md:text-left w-full">
        <div className="mt-[110px]  w-full max-w-6xl">
          <h1 className="text-[#904D5E] text-4xl items-center md:text-start font-bold font-serif">
            Our Process
          </h1>
          <hr className="text-[#904D5E] mt-5" />

          <div className="flex mt-2 flex-col md:text-start md:flex-row justify-between items-center">
            <h1 className="h-20 w-10 border border-[#904D5E] text-[#904D5E] flex items-center justify-center [writing-mode:vertical-rl] rotate-180">
              STEP 01
            </h1>

            <h2>Discovery</h2>
            <img
              src={pics}
              alt="Step Image"
              className="h-20 w-20 object-contain my-2 md:my-0"
            />
            <h2 className="">
              We take time to understand your vision, goals, and aspirations.
              <br /> Every project begins with a collaborative conversation.
            </h2>
          
          </div>
          <hr className="text-[#904D5E] mt-2" />

          <hr className="text-[#904D5E] mt-2" />

          <div className="flex mt-2 flex-col md:text-start md:flex-row justify-between items-center">
            <h1 className="h-20 w-10 border border-[#904D5E] text-[#904D5E] flex items-center justify-center [writing-mode:vertical-rl] rotate-180">
              STEP 02
            </h1>

            <h2>Design and Planning</h2>
            <img
              src={pics}
              alt="Step Image"
              className="h-20 w-20 object-contain my-2 md:my-0"
            />
            <h2 className="">
              Our team of engineers, architects, and planners transforms ideas <br />
              into actionable blueprints, ensuring efficiency and feasibility.
            </h2>
          </div>
          <hr className="text-[#904D5E] mt-2" />
          <hr className="text-[#904D5E] mt-5" />

          <div className="flex flex-col mt-2 md:text-start md:flex-row justify-between items-center">
            <h1 className="h-20 w-10 border border-[#904D5E] text-[#904D5E] flex items-center justify-center [writing-mode:vertical-rl] rotate-180">
              STEP 03
            </h1>

            <h2>Execution</h2>
            <img
              src={pics}
              alt="Step Image"
              className="h-20 w-20 object-contain my-2 md:my-0"
            />
            <h2 className="">
              With precision and expertise, we bring your project to life,<br />
              adhering to timelines, budgets, and the highest standards.
            </h2>
          </div>
          <hr className="text-[#904D5E] mt-2" />
          <hr className="text-[#904D5E] mt-5" />
          <div className="flex flex-col mt-2 md:text-start md:flex-row justify-between items-center">
            <h1 className="h-20 p-2 w-10 border border-[#904D5E] text-[#904D5E] flex items-center justify-center [writing-mode:vertical-rl] rotate-180">
              STEP 04
            </h1>

            <h2>Execution</h2>
            <img
              src={pics}
              alt="Step Image"
              className="h-20 w-20 object-contain my-2 md:my-0"
            />
            <h2 className="">
              We’re not just constructing buildings; we’re creating landmarks <br />
              that leave a lasting impact.
            </h2>
          </div>
          <hr className="text-[#904D5E] mt-2" />
          
        </div>
      </div>
    </>
  );
};

export default CompanyServices;
