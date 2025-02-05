import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { TiTabsOutline, TiThMenu } from "react-icons/ti";
import { TbMenu } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import HeaderMenu from "./HeaderMenu";
import logo from '../../src/assets/Group 1.png';



const Header= ({ desc,menubg, title, bgColor = 'bg-white', textColor = 'text-black' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleMenuOpen = () => setMenuIsOpen(!isMenuOpen);
  const closeMenu = () => setMenuIsOpen(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeIn" } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <header className={`fixed top-0 h-[96px] left-0 right-0 z-50 ${bgColor} ${textColor}`}>
      <div className="flex h-[90px] justify-between items-center p-4 max-w-screen-2xl mx-auto">
        <div className={`text-xl md:text-4xl font-bold flex items-center gap-2 ${textColor}`}>
          <Link to="/" className="flex items-center">
          <img src={logo} alt="logo" className="h-10 w-10 object-contain" />
          <div className="flex flex-col items-center">
            <h1 className="uppercase font-serif text-2xl">{title}</h1>
            <p className="text-sm">{desc}</p>
          </div>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-4 items-center">
          <div className={`h-20 w-[0.01rem]${menubg} ${textColor}`}></div>
          <div onClick={toggleMenuOpen} className="cursor-pointer flex flex-col items-center gap-2">
            {isMenuOpen ? (
              <TiTabsOutline size={35} onClick={closeMenu} />
            ) : (
              <TbMenu size={30} />
            )}
            <h1 className="font-bold">Menu</h1>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={menuVariants}
                className="absolute w-full right-0 top-10 shadow-lg rounded-lg flex justify-center p-5 text-black"
              >
                <div className="bg-slate-100 w-[90%] rounded-md">
                  <div className="flex justify-between items-center">
                    <div className="text-xl md:text-4xl font-bold text-black flex items-center gap-2">
                      <img src={logo} alt="logo" className="h-10 w-10 object-contain" />
                      <div className="flex flex-col items-center">
                        <Link to="/">
                        <h1 className="uppercase font-serif text-2xl">Buffalo & BAY</h1>
                        <p className="text-sm">STRENGTH AND SPLENDOR</p>
                        </Link>
                      </div>
                    </div>
                    <IoMdClose size={35} onClick={closeMenu} />
                  </div>
                  <div className="mt-2 p-2 flex">
                    <HeaderMenu />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <TiTabsOutline size={28} /> : <TiThMenu size={28} />}
        </button>
      </div>
      <hr />
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
              <TiTabsOutline size={28} onClick={toggleMenu} className="cursor-pointer" />
            </div>
            <div className="flex flex-col items-center p-4 space-y-4">
              <Link to="/" className="py-2 text-lg" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/about" className="py-2 text-lg" onClick={toggleMenu}>
                About
              </Link>
              <Link to="/mission" className="py-2 text-lg" onClick={toggleMenu}>
                Mission
              </Link>
              <Link to="/achievement" className="py-2 text-lg" onClick={toggleMenu}>
                Achievement
              </Link>
              <Link to="/contact" className="py-2 text-lg" onClick={toggleMenu}>
                Contact
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
