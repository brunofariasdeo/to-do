import { Trash } from "phosphor-react";
import { MouseEvent } from "react";

interface DeleteButtonProps {
  onClick: (event: MouseEvent) => void;
}

export function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <Trash
      className="mr-0 p-1 rounded hover:bg-gray-400 cursor-pointer shrink-0"
      color="#808080"
      onClick={onClick}
      size={26}
    />
  );
}
