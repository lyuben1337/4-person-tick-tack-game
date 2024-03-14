import { MOVE_ORDER } from "../constants";

export function getNextMove({ currentMove, playersCount, timers }) {
  const moveOrder = MOVE_ORDER.slice(0, playersCount).filter(
    (symbol) => timers[symbol] > 0,
  );
  const nextMoveIndex = moveOrder.indexOf(currentMove) + 1;

  return moveOrder[nextMoveIndex] ?? moveOrder[0];
}
