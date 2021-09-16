import React from "react";
import "./product.css";
import product1 from "../../assests/images/product1.png";

export const Product = () => {
  return (
    <a href="">
      <div className="product-container">
        <div className="image-container">
          <img src={product1} width="50%" alt="" />
        </div>
        <div className="description">
          <div className="product-description">
            Camera Canon FullHD with extra Lens
          </div>
        </div>
      </div>
    </a>
  );
};
