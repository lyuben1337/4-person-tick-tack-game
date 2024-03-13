import { Profile } from "../profile";
import { ArrowDownIcon, LogoIcon } from "./icons";
import { UiButton } from "../uikit";

export function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <LogoIcon />
      <div className="w-px h-8 bg-slate-300 mx-6" />
      <UiButton className="w-44" variant="primary" size="lg">
        Play
      </UiButton>
      <button className="ml-auto gap-1 flex items-center transition-colors text-teal-600 hover:text-teal-500">
        <Profile name="lyuben1337" rating="2000" />
        <ArrowDownIcon />
      </button>
    </header>
  );
}
