import { PlusCircle } from "phosphor-react";
import { MouseEvent } from "react";

interface CreateButtonProps {
  isInputEmpty: boolean;
  onClick: (event: MouseEvent) => void;
}

export function CreateButton({ isInputEmpty, onClick }: CreateButtonProps) {
  return (
    <button
      className="w-28 h-14 p-2 bg-blue-dark text-gray-100 text-sm flex items-center justify-center rounded-lg font-bold hover:bg-blue disabled:opacity-50"
      disabled={!isInputEmpty}
      onClick={onClick}
    >
      Criar <PlusCircle className="ml-1" size={20} />
    </button>
  );
}
