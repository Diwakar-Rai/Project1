import React from "react";
import "./HeaderCSS/NavbarStyle.css";
import { FaSearch } from "react-icons/fa";
const Headbutton = () => {
  return (
    <div className="rightHead">
      <div className="searchIcon">
        <FaSearch />
      </div>
      <div>
        <button className="headButton">GET A QUOTE</button>
      </div>
    </div>
  );
};

export default Headbutton;
