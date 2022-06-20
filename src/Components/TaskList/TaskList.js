import React, { useContext } from "react";
import { userContext } from "../../Context/userContext";
import "./TaskList.css";

const TaskList = ({ time1, time2, title, id }) => {
  const { activeTaskList } = useContext(userContext);
  // console.log("hilo", activeTaskList, title);
  return (
    <div
      className={`talk-list--main-container ${
        activeTaskList === title ? "active-task--list" : null
      }`}
    >
      <div className="talk-list-container-one">
        <p>{time1}</p>
        <p>{time2}</p>
      </div>
      <div className="talk-list-container-two"></div>
      <div className="talk-list-container-three">
        <p className="talk-list--title">{title}</p>
        <p className="talk-list--id">{id}</p>
      </div>
    </div>
  );
};

export default TaskList;
