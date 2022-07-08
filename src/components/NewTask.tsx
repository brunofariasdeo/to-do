import { FormEvent, MouseEvent, useState } from "react";
import { CreateButton } from "./CreateButton";
import { Input } from "./Input";
import { v4 as uuidv4 } from "uuid";

interface newTask {
  id: string;
  title: string;
  isCompleted: boolean;
}
interface NewTaskProps {
  handleNewTask: (newTask: newTask) => void;
}

export function NewTask({ handleNewTask }: NewTaskProps) {
  const [task, setTask] = useState("");

  const handleChange = (event: FormEvent) => {
    setTask((event.target as HTMLInputElement).value);
  };

  const handleSubmit = () => {
    handleNewTask({
      id: uuidv4(),
      title: task,
      isCompleted: false,
    });

    setTask("");
  };

  return (
    <section className="w-full flex items-center justify-center">
      <Input onChange={handleChange} handleSubmit={handleSubmit} value={task} />
      <CreateButton onClick={handleSubmit} />
    </section>
  );
}
