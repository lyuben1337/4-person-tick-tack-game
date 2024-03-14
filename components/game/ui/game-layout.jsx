import clsx from "clsx";

export function GameLayout({
  backLink,
  title,
  gameInfo,
  playersList,
  gameMoveInfo,
  actions,
  gameCells,
}) {
  return (
    <div className="pb-10">
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
      <div
        className={clsx("mt-6 bg-white rounded-2xl shadow-md px-8 pt-5 pb-8")}
      >
        <div className="flex gap-3 items-center">
          <div className="mr-auto">{gameMoveInfo}</div>
          {actions}
        </div>
        <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3">
          {gameCells}
        </div>
      </div>
    </div>
  );
}
