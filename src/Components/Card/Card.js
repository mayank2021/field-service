import React, { useContext } from "react";
import "./Card.css";
import { userContext } from "../../Context/userContext";

const Card = ({ Icon, title, color, bgColor }) => {
  const { setSelectedPage } = useContext(userContext);
  return (
    <div
      onClick={() => setSelectedPage(title)}
      className="card-container"
      style={{ borderTopColor: color }}
    >
      <div className="icon-container" style={{ backgroundColor: bgColor }}>
        <Icon fontSize="sm" style={{ color: color }} />
      </div>

      <p className="card-container-heading">{title}</p>
    </div>
  );
};

export default Card;
