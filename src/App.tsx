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

  const handleNewTask = (newTask: newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <Header />
      <div className="w-full pb-10 px-80 2xl:px-[32rem] flex flex-col items-center justify-center">
        <NewTask handleNewTask={handleNewTask} />
        <TaskList tasks={tasks} />
      </div>
    </>
  );
}

export default App;
