import React from "react";
import { FaUserTie } from "react-icons/fa6";
import { motion } from "framer-motion";

const About = () => {

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants} 
      className="w-full p-8  rounded-t-[100px] flex items-center justify-center min-h-[800px] flex-col overflow-hidden"
    >
      <div className="max-w-[1300px]  rounded-t-2xl w-full gap-10">
        <h2 className="text-4xl font-bold text-center mb-6">About Us</h2>
        
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10">
          {/* Left Side: Who We Are */}
          <motion.div variants={itemVariants} className="bg-white p-6 w-full md:w-1/2">
            <div className="h-20 w-20 text-center mb-10 border border-[#6D142a] rounded-full text-[#6D142a] flex items-center justify-center">
              <FaUserTie size={30} />
            </div>
            <h3 className="text-2xl text-[#6D142a] font-semibold">Who We Are</h3>
            <p className="h-1 w-5 bg-orange-400"></p>
            <p className="mt-4 text-md font-semibold">
              At Buffalo & Bay Nig Ltd, we believe every project is an opportunity to shape the future. Based in the dynamic city of Abuja, Nigeria, we are a premier construction and real estate company with a reputation for excellence.
            </p>
            <p className="mt-4 text-md font-semibold">
              Since our founding in 2018, we’ve been redefining the built industry and crafting spaces that inspire. Whether it’s a commercial complex, a serene residential community, or long-lasting infrastructure, we bring expertise, innovation, and passion to every project.
            </p>
          </motion.div>
          
          {/* Right Side: Stats */}
          <motion.div variants={itemVariants} className="bg-white p-6 w-full md:w-1/2">
            {/* Stats Row 1 */}
            <div className="flex items-center gap-10 mb-10">
              <div className="flex flex-col items-center">
                <h3 className="text-4xl font-bold mb-2 text-[#6D142a]">26</h3>
                <p className="text-center">Years in the <br /> Industry</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-4xl font-bold mb-2 text-[#6D142a]">400+</h3>
                <p className="text-center">Satisfied <br /> Customers</p>
              </div>
            </div>
            
            {/* Stats Row 2 */}
            <div className="flex items-center gap-10 mb-10">
              <div className="flex flex-col items-center">
                <h3 className="text-4xl font-bold mb-2 text-[#6D142a]">23</h3>
                <p className="text-center">Completed <br /> Projects</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-4xl font-bold mb-2 text-[#6D142a]">61k++</h3>
                <p className="text-center">Built Area</p>
              </div>
            </div>
            
            {/* Stats Row 3 */}
            <div className="flex items-center gap-10">
              <div className="flex flex-col items-center">
                <h3 className="text-4xl font-bold mb-2 text-[#6D142a]">3</h3>
                <p className="text-center">Upcoming <br /> Construction</p>
              </div>
              <div></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <h1 className="text-[#6D142a] text-5xl font-bold text-center mt-10">We’re committed to Excellence!</h1>
    </motion.div>
  );
};

export default About;





