import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Description from '../Components/Description/Description'
import Home from '../Components/Home'
import Products from '../Components/Products/Products'
import Blog from '../Components/Slider/Blog'
const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<Description />}/>
            <Route path='/product' element={<Products />}/>
            <Route path='/blog' element={<Blog />}/>
            
        </Routes>
    </div>
  )
}

export default Routing