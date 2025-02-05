import { motion } from "framer-motion";
import backgroundImage from "../assets/footerimg.jpeg";
import pic from "../assets/Layer_1.png";

export const Footer = () => {
  return (
    <footer
      className="w-full bg-gray-800 text-white relative mt-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 container mx-auto px-6 md:px-12 py-16 text-center"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left items-center">
          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-start space-y-z">
            <img src={pic} alt="Logo" className="h-24 w-24 object-contain" />
            <p className="text-lg font-semibold">Contact us today!</p>
          </div>

          {/* About Section */}
          <div className="space-y-2">
            <h1 className="text-xl font-bold text-[#ECB35C]">About Buffalo & Bay</h1>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#ECB35C] transition">Service</a></li>
              <li><a href="#" className="hover:text-[#ECB35C] transition">Package</a></li>
              <li><a href="#" className="hover:text-[#ECB35C] transition">Contact</a></li>
            </ul>
          </div>

          {/* Address Section */}
          <div className="space-y-2">
            <h1 className="text-xl font-bold text-[#ECB35C]">Address</h1>
            <p>Machima Spaces, Off Mambolo Street,</p>
            <p>Wuse, Abuja, Nigeria</p>
            <div className="h-1 w-5 bg-[#ECB35C] my-2"></div>

            <h1 className="text-xl font-bold text-[#ECB35C]">Telephone</h1>
            <p>0810 782 5959, 0905 276 6460</p>
            <div className="h-1 w-5 bg-[#ECB35C] my-2"></div>

            <h1 className="text-xl font-bold text-[#ECB35C]">Email</h1>
            <p>buffalonigeria2233@gmail.com</p>
          </div>
        </div>
        <hr  className="mt-10"/>
        <p className="text-start mt-5">© Copyright 2025 Buffalo & Bay Nigeria limited. All Rights Reserved.</p>
      </motion.div>
     
    </footer>
  );
};
