import React, { useEffect } from "react";
import CardDetailed from "./CardDetailed";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const RelatedProducts = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className=" font-josefin-sans py-10 w-full px-10 text-center">
      <h1 className="text-3xl font-bold pb-2">Similar Products</h1>
      <p className="text-md text-gray-600 pb-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        obcaecati.
      </p>
      <div data-aos="fade-right" data-aos-duration="2000">
        <CardDetailed />
      </div>
      <div className=" pt-14 pb-5">
        <button className=" bg-black text-white text-xs py-3 px-6 hover:shadow">
          <Link to="/shop">VIEW MORE</Link>
        </button>
      </div>
    </div>
  );
};

export default RelatedProducts;
