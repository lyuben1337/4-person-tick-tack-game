import { CrossIcon, SquareIcon, TriangleIcon, ZeroIcon } from "./icons";
import { GAME_SYMBOLS } from "../constants";

export function GameSymbol({ symbol, className }) {
  const Icon = {
    [GAME_SYMBOLS.CROSS]: CrossIcon,
    [GAME_SYMBOLS.ZERO]: ZeroIcon,
    [GAME_SYMBOLS.TRIANGLE]: TriangleIcon,
    [GAME_SYMBOLS.SQUARE]: SquareIcon,
  }[symbol];
  return <Icon className={className} />;
}
