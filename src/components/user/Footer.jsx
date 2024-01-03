import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-blacked py-16 text-sm border-y ">
      <div className="container mx-auto flex flex-col md:flex-row font-josefin-sans">
        {/* Left Side */}
        <div className="w-full ml-5 md:w-1/2 mb-4 md:mb-0">
          <div className="flex flex-col md:flex-row justify-between">
            {/* First Row */}
            <div className="mb-4 md:mb-0 text-left">
              <p className=" text-gray-800 pb-2 hover:text-cyan-700">About Us</p>
              <p className=" text-gray-800 pb-2 hover:text-cyan-700">Contact Us</p>
              <p className=" text-gray-800 pb-2 hover:text-cyan-700">Store Locations</p>
              <p className=" text-gray-800 pb-2 hover:text-cyan-700">Address</p>
            </div>
            {/* Second Row */}
            <div className="mb-4 md:mb-0 text-left">
              <p className=" text-gray-800 pb-2 hover:text-cyan-700">FAQ</p>
              <p className=" text-gray-800 pb-2 hover:text-cyan-700">Shipping & Return</p>
              <p className=" text-gray-800 pb-2 hover:text-cyan-700">Order Tracking</p>
              <p className=" text-gray-800 pb-2 hover:text-cyan-700">Privacy Policy</p>
            </div>
            {/* Third Row */}
            <div className=" text-left">
              <p className=" text-gray-800 pb-2 hover:text-cyan-700">Living Room</p>
              <p className=" text-gray-800 pb-2 hover:text-cyan-700">Bathroom</p>
              <p className=" text-gray-800 pb-2 hover:text-cyan-700">Kitchen Appliances</p>
              <p className=" text-gray-800 pb-2 hover:text-cyan-700">Lighting</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col items-center md:items-end">
            <p className=" pb-5 text-gray-700 pr-5">
              Lorem ipsum dolor sit amet{' '}
            </p>
            <div className="mb-4">
              <h1 className=" text-5xl font-bold pr-5">LOGO</h1>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
