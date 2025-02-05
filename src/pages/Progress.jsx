import React from "react";
import { motion } from "framer-motion";
import pic from '../assets/rec.png'
import pic2 from '../assets/reg.png'
import pic3 from '../assets/rag.png'

const Progress = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 md:mt-24 p-4 w-full">
      {/* Progress bar container */}
      <motion.h1 
        className="text-3xl font-serif mb-4 text-[#6D142A]"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        Our Progress
      </motion.h1>
      <div className="relative w-full max-w-[1200px]">
        {/* Progress bar line */}
        <div className="absolute bg-orange-300 h-[2px] w-full top-[40%] left-0 z-[1] translate-y-[-50%]" />

        {/* Progress steps */}
        <div className="flex justify-between items-center z-10">
          {/* Step 1 */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.2, duration: 1 }}
          >
            <div className="bg-orange-300 mt-3 text-white rounded-full w-4 h-4 flex items-center justify-center" />
            <span className=" text-xl">Step 01</span>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.4, duration: 1 }}
          >
            <div className="bg-orange-300 border border-orange-500 mt-3 text-white rounded-full w-4 h-4 flex items-center justify-center" />
            <span className=" text-xl">Step 02</span>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.6, duration: 1 }}
          >
            <div className="bg-orange-300 mt-3 text-gray-500 rounded-full w-4 h-4 flex items-center justify-center" />
            <span className=" text-xl">Step 03</span>
          </motion.div>

          {/* Step 4 */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.8, duration: 1 }}
          >
            <div className="bg-orange-300 mt-3 text-white rounded-full w-4 h-4 flex items-center justify-center" />
            <span className=" text-xl">Step 04</span>
          </motion.div>
        </div>
      </div>

      {/* Card content under each step */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 w-full max-w-[1200px]">
        {/* Card 1 */}
        <motion.div 
          className="bg-white text-center p-6" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1, duration: 1 }}
        >
          <img
            src={pic}
            alt="Legacy Building"
            className="w-full h-20 object-contain rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Discovery</h3>
          <p>
            We take time to understand your vision, goals, and aspirations.
            Every project begins with a collaborative conversation.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          className="bg-white p-6 text-center" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1.2, duration: 1 }}
        >
          <img
            src={pic2}
            alt="Legacy Building"
            className="w-full h-20 object-contain rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Design and Planning</h3>
          <p>
            Our team of engineers, architects, and planners transforms ideas
            into actionable blueprints, ensuring efficiency and feasibility.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div 
          className="bg-white p-6 text-center" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1.4, duration: 1 }}
        >
          <img
            src={pic3}
            alt="Legacy Building"
            className="w-full h-20 object-contain rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold mb-2"> Execution</h3>
          <p>
            With precision and expertise, we bring your project to life,
            adhering to timelines, budgets, and the highest standard.
          </p>
        </motion.div>

        {/* Card 4 */}
        <motion.div 
          className="bg-white p-6 text-center" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1.6, duration: 1 }}
        >
          <img
            src={pic}
            alt="Legacy Building"
            className="w-full h-20 object-contain rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Legacy Building</h3>
          <p>
            We’re not just constructing buildings; we’re creating landmarks that
            leave a lasting impact.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Progress;
