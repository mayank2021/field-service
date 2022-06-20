import React, { useContext } from "react";
import "./MyTasks.css";
import TaskListV2 from "../../Components/TaskListV2/TaskListV2";
import { userContext } from "../../Context/userContext";
import Modal from "../../Components/Modal/Modal";

const MyTasks = () => {
  const { showRequiredParts, requiredParts, taskDatav2 } =
    useContext(userContext);
  return (
    <div className="available-part-main--container">
      {showRequiredParts ? <Modal requiredParts={requiredParts} /> : null}
      {!showRequiredParts &&
        taskDatav2.map((ele, ind) => {
          if (ele.id) {
            return (
              <TaskListV2
                key={ele.id}
                ind={ind}
                id={ele.id}
                status={ele.status}
                title={ele.title}
                date={ele.date}
                address={ele.address}
                requiredParts={ele.requiredParts}
              />
            );
          }
        })}
    </div>
  );
};

export default MyTasks;
