import React, {useEffect} from 'react';
import bannerImg1 from '../../assets/BottomBannerRight.svg';
import bannerImg2 from '../../assets/BottomBannerLeft.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BottomBanner = () => {
  useEffect (() => {
    AOS.init ();
    AOS.refresh ();
  }, []);
  return (
    <div
      className="w-full flex flex-col md:flex-row font-josefin-sans"
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      {/* Left Banner */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center">
        <img src={bannerImg1} alt="Left Banner" className="w-full" />
        <div className="absolute text-black text-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2">
            Best Quality
          </h1>
          <p className="hidden md:block text-sm md:text-base">
            We provide best quality products now available in market.
          </p>
        </div>
      </div>

      {/* Right Banner */}
      <div className="relative w-full md:w-1/2 mt-4 md:mt-0 flex items-center justify-center">
        <img src={bannerImg2} alt="Right Banner" className="w-full" />
        <div className="absolute text-black text-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2">
            Best Customer Service
          </h1>
          <p className="hidden md:block text-sm md:text-base">
            Our services are available within 48 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
