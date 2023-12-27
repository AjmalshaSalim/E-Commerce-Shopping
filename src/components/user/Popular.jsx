import React, {useEffect} from 'react';
import CardDetailed from './CardDetailed';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Popular = () => {
  useEffect (() => {
    AOS.init ();
    AOS.refresh ();
  }, []);
  return (
    <div
      className=" font-josefin-sans py-10 w-full px-10"
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <h1 className="text-3xl font-bold pb-2">Popular Products</h1>
      <p className="text-md text-gray-600 pb-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, obcaecati.
      </p>
      <CardDetailed />
    </div>
  );
};

export default Popular;
