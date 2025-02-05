import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { TiTabsOutline, TiThMenu } from "react-icons/ti";
import { TbMenu } from "react-icons/tb";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenuOpen = () => {
    setMenuIsOpen(!isMenuOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeIn" } }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.3, ease: "easeIn" } }
  };

  return (
    <header className="fixed text-white top-0 border-b-2 left-0 right-0 z-50">
      <div className="flex text-white justify-between items-center p-4 max-w-screen-2xl mx-auto">
        <div className="text-xl md:text-4xl font-bold text-green-600 flex items-center gap-2">
          <img src="" alt="logo" className="h-5 w-5 object-contain" />
          <div className="flex flex-col items-center">
            <h1 className="text-white uppercase font-serif text-2xl">Buffalo & BAY</h1>
            <p className="text-white text-sm">STRENGTH AND SPLENDOR</p>
          </div>
        </div>

        <nav className="hidden md:flex space-x-2 items-center gap-5">
          <div className="flex items-center gap-4">
            <p className="h-14 bg-white w-[0.01rem]"></p>
            <div onClick={toggleMenuOpen} className="cursor-pointer">
              <TbMenu size={40} />
              <h1 className="font-bold">Menu</h1>
            </div>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={menuVariants}
                  className="absolute w-full right-0 top-28 left-0 bg-white shadow-lg rounded-lg p-4"
                >
                  <ul className="space-y-2">
                    <li className="hover:bg-gray-100 p-2 rounded">Home</li>
                    <li className="hover:bg-gray-100 p-2 rounded">About</li>
                    <li className="hover:bg-gray-100 p-2 rounded">Services</li>
                    <li className="hover:bg-gray-100 p-2 rounded">Contact</li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <button className="md:hidden text-white" onClick={toggleMenu}>
          <TiThMenu size={28} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="fixed inset-0 bg-black/90 text-white shadow-lg md:hidden z-50"
          >
            <div className="flex justify-end p-4">
              <button className="text-white" onClick={toggleMenu}>
                <TiTabsOutline size={28} />
              </button>
            </div>
            <div className="flex flex-col items-center p-4 space-y-4">
              <Link to="/" className="py-2 text-lg" onClick={toggleMenu}>Home</Link>
              <Link to="/about" className="py-2 text-lg" onClick={toggleMenu}>About</Link>
              <Link to="/mission" className="py-2 text-lg" onClick={toggleMenu}>Mission</Link>
              <Link to="/achievement" className="py-2 text-lg" onClick={toggleMenu}>Achievement</Link>
              <Link to="/contact" className="py-2 text-lg" onClick={toggleMenu}>Contact</Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
