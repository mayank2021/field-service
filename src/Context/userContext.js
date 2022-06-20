import React, { useState, createContext } from "react";
import { taskData2 } from "../Data/TaskData2";

export const userContext = createContext();

const UserContextProvider = ({ children }) => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [calendarValue, onCalenderChange] = useState(new Date());
  const [taskDatav2, setTaskDatav2] = useState(taskData2);
  const [acceptedTaskStatus, setAcceptedTaskStatus] = useState("Accepted");
  const [showRequiredParts, setShowRequiredParts] = useState(null);
  const [requiredParts, setRequiredParts] = useState([]);
  const [activeTaskList, setActiveTaskList] = useState();

  let selectedDate = `${calendarValue.getDate()}/${
    calendarValue.getMonth() + 1
  }/${calendarValue.getFullYear()}`;

  return (
    <userContext.Provider
      value={{
        selectedDate,
        selectedPage,
        setSelectedPage,
        calendarValue,
        onCalenderChange,
        taskDatav2,
        setTaskDatav2,
        showRequiredParts,
        setShowRequiredParts,
        requiredParts,
        setRequiredParts,
        acceptedTaskStatus,
        setAcceptedTaskStatus,
        activeTaskList,
        setActiveTaskList,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
