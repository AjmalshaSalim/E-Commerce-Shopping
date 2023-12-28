import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
// import BannerShop from '../components/user/BannerShop'
import FunctionalNav from '../components/user/FunctionalNav'
import Navbar from '../components/user/Navbar'
import Footer from '../components/user/Footer'
import BottomFooter from '../components/user/BottomFooter'
import CardDetailed from '../components/user/CardDetailed'
import RelatedProducts from '../components/user/RelatedProducts'

const Shop = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className=' w-full text-center'>
    <Navbar/>
    <FunctionalNav/>
    {/* <BannerShop/> */}
    {/* <div className="flex justify-between p-6 w-full">
        <Cards/>
    </div> */}
    <div className=' pb-10 px-10' data-aos="fade-right" data-aos-duration="2000">
    <CardDetailed/>
    </div>
    <RelatedProducts/>
    <Footer/>
    <BottomFooter/>
</div>
  )
}

export default Shop