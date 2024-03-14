import Link from "next/link";
import {
  ArrowLeftIcon,
  HistoryIcon,
  PlayersIcon,
  StarIcon,
} from "../../game/icons";
import clsx from "clsx";

export function GameLayout({ backLink, title, gameInfo, playersList }) {
  return (
    <div>
      <div className="pl-2">
        {backLink}
        {title}
        {gameInfo}
      </div>
      <div
        className={clsx(
          "mt-4 grid grid-cols-2 gap-4 justify-between bg-white rounded-2xl shadow-md px-8 py-4",
        )}
      >
        {playersList}
      </div>
    </div>
  );
}
