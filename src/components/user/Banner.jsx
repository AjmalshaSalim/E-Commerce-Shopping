import React from 'react'
import bannerImg from '../../assets/alexa.png'

const Banner = () => {
  return (
    <div className='w-full'>
      <img src={bannerImg} alt="" className="banner_img w-full" />       
    </div>
  )
}

export default Banner