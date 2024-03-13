import Image from "next/image";
import logoSrc from "./logo.svg";
import avatarSrc from "./avatar.png";

export function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <Image src={logoSrc} alt="logo" />
      <div className="w-px h-8 bg-slate-300 mx-6" />
      <button className="w-44 bg-teal-600 hover:bg-teal-500 transition-colors text-white rounded-lg px-5 py-2 text-2xl leading-tight">
        Play
      </button>
      <button className="ml-auto flex items-center gap-2 text-start transition-colors text-teal-600 hover:text-teal-500">
        <Image
          src={avatarSrc}
          width={48}
          height={48}
          alt="avatar"
          unoptimized
        />
        <div>
          <div className="text-lg leading-tight">lyuben1337</div>
          <div className="text-slate-400 text-xs leading-tight">
            Rating: 1200
          </div>
        </div>
      </button>
    </header>
  );
}
