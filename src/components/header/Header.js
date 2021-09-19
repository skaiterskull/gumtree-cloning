import React from "react";
import "./header.css";
import bg from "../../assests/images/header-image.webp";

export const Header = () => {
  return (
    <div className="header-container">
      <img className="header-image" src={bg} />
      <div className="header-menu">
        <a href="">
          <span className="header-menu-left">🌳 Gumtree</span>
        </a>
        <button className="header-menu-right">Add an ad</button>
      </div>
      <div className="middle-text">
        <div className="middle-text-left">Trade Together, Save Together</div>
        <span className="middle-text-right">Proud Partner of PLANET ARK</span>
      </div>
    </div>
  );
};
