import { CheckCircle, Circle } from "phosphor-react";
import { MouseEvent } from "react";

interface CheckboxProps {
  isCompleted: boolean;
  onClick: (event: MouseEvent) => void;
}

export function Checkbox({ isCompleted, onClick }: CheckboxProps) {
  return isCompleted ? (
    <CheckCircle
      className="cursor-pointer shrink-0"
      color="#5E60CE"
      onClick={onClick}
      size={20}
      weight="fill"
    />
  ) : (
    <Circle
      className="cursor-pointer shrink-0"
      color="#4EA8DE"
      onClick={onClick}
      size={20}
    />
  );
}
