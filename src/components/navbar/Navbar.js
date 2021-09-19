import React from "react";
import { MenuDropdown } from "../menu/menuDropdown/MenuDropdown";
import "./navbar.css";

export const Navbar = () => {
  const leftMenu = [
    "🏠 |",
    "Cars & Vehicles",
    "Home & Garden",
    "Jobs",
    "Real Estate",
    "Service For Hire",
    "More...",
    "Car",
  ];

  const rightMenu = ["Sign In", "Register", "My Gumtree", "❔"];
  const rightMenu1 = ["My Gumtree", "❓"];
  const mobileMenu = [
    "🏠 |",
    "Cars & Vehicles",
    "Home & Garden",
    "Jobs",
    "Real Estate",
    "Service For Hire",
    "Electronic & Computers",
  ];

  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="menu-left">
          <ul className="list-menu-left">
            {leftMenu.map((value) => {
              return <li>{value}</li>;
            })}
          </ul>
        </div>
        <div className="menu-right">
          <ul className="list-menu-right">
            {rightMenu.map((value) => {
              return <li>{value}</li>;
            })}
          </ul>
        </div>
        <div className="menu-right1">
          <ul className="list-menu-right1">
            {rightMenu1.map((value) => {
              return <li>{value}</li>;
            })}
          </ul>
        </div>
        <div className="menu-more">
          <MenuDropdown menu="More" />
          <ul className="list-menu-more">
            {rightMenu1.map((value) => {
              return <li>{value}</li>;
            })}
          </ul>
        </div>
        <div className="mobile-menu">
          <ul className="list-mobile-menu">
            {mobileMenu.map((value) => {
              return <li>{value}</li>;
            })}
          </ul>
          <div className="off-canvas">All</div>
        </div>
      </div>
    </div>
  );
};
