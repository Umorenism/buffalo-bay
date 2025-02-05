import React from 'react';
import { motion } from 'framer-motion';
import logo from "../../src/assets/vec.png"
import log from '../../src/assets/vector-logo.png';
import logos from '../../src/assets/vector-logo-sec.png';

const WhoWeAre = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20 p-4">
      <motion.h1
        className="text-3xl text-[#6D142A] font-serif text-start max-w-6xl w-full mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        What We Do
      </motion.h1>
      
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {/* Left Card */}
        <motion.div
          className="p-8 rounded-lg bg-[#F0F0F0] shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl text-[#6D142A] font-bold mb-4">Real Estate Development</h2>
          <ul className="mt-6 list-disc pl-6">
            <li>Designing and building residential communities that blend comfort with modern aesthetics.</li>
            <li className="mt-6">Creating commercial spaces that are as functional as they are visually striking.</li>
          </ul>
          <div className="mt-20 w-full">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl text-slate-400">#1</h1>
              <img src={logo} alt="Real Estate" className="w-12 h-12 object-contain" />
            </div>
          </div>
        </motion.div>

        {/* Middle Card */}
        <motion.div
          className="bg-[#6D142A] text-white h-auto p-8 rounded-lg shadow-lg transform transition-all mt-10 translate-y-4 hover:scale-105 hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl text-white font-bold mb-4">Civil Engineering and Construction</h2>
          <ul className="mt-6 list-disc pl-6">
            <li>From roads to bridges, we develop infrastructure that connects and empowers communities.</li>
            <li className="mt-6">Constructing innovative buildings that stand the test of time.</li>
          </ul>
          <div className="mt-20 w-full">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl text-slate-400">#2</h1>
              <img src={log} alt="Civil Engineering" className="w-12 h-12 object-contain" />
            </div>
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          className="bg-[#F0F0F0] h-auto p-8 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl text-[#6D142A] font-bold mb-4">Project Management and Consultancy</h2>
          <ul className="mt-6 list-disc pl-6">
            <li>Providing end-to-end solutions, from concept to completion.</li>
            <li className="mt-6">Offering expert advice on project design, budgeting, and execution.</li>
          </ul>
          <div className="mt-20 w-full">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl text-slate-400">#3</h1>
              <img src={logos} alt="Project Management" className="w-12 h-12 object-contain" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhoWeAre;
