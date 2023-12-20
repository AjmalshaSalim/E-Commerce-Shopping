import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Cards from '../components/Cards'

const Home = () => {
  return (
    

    <div className=' w-full bg-slate-300 text-center'>
        <Navbar/>
        <Banner/>
        <div className="flex justify-between p-6 w-full">
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
        </div>
        Home
    </div>
  )
}

export default Home