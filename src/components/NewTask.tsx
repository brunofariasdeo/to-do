import { PlusCircle } from "phosphor-react";

export function NewTask() {
  return (
    <section className="flex items-center justify-center">
      <input
        className="w-[40rem] h-14 mr-4 pl-4 text-gray-100 placeholder-gray-300 bg-gray-500 border rounded-lg border-gray-700"
        placeholder="Adicione uma nova tarefa"
      />
      <button className="w-28 h-14 p-2 bg-blue-dark flex items-center justify-center rounded-lg font-bold">
        Criar <PlusCircle className="ml-1" size={20} />
      </button>
    </section>
  );
}
