import { CheckCircle, Circle } from "phosphor-react";

export function Checkbox({ isCompleted }) {
  return isCompleted ? (
    <CheckCircle color="#4EA8DE" size={20} />
  ) : (
    <Circle color="#4EA8DE" size={20} />
  );
}
