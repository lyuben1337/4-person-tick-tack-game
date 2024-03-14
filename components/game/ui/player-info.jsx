import clsx from "clsx";
import { GameSymbol } from "./game-symbol";
import Image from "next/image";
import { useNow } from "../../lib/timers";

const isTimeEnding = (time) => time < 10000;

function getFormattedTime(timeMs) {
  const time = new Date(timeMs);

  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  let formattedTime =
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");

  if (isTimeEnding(timeMs)) {
    formattedTime = formattedTime
      .slice(1)
      .concat(".", Math.floor(time.getMilliseconds() / 100).toString());
  }

  return formattedTime;
}

export function PlayerInfo({
  isRight,
  avatarSrc,
  name,
  rating,
  symbol,
  time,
  timeStartAt,
}) {
  const now = useNow(100, timeStartAt);
  const currentTime = Math.max(now ? time - (now - timeStartAt) : time, 0);
  const formattedTime = getFormattedTime(currentTime);

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
          "text-lg font-semibold w-[60px]",
          isRight && "order-2",
          !timeStartAt && "text-opacity-50",
          currentTime > 10000 ? "text-slate-900" : "text-orange-600",
        )}
      >
        {formattedTime}
      </div>
      <div className={clsx("h-6 w-px bg-slate-200", isRight && "order-1")} />
    </div>
  );
}
