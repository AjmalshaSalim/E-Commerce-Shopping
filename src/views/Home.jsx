import React from 'react'
import Navbar from '../components/user/Navbar'
import Banner from '../components/user/Banner'
import Cards from '../components/user/Cards'
import Popular from '../components/user/Popular'
import Footer from '../components/user/Footer'

const Home = () => {
  return (
    

    <div className=' w-full text-center'>
        <Navbar/>
        <Banner/>
        <div className="flex justify-between p-6 w-full">
            <Cards/>
        </div>
        <Popular/>
        <Footer/>
    </div>
  )
}

export default Home