import { CreateButton } from "./CreateButton";
import { Input } from "./Input";

export function NewTask() {
  return (
    <section className="w-full flex items-center justify-center">
      <Input />
      <CreateButton />
    </section>
  );
}
