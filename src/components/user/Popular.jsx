import React, { useEffect } from "react";
import CardDetailed from "./CardDetailed";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Popular = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className=" font-josefin-sans py-10 w-full px-10">
      <h1 className="text-3xl font-bold pb-2">Popular Products</h1>
      <p className="text-md text-gray-600 pb-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        obcaecati.
      </p>
      <div data-aos="fade-right" data-aos-duration="2000">
        <CardDetailed />
      </div>
      <div className=" pt-14 pb-5">
        <h1 className=" text-3xl font-bold pb-2">
          Explore Our <br /> New Products and Offers
        </h1>
        <p className=" pb-4 text-gray-700 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          reprehenderit!
        </p>
        <Link to="/shop">
          <button className=" bg-black text-white text-xs py-3 px-6 hover:shadow">
            VIEW ALL PRODUCTS
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Popular;
