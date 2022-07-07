import { CheckCircle, Circle } from "phosphor-react";

export function Checkbox({ isCompleted }) {
  return isCompleted ? (
    <CheckCircle color="#5E60CE" size={20} weight="fill" />
  ) : (
    <Circle color="#4EA8DE" size={20} />
  );
}
