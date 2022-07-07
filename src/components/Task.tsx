import { Checkbox } from "./Checkbox";
import { DeleteButton } from "./DeleteButton";

interface Task {
  key: string;
  title: string;
  isCompleted: boolean;
}

export function Task({ key, title, isCompleted }: Task) {
  return (
    <div className="w-full p-4 flex items-center justify-between text-gray-100 placeholder-gray-300 bg-gray-500 border rounded-lg border-gray-400">
      <div className="flex">
        <Checkbox isCompleted={isCompleted} />

        <p className="mx-3 mt-0 pr-3 text-sm">{title}</p>
      </div>

      <DeleteButton />
    </div>
  );
}
