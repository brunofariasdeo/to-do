import { Trash } from "phosphor-react";
import { MouseEvent, useState } from "react";

interface DeleteButtonProps {
  onClick: (event: MouseEvent) => void;
}

export function DeleteButton({ onClick }: DeleteButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Trash
      className="mr-0 p-1 rounded hover:bg-gray-400 cursor-pointer shrink-0"
      color={isHovered ? "#E25858" : "#808080"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      size={26}
    />
  );
}
