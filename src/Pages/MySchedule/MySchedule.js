import React, { useContext } from "react";
import "./MySchedule.css";
import ReactCalender from "../../Components/Calender/Calender";
import TaskList from "../../Components/TaskList/TaskList";
import { taskData } from "../../Data/taskData";
import { userContext } from "../../Context/userContext";

const MySchedule = () => {
  const { selectedDate } = useContext(userContext);

  return (
    <div>
      <ReactCalender />
      {taskData.map((ele, ind) => {
        return ele.date === selectedDate ? (
          <TaskList
            key={ind}
            time1={ele.time1}
            time2={ele.time2}
            title={ele.title}
            id={ele.id}
          />
        ) : null;
      })}
    </div>
  );
};

export default MySchedule;
