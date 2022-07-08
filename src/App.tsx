import { useState } from "react";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TaskList } from "./components/TaskList";

interface newTask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<newTask[]>([]);

  const handleCompletedTask = (id: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }

      return task;
    });

    setTasks(newTasks);
  };

  const handleNewTask = (newTask: newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleRemovedTask = (id: string) => {
    const currentTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(currentTasks);
  };

  return (
    <>
      <Header />
      <div className="w-full pb-10 px-10 sm:px-20 lg:px-60 2xl:px-[28rem] flex flex-col items-center justify-center">
        <NewTask handleNewTask={handleNewTask} />
        <TaskList
          handleCompletedTask={handleCompletedTask}
          handleRemovedTask={handleRemovedTask}
          tasks={tasks}
        />
      </div>
    </>
  );
}

export default App;
