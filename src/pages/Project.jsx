import React from 'react';
import pic from '../../src/assets/treeHus.png';
import pic2 from '../../src/assets/hot.png';
import pic3 from '../../src/assets/open.png';
import pic4 from '../../src/assets/mail.png';
import { FaArrowRight } from "react-icons/fa";

const ProjectWork = () => {
  return (
    <div className='w-full min-h-screen relative bg-gray-100 overflow-hidden flex justify-center items-center flex-col py-10'>
      

      {/* Project Section 1 */}
      
      <div className='relative z-10 mt-20 flex flex-col md:flex-row w-full max-w-6xl items-center justify-between  overflow-hidden px-6 py-8 md:px-12 md:py-16'>
      <h2 className='text-[150px] absolute font-bold opacity-10 mb-4'>PROJECT 1</h2>
        <div className='flex-1 text-start space-y-4'>
          <h2 className='text-3xl md:text-4xl font-extrabold text-[#6D142A]'>UNN Physio Building</h2>
          <p className='text-gray-700'>Full building Construction </p>
          <button className='px-6 mt-20 flex items-center gap-2 py-3 border border-[#6D142A] text-[#6D142A] rounded-lg hover:bg-[#6D142A] hover:text-white transition duration-300'>
            See Project <FaArrowRight />
          </button>
        </div>
        <div className='flex-1 flex items-center justify-center mt-6 md:mt-0 md:ml-6'>
          <img 
            src={pic} 
            alt='Project Image' 
            className='w-full max-w-sm md:max-w-md h-auto object-cover shadow-lg rounded-lg'
          />
        </div>
      </div>

      {/* Project Section 2 - Image Left */}
      
      <div className='relative z-10 flex flex-col md:flex-row-reverse w-full max-w-6xl items-center justify-between gap-10 overflow-hidden px-6 py-8 md:px-12 md:py-16'>
      <h2 className='text-[150px] left-0 absolute font-bold opacity-10 mt-12 mb-4'>PROJECT 2</h2>
      <div className='flex-1 text-start space-y-4'>
          <h2 className='text-3xl md:text-4xl font-extrabold text-[#6D142A]'>UNN Physio Building</h2>
          <p className='text-gray-700'>Full building Construction </p>
          <button className='px-6 mt-20 flex items-center gap-2 py-3 border border-[#6D142A] text-[#6D142A] rounded-lg hover:bg-[#6D142A] hover:text-white transition duration-300'>
            See Project <FaArrowRight />
          </button>
        </div>
        <div className='flex-1 flex items-center justify-center mt-6 md:mt-0 md:mr-6'>
          <img 
            src={pic2} 
            alt='Project Image' 
            className='w-full max-w-sm md:max-w-xl h-auto object-cover shadow-lg rounded-lg'
          />
        </div>
      </div>

      {/* Project Section 3 */}
      
      <div className='relative z-10 flex flex-col md:flex-row w-full max-w-6xl gap-10 items-center justify-between  overflow-hidden px-6 py-8 md:px-12 md:py-16'>
      <h2 className='text-[150px] absolute font-bold opacity-10 mt-12 mb-4'>PROJECT 3</h2>
      <div className='flex-1 text-start space-y-4'>
          <h2 className='text-3xl md:text-4xl font-extrabold text-[#6D142A]'>UNN Physio Building</h2>
          <p className='text-gray-700'>Full building Construction </p>
          <button className='px-6 mt-20 flex items-center gap-2 py-3 border border-[#6D142A] text-[#6D142A] rounded-lg hover:bg-[#6D142A] hover:text-white transition duration-300'>
            See Project <FaArrowRight />
          </button>
        </div>
        <div className='flex-1 flex items-center justify-center mt-6 md:mt-0 md:ml-6'>
          <img 
            src={pic3} 
            alt='Project Image' 
            className='w-full max-w-sm md:max-w-md h-auto object-cover shadow-lg rounded-lg'
          />
        </div>
      </div>

      {/* Project Section 4 */}
      
      <div className='relative gap-10 z-10 flex flex-col md:flex-row-reverse w-full max-w-6xl items-center justify-between overflow-hidden px-6 py-8 md:px-12 md:py-16'>
      <h2 className='text-[100px] absolute left-0 font-bold opacity-10 mt-12 mb-4'>PROJECT 4</h2>
      <div className='flex-1 text-start space-y-4'>
          <h2 className='text-3xl md:text-4xl font-extrabold text-[#6D142A]'>UNN Physio Building</h2>
          <p className='text-gray-700'>Full building Construction </p>
          <button className='px-6 mt-20 flex items-center gap-2 py-3 border border-[#6D142A] text-[#6D142A] rounded-lg hover:bg-[rgb(109,20,42)] hover:text-white transition duration-300'>
            See Project <FaArrowRight />
          </button>
        </div>
        <div className='flex-1 flex items-center justify-center mt-6 md:mt-0 md:mr-6'>
          <img 
            src={pic4} 
            alt='Project Image' 
            className='w-full max-w-sm md:max-w-md h-auto object-cover shadow-lg rounded-lg'
          />
        </div>
      </div>
     
    </div>
  );
};

export default ProjectWork;
