import React from 'react'
import ImageThumbnails from './ImageThumbnails'
import MainBanner from './MainBanner'
import BannerText from './BannerText'

export const Banner = () => {
  return (
    <div className="bannerBox">
        <MainBanner />
        <BannerText />
        <ImageThumbnails/>
    </div>
  )
}
