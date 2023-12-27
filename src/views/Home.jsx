import React from 'react'
import Navbar from '../components/user/Navbar'
import Banner from '../components/user/Banner'
import Cards from '../components/user/Cards'
import Popular from '../components/user/Popular'
import Footer from '../components/user/Footer'
import BottomFooter from '../components/user/BottomFooter'
import BottomBanner from '../components/user/BottomBanner'

const Home = () => {
  return (
    

    <div className=' w-full text-center'>
        <Navbar/>
        <Banner/>
        <div className="flex justify-between p-6 w-full">
            <Cards/>
        </div>
        <Popular/>
        <BottomBanner/>
        <Footer/>
        <BottomFooter/>
    </div>
  )
}

export default Home