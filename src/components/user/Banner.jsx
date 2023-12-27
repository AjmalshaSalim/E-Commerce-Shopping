import React,{useEffect} from 'react';
import bannerImg from '../../assets/alexa.png';
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='relative w-full font-josefin-sans'>
      <img src={bannerImg} alt="Banner" className="w-full" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center" style={{textShadow:'5px 5px 10px white'}}>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 text-left"  data-aos="fade-right" data-aos-duration="2000">
          New Portable Bluetooth Speaker
        </h1>
        <p className="hidden md:block text-sm md:text-base text-left"  data-aos="fade-right" data-aos-duration="2000">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, voluptas?
        </p>
      </div>
    </div>
  );
};

export default Banner;
