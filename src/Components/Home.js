import React from "react";
import { Banner } from "./Banner/Banner";
import ChooseUs from "./ChooseUs/ChooseUs";
import Description from "./Description/Description";
import Products from "./Products/Products";
import Blog from "./Slider/Blog";

const Home = () => {
  return (
    <div>
      <Banner />
      <Description />
      <ChooseUs />
      <Products />
      <Blog />
    </div>
  );
};

export default Home;
