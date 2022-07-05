import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <>
      <Header />
      <div className="w-full px-80 flex flex-col items-center justify-center">
        <NewTask />
        <TaskList />
      </div>
    </>
  );
}

export default App;
