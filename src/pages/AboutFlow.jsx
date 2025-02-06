

import React, { useEffect, useState } from "react";
import picImage from "../../src/assets/aboutimg.png";
import openImage from "../../src/assets/open.png";
import { motion } from "framer-motion";
const AboutFlow = () => {
  const counters = [26, 400, 23, 61000, 3];
  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    const intervals = counters.map((target, index) => {
      const increment = target / 100;
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < target) {
            newCounts[index] = Math.min(newCounts[index] + increment, target);
          }
          return newCounts;
        });
      }, 50);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <div>
      <div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${picImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-6 max-w-lg">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
          </div>
        </div>
      </div>

      <div className="py-10 md:mt-[150px] w-full flex justify-center items-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center text-white">
          <div>
            <h1 className="text-5xl font-bold text-[#6D142A]">
              {Math.floor(counts[0])}
            </h1>
            <p className="text-sm text-slate-900">Years in the Industry</p>
          </div>
          <div>
            <h1 className="text-5xl font-bold text-[#6D142A]">
              {Math.floor(counts[1])}+
            </h1>
            <p className="text-sm text-slate-900">Satisfied</p>
          </div>
          <div>
            <h1 className="text-5xl font-bold text-[#6D142A]">
              {Math.floor(counts[2])}
            </h1>
            <p className="text-sm text-slate-900">Completed projects</p>
          </div>
          <div>
            <h1 className="text-5xl font-bold text-[#6D142A]">
              {Math.floor(counts[3])}+
            </h1>
            <p className="text-sm text-slate-900">Built area</p>
          </div>
          <div>
            <h1 className="text-5xl font-bold text-[#6D142A]">
              {Math.floor(counts[4])}
            </h1>
            <p className="text-sm text-slate-900">Upcoming</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-10 md:mt-[150px] w-full flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center text-black max-w-5xl px-4">
          <div className="flex flex-col items-center">
            <p className="h-1 w-20 bg-orange-500 mb-4"></p>
            <h1 className="text-xl font-semibold">
              Our Vision <br /> and Mission
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold mb-2">Vision</h1>
            <p className="text-sm text-gray-700">
              To be a beacon of innovation and excellence in Nigeria’s
              construction and real estate sectors, creating sustainable
              solutions that shape tomorrow.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold mb-2">Mission</h1>
            <p className="text-sm text-gray-700">
              To be a beacon of innovation and excellence in Nigeria’s
              construction and real estate sectors, creating sustainable
              solutions that shape tomorrow.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-10 md:mt-[150px] w-full flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center text-black max-w-5xl px-4">
          <div className="flex flex-col items-center">
            <p className="h-1 w-20 bg-orange-500 mb-4"></p>
            <h1 className="text-xl font-semibold">
              Our Vision <br /> and Mission
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold mb-2">Vision</h1>
            <p className="text-sm text-gray-700">
              At Buffalo & Bay, our foundation is built on the <span>4P’s</span>{" "}
              of Excellence:
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold mb-2">Precision</h1>
            <p className="text-sm text-gray-700">
              Delivering projects with unmatched attention to detail.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold mb-2"></h1>
            <p className="text-sm text-gray-700"></p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold mb-2">Passion</h1>
            <p className="text-sm text-gray-700">
              Bringing dedication and enthusiasm to every project.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold mb-2">Partnership</h1>
            <p className="text-sm text-gray-700">
              Collaborating with clients, communities, and stakeholders to
              achieve shared success
            </p>
          </div>
        </div>
        
       
      </div>
      <hr />

      <div className="py-10 md:mt-[150px] w-full flex justify-center items-center">
  <motion.img 
    src={openImage} 
    alt="About" 
    className="w-full h-auto max-w-5xl object-cover"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  />
</div>
    </div>
  );
};

export default AboutFlow;
