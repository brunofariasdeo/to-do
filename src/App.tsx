import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <>
      <Header />
      <div className="w-full pb-10 px-80 2xl:px-[32rem] flex flex-col items-center justify-center">
        <NewTask />
        <TaskList />
      </div>
    </>
  );
}

export default App;
