import { HistoryIcon, PlayersIcon, StarIcon } from "./icons";

export function GameInfo({ playersCount, isRatingGame, gameMode }) {
  return (
    <div className="flex items-center gap-3 text-xs text-slate-400">
      {isRatingGame && <StarIcon />}
      <div className="flex items-center gap-1">
        <PlayersIcon /> {playersCount}
      </div>
      <div className="flex items-center gap-1">
        <HistoryIcon /> {gameMode}
      </div>
    </div>
  );
}
