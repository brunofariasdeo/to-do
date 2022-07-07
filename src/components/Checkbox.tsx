import { CheckCircle, Circle } from "phosphor-react";
import { MouseEvent, useState } from "react";

interface CheckboxProps {
  isCompleted: boolean;
  onClick: (event: MouseEvent) => void;
}

export function Checkbox({ isCompleted, onClick }: CheckboxProps) {
  const [isHovered, setIsHovered] = useState(false);

  return isCompleted ? (
    <CheckCircle
      className="cursor-pointer shrink-0"
      color={isHovered ? "#8284FA" : "#5E60CE"}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      size={20}
      weight="fill"
    />
  ) : (
    <Circle
      className="cursor-pointer shrink-0"
      color={isHovered ? "#1E6F9F" : "#4EA8DE"}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      size={20}
    />
  );
}
