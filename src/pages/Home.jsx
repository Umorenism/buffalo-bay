

import React, { useRef } from 'react';
import About from './About';
import Service from './Service';
import WhoWeAre from './WhoWeAre';
import Choose from './Choose';
import Progress from './Progress';
import heroPic from '../../src/assets/heroImg.png'

const HomePage = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const whoRef = useRef(null);
  const chooseRef = useRef();
  const progressRef = useRef()

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen  flex flex-col w-full">
      <div
        ref={homeRef}
        className=" bg-cover h-screen bg-center relative"
        style={{
          backgroundImage:
            `url(${heroPic})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
            Buffalo <span className="text-[#ECB35C]">&</span> Bay Ltd
          </h1>
          <p className="text-lg mb-6">Building the future, one project at a time</p>
          <div className="absolute bottom-10 flex flex-col items-center">
            <button
              onClick={() => handleScroll(aboutRef)} // Scrolls to About section
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Scroll Down
            </button>
            <p onClick={() => handleScroll(aboutRef)} className="h-10 w-5 rounded-lg border"></p>
          </div>
        </div>
      </div>

      <div  ref={aboutRef} >
        <About />
      </div>

      <div ref={servicesRef} >
        <Service />
      </div>

      <div ref={whoRef} >
        <WhoWeAre />
      </div>
      
      <div ref={chooseRef} >
        <Choose/>
      </div> 
      <div ref={progressRef} >
        <Progress/>
      </div> 
      {/* <div ref={progressRef} >
        <Contact/>
      </div>  */}
    </div>
  );
};

export default HomePage;
