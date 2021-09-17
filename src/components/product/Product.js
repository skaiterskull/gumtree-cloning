import React from "react";
import "./product.css";
import product1 from "../../assests/images/product1.png";

export const Product = () => {
  return (
    <>
      <a href="">
        <div className="product-container">
          <div className="price">$1,850</div>
          <div className="wrapper">
            <div className="image-container">
              <img src={product1} width="230px" height="175px" alt="" />
            </div>
            <div className="product-description">Power Mobility Chair</div>
            <div className="location-and-fav">
              <span>Launceston</span>
              <span>♥</span>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};
