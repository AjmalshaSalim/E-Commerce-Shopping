import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import BannerShop from "../components/user/BannerShop";
import FunctionalNav from "../components/user/FunctionalNav";
import Navbar from "../components/user/Navbar";
import Footer from "../components/user/Footer";
import BottomFooter from "../components/user/BottomFooter";
import CardDetailed from "../components/user/CardDetailed";

const Shop = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" w-full text-center">
      <Navbar />
      <BannerShop />
      <FunctionalNav />
      <div
        className=" pb-10 px-10"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <CardDetailed />
      </div>
      <div className="pb-10 pt-5">
        <button className=" bg-black text-white py-2 px-6 hover:shadow">
          View All Products
        </button>
      </div>
      <Footer />
      <BottomFooter />
    </div>
  );
};

export default Shop;
