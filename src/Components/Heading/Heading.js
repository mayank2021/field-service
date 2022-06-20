import React from "react";
import "./Heading.css";

const Heading = ({ title }) => {
  return (
    <>
      <p className="heading">{title}</p>
    </>
  );
};

export default Heading;
