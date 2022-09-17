import React from "react";
import { Link } from "react-router-dom";
// import './ContactStyle.css'

const Menus = () => {
  return (
    <div className="menus">
      <h2 className="contactHeader">Menus</h2>
      <ul>
        <li className="listItem">
          <Link className="link" to="/">Home</Link>
        </li>
        <li className="listItem">
          <Link className="link" to="/">About</Link>
        </li>
        <li className="listItem">
          <Link className="link" to="/">Products</Link>
        </li>
        <li className="listItem">
          <Link className="link" to="/">Blog</Link>
        </li>
        <li className="listItem">
          <Link className="link" to="/">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menus;
