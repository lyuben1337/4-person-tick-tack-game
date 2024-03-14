import { Header } from "../components/header";
import {
  GameField,
  GameInfo,
  GameSymbol,
  GameTitle,
  UseGameState,
} from "../components/game";
import { useState } from "react";
import { UiButton, UiModal } from "../components/uikit";

export default function HomePage() {
  const [playersCount, setPlayersCount] = useState(2);
  const {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    winnerSequence,
    handlePlayerTimeOver,
    winnerSymbol,
  } = UseGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          playersCount={playersCount}
          currentMove={currentMove}
          className="mt-4"
          isWinner={!!winnerSymbol}
          onPlayerTimeOver={handlePlayerTimeOver}
        />
        <div>{winnerSymbol && <GameSymbol symbol={winnerSymbol} />}</div>
        <UiModal
          isOpened={!!winnerSymbol}
          onClose={() => console.log("closing modal")}
        >
          <UiModal.Header>Game Ended</UiModal.Header>
          <UiModal.Body>
            <div className="text-sm">
              Winner: <span className="text-teal-600">lyuben1337</span>
            </div>
          </UiModal.Body>
          <UiModal.Footer>
            <UiButton size="md" variant="outline">
              Back to Game
            </UiButton>
            <UiButton size="md" variant="primary">
              Play Again
            </UiButton>
          </UiModal.Footer>
        </UiModal>
        <GameField
          playersCount={playersCount}
          className="mt-4"
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
          winnerSequence={winnerSequence}
          winnerSymbol={winnerSymbol}
        />
      </main>
    </div>
  );
}
