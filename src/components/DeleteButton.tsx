import { Trash } from "phosphor-react";

export function DeleteButton() {
  return (
    <Trash
      className="mr-0 p-1 rounded hover:bg-gray-400"
      color="#808080"
      size={26}
    />
  );
}
