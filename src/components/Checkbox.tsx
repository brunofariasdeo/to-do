import { CheckCircle, Circle } from "phosphor-react";
import { MouseEvent } from "react";

interface CheckboxProps {
  isCompleted: boolean;
  onClick: (event: MouseEvent) => void;
}

export function Checkbox({ isCompleted, onClick }: CheckboxProps) {
  return isCompleted ? (
    <CheckCircle color="#5E60CE" onClick={onClick} size={20} weight="fill" />
  ) : (
    <Circle color="#4EA8DE" onClick={onClick} size={20} />
  );
}
