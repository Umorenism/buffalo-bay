import React from 'react';
import { motion } from 'framer-motion';
import pic1 from '../assets/star.png';
import pic2 from '../assets/tie.png';

const Choose = () => {
  return (
    <div className="relative flex justify-center items-center mt-10 md:mt-24 p-4">
      {/* Background Image with Overlay */}
      <div className="relative w-full max-w-7xl">
        <motion.img
          src="https://s3-alpha-sig.figma.com/img/1d20/e6f8/34848f34408e556f687ea6017806d453?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Fp6wPqFuDZoEgc3hu~Vf1jsUle8uY~r48x5TjEjZzTgyEa5BLLTfqefXCqtyy-~b5Cep6EBL0lwPqPDqtWGhkv7dOi2P7la553MnPBauk-57sZeTfcoJZi0MRKYsnM9WkcsYeDARY1dvNQ88gIm4CbEqiF-s8FjBWSCHkx5cTNkYbMWTX2xTQWiIhGEwf-2VzvLGLqj-F4jp2rbo4OaHZ9cN6jIb8F46bs2qC0YZ4nUjKNAtEFwtH5abnkd4x6vwkPJpT27MwWrJaI6Vw5gZf1u5c~svpnF1YQm5wdGYOzI0GpkokXp88jhmw9NT2q8lVGJZHLRBsggEtlmcakfAiw__"
          alt="logo"
          className="w-full h-full md:h-[600px] object-cover rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/55 bg-opacity-60 flex flex-col justify-center items-start text-white p-4 md:p-8">
          <motion.h1
            className="text-2xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Why Choose Us?
          </motion.h1>

          <motion.div
            className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {[
              { img: pic1, title: 'Unmatched Expertise', desc: 'Years of collective experience across diverse projects.' },
              { img: pic2, title: 'Innovation Driven', desc: 'Embracing modern construction technologies and methods.' },
              { img: pic1, title: 'Client-Centric', desc: 'Personalized solutions tailored to meet your unique needs.' },
              { img: pic1, title: 'Proven Track Record', desc: 'Delivering successful projects on time and within budget.' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center w-full md:text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img src={item.img} alt="icon" className="h-8 w-8 object-contain mb-1" />
                <p className="font-semibold text-center text-lg mb-1">{item.title}</p>
                <h2 className="text-sm mb-1 text-center text-gray-300">{item.desc}</h2>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
