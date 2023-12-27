import React from 'react';
import {FaTwitter, FaFacebook, FaWhatsapp, FaInstagram} from 'react-icons/fa';
import VisaLogo from '../../assets/visa.svg';
import PaypalLogo from '../../assets/paypal.svg';

const BottomFooter = () => {
  return (
    <footer className="bg-white text-black pt-3 font-josefin-sans">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center mb-5 md:mb-2">
          <div className="flex space-x-4">
            <a href="/" className="text-xl">
              <FaTwitter />
            </a>
            <a href="/" className="text-xl">
              <FaFacebook />
            </a>
            <a href="/" className="text-xl">
              <FaWhatsapp />
            </a>
            <a href="/" className="text-xl">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Center */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            &copy; 2023 A2Z Alphabetsolutionz. All rights reserved.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-end gap-3">
          <img
            src={VisaLogo}
            alt="Payment Gateway Logo"
            className="w-16 h-auto"
          />
          <img
            src={PaypalLogo}
            alt="Payment Gateway Logo"
            className="w-16 h-auto"
          />
        </div>
      </div>
    </footer>
  );
};

export default BottomFooter;
