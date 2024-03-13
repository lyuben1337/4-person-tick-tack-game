import { useGameState } from "./use-game-state";
import { GameInfo } from "./game-info";
import { GameCell } from "./game-cell";
import ResetButton from "./reset-button";

export default function Game() {
  const {
    cells,
    currentStep,
    winnerSequence,
    handelCellClick,
    handleClearFieldClick,
    winnerSymbol,
    isDraw,
  } = useGameState();

  return (
    <div className="flex flex-col items-center w-40 mx-auto my-28 border border-black p-5">
      <GameInfo
        isDraw={isDraw}
        currentStep={currentStep}
        winnerSymbol={winnerSymbol}
      />
      <div
        className={
          "grid pt-px pl-px grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)]"
        }
      >
        {cells.map((symbol, index) => {
          return (
            <GameCell
              key={index}
              isWinner={winnerSequence?.includes(index)}
              onClick={() => handelCellClick(index)}
              symbol={symbol}
            />
          );
        })}
      </div>
      <ResetButton onClick={handleClearFieldClick} />
    </div>
  );
}
