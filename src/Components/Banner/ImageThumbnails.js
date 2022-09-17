import React from 'react'
import thumbnail1 from '../../images/img1.jpg'
import thumbnail2 from '../../images/img2.jpg'
import thumbnail3 from '../../images/img3.jpg'
import './BannerStyle.css'

const ImageThumbnails = () => {
  return (
    <div className="imageContainer">
        <img className="thumbnail" src={thumbnail1} alt="" />
        <img className="thumbnail" src={thumbnail2} alt="" />
        <img className="thumbnail" src={thumbnail3} alt="" />
    </div>
  )
}

export default ImageThumbnails