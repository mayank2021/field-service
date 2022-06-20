import React from "react";
import "./AvailablePartsList.css";

const AvailablePartsList = ({ modelName, quantity, state, subState }) => {
  return (
    <div className="availableparts-list--container">
      <p className="availableparts-list--heading">
        Model:{" "}
        <span className="availableparts-list--highlighted">{modelName}</span>
      </p>
      <p className="availableparts-list--heading">
        Quantity:{" "}
        <span className="availableparts-list--highlighted">{quantity}</span>
      </p>
      <div className="availableparts-list--last-container">
        <p className="availableparts-list--heading">
          State:{" "}
          <span className="availableparts-list--highlighted">{state}</span>
        </p>
        <div className="availableparts-list--mid-list"></div>
        <p className="availableparts-list--heading">
          Substate:{" "}
          <span className="availableparts-list--highlighted">{subState}</span>
        </p>
      </div>
    </div>
  );
};

export default AvailablePartsList;
