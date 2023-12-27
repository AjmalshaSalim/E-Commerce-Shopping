import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-blacked py-16 text-sm">
      <div className="container mx-auto flex flex-col md:flex-row font-josefin-sans">
        {/* Left Side */}
        <div className="w-full ml-5 md:w-1/2 mb-4 md:mb-0">
          <div className="flex flex-col md:flex-row justify-between">
            {/* First Row */}
            <div className="mb-4 md:mb-0 text-left">
              <p className=" text-gray-800 pb-2">About Us</p>
              <p className=" text-gray-800 pb-2">Contact Us</p>
              <p className=" text-gray-800 pb-2">Store Locations</p>
              <p className=" text-gray-800 pb-2">Address</p>
            </div>
            {/* Second Row */}
            <div className="mb-4 md:mb-0 text-left">
              <p className=" text-gray-800 pb-2">FAQ</p>
              <p className=" text-gray-800 pb-2">Shipping & Return</p>
              <p className=" text-gray-800 pb-2">Order Tracking</p>
              <p className=" text-gray-800 pb-2">Privacy Policy</p>
            </div>
            {/* Third Row */}
            <div className=" text-left">
              <p className=" text-gray-800 pb-2">Living Room</p>
              <p className=" text-gray-800 pb-2">Bathroom</p>
              <p className=" text-gray-800 pb-2">Kitchen Appliances</p>
              <p className=" text-gray-800 pb-2">Lighting</p>
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
              <h1 className=" text-6xl font-bold pr-5">LOGO</h1>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
