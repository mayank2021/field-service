import React, { useContext } from "react";
import { userContext } from "../../Context/userContext";
import "./Modal.css";
import AvailablePartsList from "../AvailablePartsList/AvailablePartsList";

const Modal = ({ requiredParts }) => {
  const { setShowRequiredParts } = useContext(userContext);
  return (
    <div className="modal-main--container">
      <h1 className="modal-heading">Parts Required</h1>
      <button
        className="cancel-modal--button"
        onClick={() => setShowRequiredParts(false)}
      >
        X
      </button>
      <div className="part-modal--container">
        {requiredParts.length ? (
          requiredParts.map((ele, ind) => (
            <AvailablePartsList
              key={ind}
              modelName={ele.modelName}
              quantity={ele.quantity}
              state={ele.state}
              subState={ele.subState}
            />
          ))
        ) : (
          <div>No parts required</div>
        )}
      </div>
    </div>
  );
};

export default Modal;
