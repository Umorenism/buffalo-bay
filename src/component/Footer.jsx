import { motion } from 'framer-motion';
import backgroundImage from '../assets/footerimg.jpeg'; 

export const Footer = () => {
  return (
    <footer
      className="w-full  bg-gray-800 text-white relative mt-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55 bg-opacity-60"></div>

      {/* Content with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 container mx-auto px-6 md:px-12 py-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Build Your Dream Project?
        </h2>
        <p className="text-lg mb-6">
          Partner with us for quality construction services tailored to your needs.
        </p>
        <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 transition duration-300 rounded-lg shadow-md">
          Get in Touch
        </button>
      </motion.div>
    </footer>
  );
};
