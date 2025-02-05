import React, { useState, useEffect } from 'react';
import pic1 from '../../src/assets/property-1.png';
import pic2 from '../../src/assets/property-4.png';
import pic3 from '../../src/assets/property-3.png';
import pic4 from '../../src/assets/property-4.png';


const images = [pic1, pic2, pic3, pic4];

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
   
    <div className="relative w-full h-screen overflow-hidden">
     
      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
          }}
        />
      ))}
    </div>
    </>
  );
};

export default Slider;
