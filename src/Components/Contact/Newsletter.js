import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter">
    <h2 className="contactHeader">Newsletter</h2>
      <input className="formInput" type="text" placeholder="Enter Your Email" />
      <br />
      <button className="newsletterButton">Subscribe</button>
    </div>
  );
};

export default Newsletter;
