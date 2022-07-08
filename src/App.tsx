import { useState } from "react";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TaskList } from "./components/TaskList";

interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleCompletedTask = (id: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }

      return task;
    });

    setTasks(sortTasksByCompletion(newTasks));
  };

  const handleNewTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  const handleRemovedTask = (id: string) => {
    const currentTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(currentTasks);
  };

  const sortTasksByCompletion = (tasks: Task[]) => {
    const tasksSorted = tasks?.sort(
      (a, b) => Number(a.isCompleted) - Number(b.isCompleted)
    );

    return tasksSorted;
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
