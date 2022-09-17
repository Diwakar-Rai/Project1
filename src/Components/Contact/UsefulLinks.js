import React from "react";
import { Link } from "react-router-dom";
// import './ContactStyle.css'

const UsefulLinks = () => {
  return (
    <div className="usefulLinks">
      <h2 className="contactHeader">Useful Links</h2>
      <ul>
        <li className="listItem">
          <Link className="link" to="/">AchieversIT Training</Link>
        </li>
        <li className="listItem">
          <Link className="link" to="/">Murali's Blog</Link>
        </li>
        <li className="listItem">
          <Link className="link" to="/">W3Schools</Link>
        </li>
        <li className="listItem">
          <Link className="link" to="/">Stack Overflow</Link>
        </li>
        <li className="listItem">
          <Link className="link" to="/">Medium</Link>
        </li>
      </ul>
    </div>
  );
};

export default UsefulLinks;
