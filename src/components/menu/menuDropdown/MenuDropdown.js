import React from "react";
import "./menuDropdown.css";
import { Row, Col } from "react-bootstrap";

export const MenuDropdown = ({ menu }) => {
  const submenu = [
    "Automotic Service",
    "Motorcyles & Scooters",
    "Caravans & Campervans",
    "Parts & Accessories",
    "Car, Vans, & Utes",
    "Trailers",
    "Construction Vehicles & Equipment",
    "Trucks",
    "Farming Vehicles & Equipment",
    "Value My Car",
    "Mechanics & Garages",
  ];
  return (
    <div className="dropdown">
      <button className="dropbtn">{menu}</button>
      <div className="dropdown-content">
        <Row>
          {submenu.map((value, index) => {
            return (
              <Col md="6">
                <a href="#">{value}</a>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};
