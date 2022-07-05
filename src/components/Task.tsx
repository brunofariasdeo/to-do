import { CheckCircle, Circle, Trash } from "phosphor-react";

export function Task() {
  return (
    <div className="w-full p-4 flex items-center justify-center text-gray-100 placeholder-gray-300 bg-gray-500 border rounded-lg border-gray-400">
      <Circle color="#4EA8DE" size={20} />
      <p className="mx-3 mt-0 pr-3">
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <Trash color="#808080" size={20} />
    </div>
  );
}
