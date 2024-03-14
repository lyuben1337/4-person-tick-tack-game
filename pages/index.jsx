import { Header } from "../components/header";
import {
  GameField,
  GameInfo,
  GameTitle,
  UseGameState,
} from "../components/game";
import { useState } from "react";

export default function HomePage() {
  const [playersCount, setPlayersCount] = useState(2);
  const { cells, currentMove, nextMove, handleCellClick, winnerSequence } =
    UseGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          playersCount={playersCount}
          currentMove={currentMove}
          className="mt-4"
          isWinner={!!winnerSequence}
        />
        <GameField
          playersCount={playersCount}
          className="mt-4"
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
          winnerSequence={winnerSequence}
        />
      </main>
    </div>
  );
}
