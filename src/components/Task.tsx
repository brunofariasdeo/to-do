import classNames from "classnames";
import { Checkbox } from "./Checkbox";
import { DeleteButton } from "./DeleteButton";

interface Task {
  handleCompletedTask: (id: string) => void;
  handleRemovedTask: (id: string) => void;
  id: string;
  isCompleted: boolean;
  title: string;
}

export function Task({
  handleCompletedTask,
  handleRemovedTask,
  id,
  isCompleted,
  title,
}: Task) {
  return (
    <div className="w-full p-4 flex items-center justify-between text-gray-100 placeholder-gray-300 bg-gray-500 border rounded-lg border-gray-400">
      <div className="flex">
        <Checkbox
          isCompleted={isCompleted}
          onClick={() => handleCompletedTask(id)}
        />

        <p
          className={
            (classNames("mx-3 mt-0 pr-3 text-sm"),
            isCompleted ? "text-gray-300 line-through" : "text-gray-100")
          }
        >
          {title}
        </p>
      </div>

      <DeleteButton onClick={() => handleRemovedTask(id)} />
    </div>
  );
}
