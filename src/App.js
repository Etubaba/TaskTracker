import Header from "./Component/Header";
import Task from "./Component/Task";
import { useState } from "react";
import AddTask from "./Component/AddTask";
import Button from "./Component/Button";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "doctors appointment",
      day: "Apr 24th at 8:00pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Interview appointment",
      day: "Apr 28th at 4:00pm",
      reminder: true,
    },

    {
      id: 3,
      text: "food shopping ",
      day: "Apr 29th at 10:00pm",
      reminder: false,
    },
  ]);

  //Add task Function
  const addTask = (data) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newTasks = { id, ...data };
    setTasks([...tasks, newTasks]);
  };

  //Deleting Function
  function deleteTask(iod) {
    setTasks(tasks.filter((data) => data.id !== iod));
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((data) =>
        data.id === id ? { ...data, reminder: !data.reminder } : tasks
      )
    );
  };

  return (
    <div className="container">
      <Header title="Task Tracker" onAdd={() => setShowAddTask(!showAddTask)} />

      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Task tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "oga,You never put task"
      )}
    </div>
  );
}

export default App;
