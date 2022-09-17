import React from "react";

const ContactForm = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <div className="inputFields">
          <input className="formInput" type="text" placeholder="First Name" />
          <input className="formInput" type="text" placeholder="Email" />
          <input className="formInput" type="text" placeholder="Phone Number" />
        </div>
        <div className="message">
          <textarea rows="2" placeholder="Message"></textarea>
          <button className="contactFormButton">Send</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
