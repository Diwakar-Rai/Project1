import React from "react";
import grapes from "../../images/food.jpg";
import "./chooseUsStyle.css";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import icon4 from "../../images/icon4.png";

const ChooseUs = () => {
  return (
    <div className="chooseUs">
      <div className="chooseUsTop">
        <h1 className="chooseUsHeader">Why Choose Us?</h1>
        <p className="chooseUspara">
          There is nothing embarrassing hidden in the middle of the text. All
          the Lorem Ipsum generated on the Internet tend to repeat itself
        </p>
      </div>

      <section className="chooseUsMiddle">
        <div className="chooseUsMiddleLeft">
          <div className="outerBox">
            <div className="layer">
              <div className="layerBox">
                <div className="icon">
                  <img className="iconPng" src={icon1} alt="icon" />
                </div>
                <div className="info">
                  <h2>Excellent Service</h2>
                  <p>
                    It is a long established fact that a reader will get
                    distracted by the readable content.
                  </p>
                </div>
              </div>
              <div className="layerBox">
                <div className="icon">
                  <img className="iconPng" src={icon2} alt="icon" />
                </div>
                <div className="info">
                  <h2>Excellent Service</h2>
                  <p>
                    It is a long established fact that a reader will get
                    distracted by the readable content.
                  </p>
                </div>
              </div>
            </div>
            <div className="layer">
              <div className="layerBox">
                <div className="icon">
                  <img className="iconPng" src={icon3} alt="icon" />
                </div>
                <div className="info">
                  <h2>Excellent Service</h2>
                  <p>
                    It is a long established fact that a reader will get
                    distracted by the readable content.
                  </p>
                </div>
              </div>
              <div className="layerBox">
                <div className="icon">
                  <img className="iconPng" src={icon4} alt="icon" />
                </div>
                <div className="info">
                  <h2>Excellent Service</h2>
                  <p>
                    It is a long established fact that a reader will get
                    distracted by the readable content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className="chooseUsImage" src={grapes} alt="" />
        </div>
      </section>
      <div>
        <button className="contactUsButton">Buy More</button>
      </div>
    </div>
  );
};

export default ChooseUs;
