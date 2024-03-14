import clsx from "clsx";
import { GameSymbol } from "./game-symbol";
import Image from "next/image";

function getFormattedTime(timeSeconds) {
  const minutes = Math.floor(timeSeconds / 60);
  const seconds = timeSeconds % 60;

  return (
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0")
  );
}

export function PlayerInfo({
  isRight,
  avatarSrc,
  name,
  rating,
  symbol,
  time,
  isTimeEnding,
  isPlayerActive,
}) {
  const formattedTime = getFormattedTime(time);

  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <div
          className={clsx(
            "flex items-center gap-2 text-start text-teal-600 w-44",
          )}
        >
          <Image
            src={avatarSrc}
            width={48}
            height={48}
            alt="avatar"
            unoptimized
          />
          <div className="overflow-hidden">
            <div className="text-lg leading-tight truncate">{name}</div>
            <div className="text-slate-400 text-xs leading-tight">
              Rating: {rating}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1">
          <GameSymbol symbol={symbol} />
        </div>
      </div>
      <div
        className={clsx(
          "text-slate-900 text-opacity-50 text-lg font-semibold w-[60px]",
          isRight && "order-2",
          isTimeEnding && "text-orange-600",
          isPlayerActive && "text-opacity-100",
        )}
      >
        {formattedTime}
      </div>
      <div className={clsx("h-6 w-px bg-slate-200", isRight && "order-1")} />
    </div>
  );
}
