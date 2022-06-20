import React, { useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { userContext } from "../../Context/userContext";

const ReactCalender = () => {
  const { calendarValue, onCalenderChange } = useContext(userContext);
  return (
    <div>
      <Calendar onChange={onCalenderChange} value={calendarValue} />
    </div>
  );
};

export default ReactCalender;
