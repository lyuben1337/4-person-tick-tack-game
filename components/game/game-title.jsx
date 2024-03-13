import Link from "next/link";
import { ArrowLeftIcon, HistoryIcon, PlayersIcon, StarIcon } from "./icons";

export function GameTitle({ playersCount }) {
  return (
    <div className="pl-2">
      <Link
        href="#"
        className="flex items-center gap-2 text-xs text-teal-600 leading-tight"
      >
        <ArrowLeftIcon />
        Main Page
      </Link>
      <h1 className="text-4xl leading-tight">Tick-Tack</h1>
      <div className="flex items-center gap-3 text-xs text-slate-400">
        <StarIcon />
        <div className="flex items-center gap-1">
          <PlayersIcon />
          {playersCount}
        </div>
        <div className="flex items-center gap-1">
          <HistoryIcon />1 min round
        </div>
      </div>
    </div>
  );
}
