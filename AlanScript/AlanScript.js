onUserEvent((p, e) => {
  if (e.event === "firstActivate") {
    p.play("Hi, would you like to know your schedule for today?");
    p.then(knowSchedule);
  }
});

intent("My schedule for today?", (p) => {
  p.play("Sure, Just a minute");
  p.then(knowSchedule);
});

const knowSchedule = context(() => {
  intent("Yes (Please|)", (p) => {
    p.play({ command: "tellSchedule" });
  });
  intent("No (I am fine|)", (p) => {
    p.play("Alright! Have a good day.");
  });
});

intent("Show my tasks?", (p) => {
  p.play("showing your tasks.");
  p.play({ command: "showTasks" });
});

intent("accept task number $(taskNumber* (.*))", (p) => {
  let taskNum = p.taskNumber.value;
  p.play({ command: "acceptTask", taskNum });
  p.play(`task Number ${taskNum} is accepted`);
});

intent("reject task number $(taskNumber* (.*))", (p) => {
  let taskNum = p.taskNumber.value;
  p.play({ command: "rejectTask", taskNum });
  p.play(`task Number ${taskNum} is rejected`);
});

intent("tell me more about task number  $(taskNumber* (.*))", (p) => {
  let taskNum = p.taskNumber.value;
  p.play({ command: "taskDetail", taskNum });
});

intent(
  "tell me more about task number $(taskNumber* (.*)) parts requirement",
  (p) => {
    let taskNum = p.taskNumber.value;
    p.play({ command: "partsDetail", taskNum });
  }
);

intent("go back", (p) => {
  p.play("going back");
  p.play({ command: "goBack" });
});

intent("go to my tasks", (p) => {
  p.play("going");
  p.play({ command: "myTasks" });
});
intent("go to my schedule", (p) => {
  p.play("going");
  p.play({ command: "mySchedule" });
});
