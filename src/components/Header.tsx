import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="w-full h-48 flex items-center justify-center bg-gray-700">
      <Logo />
    </header>
  );
}
