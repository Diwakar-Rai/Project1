import React from 'react'
import './HeaderCSS/NavbarStyle.css'
import { Link } from 'react-router-dom'
export const Navitems = () => {
  return (
    <div>
        <ul className='listItems'>
            <li><Link className="link" to="/">HOME</Link></li>
            <li><Link className="link" to="/about">ABOUT</Link></li>
            <li><Link className="link" to="/product">PRODUCT</Link></li>
            <li><Link className="link" to="/blog">BLOG</Link></li>
            <li><Link className="link" to="/contact">CONTACT</Link></li>
        </ul>
    </div>
  )
}
