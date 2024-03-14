import { MOVE_ORDER } from "../constants";

export function getNextMove(currentMove, playersCount, playersTimeOver) {
  const moveOrder = MOVE_ORDER.slice(0, playersCount).filter(
    (symbol) => !playersTimeOver.includes(symbol),
  );
  const nextMoveIndex = moveOrder.indexOf(currentMove) + 1;

  return moveOrder[nextMoveIndex] ?? moveOrder[0];
}
