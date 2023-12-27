import React from 'react'
import BannerShop from '../components/user/BannerShop'
import Navbar from '../components/user/Navbar'
import Footer from '../components/user/Footer'
import BottomFooter from '../components/user/BottomFooter'
import CardDetailed from '../components/user/CardDetailed'

const Shop = () => {
  return (
    <div className=' w-full text-center'>
    <Navbar/>
    {/* <BannerShop/> */}
    {/* <div className="flex justify-between p-6 w-full">
        <Cards/>
    </div> */}
    <div className=' pb-10 px-10'>
    <CardDetailed/>
    </div>
    {/* <BottomBanner/> */}
    <Footer/>
    <BottomFooter/>
</div>
  )
}

export default Shop