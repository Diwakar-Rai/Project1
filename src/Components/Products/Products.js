import React from "react";
import "./productStyle.css";
import product1 from "../../images/product1.jpg";
import product2 from "../../images/product2.jpg";
import product3 from "../../images/product3.jpg";
import product4 from "../../images/product4.jpg";
import product5 from "../../images/product5.jpg";

const Products = () => {
  const photos = [
    { image: product1, name: "vegetables", width: 50 },
    { image: product2, name: "wheat", width: 20 },
    { image: product3, name: "fruit", width: 20 },
    { image: product4, name: "sunflower", width: 57 },
    { image: product5, name: "sheep", width: 35 },
  ];
  return (
    <div className="products">
    <div className="productsHeader">
      <h1 className="productsTitle">Our Products</h1>
    </div>
      <div className="product-row">
        {photos &&
          photos.length > 0 &&
          photos.map((photo) => (
            <div className="product" key={photo.image}>
              <img
                className="productImage"
                src={photo.image}
                alt={photo.name}
                style={{ width: `${photo.width}%` }}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
