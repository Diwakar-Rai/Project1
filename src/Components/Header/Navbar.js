import React from "react";
import Headbutton from "./Headbutton";
import Logo from "./Logo";
import { Navitems } from "./Navitems";
import './HeaderCSS/NavbarStyle.css'

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <Logo />
        <Navitems />
        <Headbutton />
      </div>
    </>
  );
};

export default Navbar;
