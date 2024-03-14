import { MOVE_ORDER } from "../constants";

export function getNextMove({ currentMove, playersCount }) {
  const moveOrder = MOVE_ORDER.slice(0, playersCount);
  const nextMoveIndex = moveOrder.indexOf(currentMove) + 1;

  return moveOrder[nextMoveIndex] ?? moveOrder[0];
}
