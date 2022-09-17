import React from 'react'
import banner from '../../images/banner.jpg'
import './BannerStyle.css'

const MainBanner = () => {
  return (
    <div>
        <img className="banner" src={banner} alt="farm-picture" />
    </div>
  )
}

export default MainBanner