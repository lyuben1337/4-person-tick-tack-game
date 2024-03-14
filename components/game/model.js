import { GAME_SYMBOLS } from "./constants";

export function computeWinner(cells, sequenceSize = 3, fieldSize = 19) {
  const gap = Math.floor(sequenceSize / 2);
  function getSequences(i) {
    const sequences = [[], [], [], []];

    for (let j = 0; j < sequenceSize; j++) {
      sequences[0].push(j - gap + i); // horizontal
      sequences[1].push(fieldSize * (j - gap) + (j - gap) + i); // left-right diagonal
      sequences[2].push(fieldSize * (gap - j) + (j - gap) + i); // right-left diagonal
      sequences[3].push(fieldSize * (j - gap) + i); // vertical
    }

    const x = i % fieldSize;
    if (x < gap || x >= fieldSize - gap) {
      sequences.shift();
      sequences.shift();
      sequences.shift();
    }

    return sequences;
  }

  function compareElements(sequence) {
    let result = true;

    for (let i = 1; i < sequence.length; i++) {
      result &&= !!cells[sequence[i]];
      result &&= cells[sequence[i]] === cells[sequence[i - 1]];
    }

    return result;
  }

  //const startIndex = gap + gap * fieldSize;
  //const endIndex = cells.length - (gap + gap * fieldSize);

  for (
    let i = 0;
    i < cells.length;
    //(i + 1) % fieldSize === fieldSize - gap ? (i = i + 2 * gap + 1) :
    i++
  ) {
    if (!cells[i]) continue;
    const sequences = getSequences(i);
    const winnerSequence = sequences.find((seq) => compareElements(seq));

    if (winnerSequence) return winnerSequence;
  }

  return undefined;
}

export function getNextMove(currentMove, playersCount) {
  if (playersCount === 2) {
    return (currentMove % 2) + 1;
  }
  return (currentMove % Object.keys(GAME_SYMBOLS).length) + 1;
}
