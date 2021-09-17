import React from "react";
import "./mainContent.css";
import { Product } from "../product/Product";

export const MainContent = () => {
  return (
    <div className="main-content-container">
      <div className="main-content">
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </div>
    </div>
  );
};
