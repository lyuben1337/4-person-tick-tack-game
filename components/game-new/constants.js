import avatarSrc from "../profile/avatar.png";

export const GAME_SYMBOLS = {
  CROSS: 1,
  ZERO: 2,
  TRIANGLE: 3,
  SQUARE: 4,
};

export const MOVE_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ZERO,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE,
];

export const PLAYERS = [
  {
    id: 1,
    name: "lyuben1337",
    rating: 2000,
    avatar: avatarSrc,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 2,
    name: "WYMIB",
    rating: 1500,
    avatar: avatarSrc,
    symbol: GAME_SYMBOLS.ZERO,
  },
  {
    id: 3,
    name: "Шальной Тимон",
    rating: 2500,
    avatar: avatarSrc,
    symbol: GAME_SYMBOLS.TRIANGLE,
  },
  {
    id: 4,
    name: "danilgnida",
    rating: 1900,
    avatar: avatarSrc,
    symbol: GAME_SYMBOLS.SQUARE,
  },
];
