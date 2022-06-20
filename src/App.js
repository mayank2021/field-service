import { useContext, useEffect, useState } from "react";
import Nav from "./Components/Nav/Nav";
import Home from "./Pages/Home/Home";
import { userContext } from "./Context/userContext";
import MySchedule from "./Pages/MySchedule/MySchedule";
import MyTasks from "./Pages/MyTasks/MyTasks";
import AvailableParts from "./Pages/AvailableParts/AvailableParts";
import alanBtn from "@alan-ai/alan-sdk-web";
import { taskData } from "./Data/taskData";
import wordsToNumbers from "words-to-numbers";

function App() {
  const {
    selectedPage,
    setSelectedPage,
    selectedDate,
    setShowRequiredParts,
    setRequiredParts,
    setTaskDatav2,
    taskDatav2,
  } = useContext(userContext);
  let todaySchedule = [];

  const [goBack, setGoBack] = useState(false);

  useEffect(() => {
    taskData.map((ele) => {
      if (ele.date === selectedDate) {
        todaySchedule.push(ele);
      }
    });
  }, []);
  useEffect(() => {
    var alanBtnInstance = alanBtn({
      key: "b1cd62542fcb7db93d36490151d1de9b2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, taskNum }) => {
        let taskNumber = wordsToNumbers(taskNum ? taskNum : "one");
        if (command === "goBack") {
          if (selectedPage === "My tasks") {
            if (!goBack) {
              setShowRequiredParts(false);
              setGoBack(true);
            } else {
              setSelectedPage("home");
            }
          } else {
            setSelectedPage("home");
          }
        }
        if (command === "myTasks") {
          setSelectedPage("My tasks");
          setShowRequiredParts(false);
        }
        if (command === "mySchedule") {
          setSelectedPage("My Schedule");
        }
        if (command === "tellSchedule") {
          setSelectedPage("My Schedule");
          if (todaySchedule.length === 0)
            alanBtnInstance.playText(
              "Oh ho! You do not have any tasks for today! The day is your."
            );
          else if (todaySchedule.length === 1)
            alanBtnInstance.playText("Today, you have only one task.");
          else alanBtnInstance.playText("Today, you have the following tasks");

          todaySchedule.map((ele, ind) => {
            if (todaySchedule.length !== 0) {
              alanBtnInstance.playText(`${ind + 1}, ${ele.title}`);
            }
          });
          alanBtnInstance.playText(
            "To know more about each task. Say, show my tasks?"
          );
        }
        if (command === "showTasks") {
          setSelectedPage("My tasks");
          alanBtnInstance.playText("Priorities for today are");
          todaySchedule.map((ele) => {
            alanBtnInstance.playText(`${ele.title}`);
          });

          alanBtnInstance.playText(
            "To know all the details about a task. Say, tell me more about task number 1"
          );
        }
        if (command === "acceptTask") {
          setTaskDatav2((prev) => [
            ...prev,
            (taskDatav2[taskNumber - 1].status = "accepted"),
          ]);
          alanBtnInstance.playText(
            "to know availability and more about the required parts. Say, tell me more about task number one parts requirement"
          );
        }
        if (command === "rejectTask") {
          setTaskDatav2((prev) => [
            ...prev,
            (taskDatav2[taskNumber - 1].status = "rejected"),
          ]);
        }
        if (command === "taskDetail") {
          const task = taskDatav2[taskNumber - 1];
          const parts = [];
          if (task.requiredParts.length !== 0) {
            task.requiredParts.map((ele) => parts.push(ele.modelName));
          }
          alanBtnInstance.playText(
            `${task.title}, assigned you at ${task.date} having a address of ${
              task.address
            }, the parts required to perform this task are ${parts.map(
              (ele, ind) => {
                if (parts.length > 1 && parts.length - 1 === ind)
                  return `and ${ele}`;
                return ele;
              }
            )}`
          );
          alanBtnInstance.playText(
            "To accept or reject a task. Say, accept or reject task number 1"
          );
        }
        if (command === "partsDetail") {
          if (taskDatav2[taskNumber - 1].status === "rejected") {
            alanBtnInstance.playText(
              "You rejected the task! you do not have permission to see the required parts."
            );
          } else {
            const parts = taskDatav2[taskNumber - 1].requiredParts;
            setRequiredParts(parts);
            setShowRequiredParts(true);
            parts.map((ele) => {
              alanBtnInstance.playText(
                `${ele.modelName} is ${ele.subState} and have ${ele.quantity} ${ele.state}`
              );
            });
            alanBtnInstance.playText("to go back.Say go back");
          }
        }
      },
    });
  }, []);

  return (
    <div className="phone-dimension--container">
      <Nav />
      {selectedPage === "My Schedule" ? (
        <MySchedule />
      ) : selectedPage === "My tasks" ? (
        <MyTasks />
      ) : selectedPage === "Available parts" ? (
        <AvailableParts />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
