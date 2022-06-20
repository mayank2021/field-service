import React from "react";
import Heading from "../../Components/Heading/Heading";
import { workData, inventoryData } from "../../Data/CardData";
import Card from "../../Components/Card/Card";

const Home = () => {
  return (
    <>
      <Heading title="My Work" />
      <div className="card-main--container">
        {workData.map((ele, ind) => {
          return (
            <Card
              key={ind}
              Icon={ele.icon}
              title={ele.title}
              color={ele.color}
              bgColor={ele.bgColor}
            />
          );
        })}
      </div>
      <Heading title="Inventory" />
      <div className="card-main--container">
        {inventoryData.map((ele, ind) => {
          return (
            <Card
              key={ind}
              Icon={ele.icon}
              title={ele.title}
              color={ele.color}
              bgColor={ele.bgColor}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
