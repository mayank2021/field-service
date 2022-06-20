import React, { useContext } from "react";
import { userContext } from "../../Context/userContext";
import "./TaskListV2.css";
const TaskListV2 = ({
  id,
  title,
  date,
  address,
  status,
  ind,
  requiredParts,
}) => {
  const {
    taskDatav2,
    setTaskDatav2,
    setRequiredParts,
    setShowRequiredParts,
    acceptedTaskStatus,
    setAcceptedTaskStatus,
  } = useContext(userContext);

  const showParts = () => {
    setShowRequiredParts(true);
    setRequiredParts(requiredParts);
  };

  const handleStatus = (ind, status) => {
    setTaskDatav2((prev) => [...prev, (taskDatav2[ind].status = status)]);
  };

  return (
    <div className="task-listv2--main">
      {status === "accepted" ? (
        <button
          className="task-listv2-btn required-part--button"
          onClick={() => showParts()}
        >
          Required parts
        </button>
      ) : null}
      <div className="task-listv2-assigned">
        <p className="task-listv2-id">
          {id}
          <span className="task-number">{ind + 1}</span>
        </p>
        {status === "accepted" ? (
          <select
            className={`status-select--input ${
              acceptedTaskStatus === "In Progress"
                ? "Progress"
                : acceptedTaskStatus
            }`}
            name="task"
            id="task"
            onChange={(eve) => setAcceptedTaskStatus(eve.target.value)}
          >
            <option
              className="default-select"
              value="none"
              selected
              disabled
              hidden
            >
              {acceptedTaskStatus}
            </option>
            <option value="Accepted">Accepted</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        ) : (
          <span className={`task-listv2-status status--${status}`}>
            {status}
          </span>
        )}
      </div>
      <p className="task-listv2-title">{title}</p>
      <p className="task-listv2-date">{date}</p>
      <p className="task-listv2-address">{address}</p>
      {status === "accepted" || status === "rejected" ? null : (
        <div className="task-listv2-btn--container">
          <button
            className="task-listv2-btn"
            onClick={() => handleStatus(ind, "accepted")}
          >
            Accept
          </button>
          <button
            className="task-listv2-btn"
            onClick={() => handleStatus(ind, "rejected")}
          >
            Reject
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskListV2;
