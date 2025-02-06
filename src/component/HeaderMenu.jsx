import React from 'react';
import pic from '../../src/assets/menupic.png'
import pic2 from '../../src/assets/Frame 177.png'
import { Link } from 'react-router-dom';


const HeaderMenu = () => {
  return (
    <div className='min-h-[50px] flex'>
      {/* Left Section */}
      <div className="w-1/3 bg-gray-100 p-4 mt-10">
       <Link to="/about-us">
       <h1 className="text-2xl font-bold mb-4">About Buffalo & <br />Bay</h1>
       </Link>
        <div className='h-[0.1rem] mb-1 w-[50%] bg-orange-500'></div>
        <Link to="/pro-ject">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        </Link>
        <div className='h-[0.1rem] mb-1  w-[50%] bg-orange-500'></div>
        <Link to="/service">
        <h2 className="text-2xl font-bold mb-4">Services</h2>
        </Link>
        <div className='h-[0.1rem] mb-1  w-[50%] bg-orange-500'></div>
        <Link to="/projectdes">
        <h2 className="text-2xl font-bold mb-4">Packages</h2>
        </Link>
        <div className='h-[0.1rem] mb-1  w-[50%] bg-orange-500'></div>
        <Link to="/contact-us">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        </Link>
        <div className='mt-20'>
            <img src={pic2} alt="" className='bg-center' />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-2/3 " >
       <img src={pic} alt="" className='bg-cover bg-center' />
       <div className='flex justify-between items-center w-full mt-2'>
        <div>
            <h1>Address</h1>
            <p>Machima Spaces, Off Mambolo street, </p>
            <h2>Wuse, Abuja, Nigeria</h2>
        </div>
        <div>
            <h1>Telephone</h1>
            <p>08107825959, 09052766460 </p>
            
        </div>
        <div>
            <h1>Email:</h1>
            <p>buffalonigeria2233@gmail.com </p>
           
        </div>
       </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
