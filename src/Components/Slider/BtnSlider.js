import React from 'react'
import {AiOutlineLeft} from 'react-icons/ai'
import {AiOutlineRight} from 'react-icons/ai'
const BtnSlider = ({direction, moveSlide}) => {
    console.log(direction, moveSlide);
  return (
    <div>
        <button onClick={moveSlide}
        className={direction === "next"?"btn-slide next": "btn-slide prev"}>
        {direction === "next"? <AiOutlineRight/>:<AiOutlineLeft/>}
        </button>
    </div>
  )
}

export default BtnSlider