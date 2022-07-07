import { PlusCircle } from "phosphor-react";
import { MouseEvent } from "react";

interface CreateButtonProps {
  onClick: (event: MouseEvent) => void;
}

export function CreateButton({ onClick }: CreateButtonProps) {
  return (
    <button
      className="w-28 h-14 p-2 bg-blue-dark text-gray-100 text-sm flex items-center justify-center rounded-lg font-bold hover:bg-blue"
      onClick={onClick}
    >
      Criar <PlusCircle className="ml-1" size={20} />
    </button>
  );
}
