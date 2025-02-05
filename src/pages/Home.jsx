

import React, { useRef } from 'react';
import About from './About';
import Service from './Service';
import WhoWeAre from './WhoWeAre';
import Choose from './Choose';
import Progress from './Progress';


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
        className=" bg-cover h-screen  bg-center relative"
        style={{
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/ea06/e341/6baf67ccf4d0130122ebf648adf58332?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jjfUUkaPCts2mPjiXGisDE5fXG5nsYCI1OE-4BFSreNmxwu88eA-rNGA3pRAX9ZrQqT0N7A6XSWRb~J4fhrlE-LCDdaLcCIy90Cub-Bc5es07GrzyPDmO-Xstm49YCap70dN8BAI-B10jMNzk8X~tYWUZhevpZ2P6Um9slqmv0lCHAG0C6nfRoCniZVcrTeSXogyFukHECxnLAOWQwC5xHnA31IQLIIMCb4Bu~kiJhZOKaqvVabGp93NJteqeb6mZDGsWFgq02T0U3ZxTmbTnV8e2p624uo0X6f2Cn-OklIBE5eiWOJxnKOzTBpba70-jOfwPUHmuKR-M0S2t4TTeQ__')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-4xl font-bold mb-4">
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

      <div ref={aboutRef} >
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
