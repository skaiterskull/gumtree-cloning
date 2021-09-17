import React from "react";
import "./header.css";
import bg1 from "../../assests/images/header-image.webp";

export const Header = () => {
  return (
    <div className="header">
      <img src={bg1} alt="" width="100%" height="310px" />
    </div>
  );
};
