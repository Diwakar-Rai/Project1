import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Menus from "./Menus";
import Newsletter from "./Newsletter";
import UsefulLinks from "./UsefulLinks";
import "./ContactStyle.css";
const ContactSection = () => {
  return (
    <div className="contactSection">
      <ContactForm />
      <div className="contactBottom">
        <ContactInfo />
        <UsefulLinks />
        <Menus />
        <Newsletter />
      </div>
    </div>
  );
};

export default ContactSection;
