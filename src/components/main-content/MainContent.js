import React from "react";
import "./mainContent.css";
import { Product } from "../product/Product";
import { Container } from "react-bootstrap";

export const MainContent = () => {
  return (
    <div className="main-content-container">
      <div className="main-content">
        <Product></Product>
      </div>
    </div>
  );
};
