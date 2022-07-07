import { Task } from "./Task";

interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}
interface TaskListProps {
  handleCompletedTask: (id: string) => void;
  handleRemovedTask: (id: string) => void;
  tasks: Task[];
}

export function TaskList({
  handleCompletedTask,
  handleRemovedTask,
  tasks,
}: TaskListProps) {
  return (
    <section className="w-full mt-16 flex flex-col">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-sm text-blue font-bold leading-4">
            Tarefas criadas
          </h1>
          <span className="w-6 h-5 px-0.5 py-2 flex items-center justify-center text-xs font-bold text-gray-200 bg-gray-400 rounded-xl">
            5
          </span>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-sm text-purple font-bold leading-4">
            Concluídas
          </h1>
          <span className="w-13 h-5 px-2 py-2 flex items-center justify-center text-xs font-bold text-gray-200 bg-gray-400 rounded-xl">
            2 de 5
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <Task
            handleCompletedTask={handleCompletedTask}
            handleRemovedTask={handleRemovedTask}
            id={task.id}
            isCompleted={task.isCompleted}
            key={task.id}
            title={task.title}
          />
        ))}
      </div>
    </section>
  );
}
