import { GameLayout } from "./ui/game-layout";
import { BackToMainPageLink } from "./ui/back-to-main-page-link";
import { GameTitle } from "./ui/game-title";
import { GameInfo } from "./ui/game-info";
import { PLAYERS } from "./constants";
import { PlayerInfo } from "./ui/player-info";

export function Game() {
  return (
    <GameLayout
      backLink={<BackToMainPageLink />}
      title={<GameTitle />}
      gameInfo={
        <GameInfo playersCount={4} gameMode={"1 min round"} isRatingGame />
      }
      playersList={PLAYERS.map((player, index) => (
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
  );
}
