import { FormEvent, KeyboardEvent } from "react";

interface InputProps {
  handleSubmit: () => void;
  onChange: (event: FormEvent) => void;
  value: string;
}

export function Input({ handleSubmit, onChange, value }: InputProps) {
  const handleEnterKeyPressed = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <input
      className="w-full h-14 mr-4 px-4 text-gray-100 text-base placeholder-gray-300 bg-gray-500 border rounded-lg border-gray-700 focus:outline-0 focus:border-purple-dark"
      onKeyDown={handleEnterKeyPressed}
      onChange={onChange}
      placeholder="Adicione uma nova tarefa"
      type="text"
      value={value}
    />
  );
}
