import { GameLayout } from "./ui/game-layout";
import { BackToMainPageLink } from "./ui/back-to-main-page-link";
import { GameTitle } from "./ui/game-title";
import { GameInfo } from "./ui/game-info";
import { PLAYERS } from "./constants";
import { PlayerInfo } from "./ui/player-info";
import { GameMoveInfo } from "./ui/game-move-info";
import { GameCell } from "./ui/game-cell";
import { GameOverModal } from "./ui/game-over-modal";
import {
  GAME_STATE_ACTIONS,
  gameStateReducer,
  initGameState,
} from "./model/game-state-reducer";
import { computeWinner } from "./model/compute-winner";
import { getNextMove } from "./model/get-next-move";
import { useReducer } from "react";
import { computeWinnerSymbol } from "./model/compute-winner-symbol";

const PLAYERS_COUNT = 4;
const DEFAULT_TIMER = 60 * 1000; // ms

export function Game() {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    { playersCount: PLAYERS_COUNT, defaultTimer: DEFAULT_TIMER },
    initGameState,
  );

  const winnerSequence = computeWinner(gameState);

  const nextMove = getNextMove(gameState);

  const winnerSymbol = computeWinnerSymbol(gameState, {
    winnerSequence,
    nextMove,
  });

  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);

  const { cells, currentMove, timers } = gameState;

  return (
    <>
      <GameLayout
        backLink={<BackToMainPageLink />}
        title={<GameTitle />}
        gameInfo={
          <GameInfo
            playersCount={PLAYERS_COUNT}
            gameMode={"1 min round"}
            isRatingGame
          />
        }
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            avatarSrc={player.avatar}
            name={player.name}
            rating={player.rating}
            time={DEFAULT_TIMER}
            symbol={player.symbol}
            isRight={index % 2 === 1}
          />
        ))}
        gameMoveInfo={
          <GameMoveInfo currentMove={currentMove} nextMove={nextMove} />
        }
        gameCells={cells.map((cell, index) => (
          <GameCell
            key={index}
            isWinner={!!winnerSequence?.includes(index)}
            symbol={cell}
            onClick={() =>
              dispatch({
                type: GAME_STATE_ACTIONS.CELL_CLICK,
                index,
              })
            }
            disabled={!!winnerSymbol}
          />
        ))}
      />
      <GameOverModal
        winnerName={winnerPlayer?.name}
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            avatarSrc={player.avatar}
            name={player.name}
            rating={player.rating}
            time={60}
            symbol={player.symbol}
            isRight={index % 2 === 1}
          />
        ))}
      />
    </>
  );
}
