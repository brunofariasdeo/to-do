import { FormEvent } from "react";

interface InputProps {
  onChange: (event: FormEvent) => void;
}

export function Input({ onChange }: InputProps) {
  return (
    <input
      className="w-full h-14 mr-4 px-4 text-gray-100 text-base placeholder-gray-300 bg-gray-500 border rounded-lg border-gray-700 focus:outline-0 focus:border-purple-dark"
      onChange={onChange}
      placeholder="Adicione uma nova tarefa"
      type="text"
    />
  );
}
