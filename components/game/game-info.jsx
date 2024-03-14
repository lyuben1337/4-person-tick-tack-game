import clsx from "clsx";
import { Profile } from "../profile";
import { GameSymbol } from "./game-symbol";
import { GAME_SYMBOLS } from "./constants";
import { useEffect, useState } from "react";

const players = [
  {
    id: 1,
    name: "lyuben1337",
    rating: 2000,
    avatar: null,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 2,
    name: "WYMIB",
    rating: 1500,
    avatar: null,
    symbol: GAME_SYMBOLS.ZERO,
  },
  {
    id: 3,
    name: "Шальной Тимон",
    rating: 2500,
    avatar: null,
    symbol: GAME_SYMBOLS.TRIANGLE,
  },
  {
    id: 4,
    name: "danilgnida",
    rating: 1900,
    avatar: null,
    symbol: GAME_SYMBOLS.SQUARE,
  },
];

export function GameInfo({
  className,
  playersCount,
  currentMove,
  isWinner,
  onPlayerTimeOver,
}) {
  return (
    <div
      className={clsx(
        className,
        "grid grid-cols-2 gap-4 justify-between bg-white rounded-2xl shadow-md px-8 py-4",
      )}
    >
      {players.slice(0, playersCount).map((player, index) => (
        <PlayerInfo
          playerInfo={player}
          isPlayerActive={player.symbol === currentMove && !isWinner}
          key={index}
          isRight={index % 2 === 1}
          onTimeOver={() => onPlayerTimeOver(player.symbol)}
        />
      ))}
    </div>
  );
}

function PlayerInfo({ playerInfo, isRight, isPlayerActive, onTimeOver }) {
  function getFormattedTime() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0")
    );
  }

  const [time, setTime] = useState(10);
  const formattedTime = getFormattedTime();
  const isTimeEnding = time < 10;

  useEffect(() => {
    if (isPlayerActive) {
      setTime(10);

      const interval = setInterval(() => {
        setTime((t) => Math.max(t - 1, 0));
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isPlayerActive]);

  useEffect(() => {
    if (time === 0) {
      onTimeOver();
    }
  }, [time]);

  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <Profile
          className="w-44"
          name={playerInfo.name}
          avatar={playerInfo.avatar}
          rating={playerInfo.rating}
        />
        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1">
          <GameSymbol symbol={playerInfo.symbol} />
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
