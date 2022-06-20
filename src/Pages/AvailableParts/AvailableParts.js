import React from "react";
import "./AvailableParts.css";
import AvailablePartsList from "../../Components/AvailablePartsList/AvailablePartsList";
import { availablePartsData } from "../../Data/AvailablePartsData";

const AvailableParts = () => {
  return (
    <div className="available-part-main--container">
      {availablePartsData.map((ele, ind) => (
        <AvailablePartsList
          key={ind}
          modelName={ele.modelName}
          quantity={ele.quantity}
          state={ele.state}
          subState={ele.subState}
        />
      ))}
    </div>
  );
};

export default AvailableParts;
