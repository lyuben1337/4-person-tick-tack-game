import { UiButton, UiModal } from "../../uikit";

export function GameOverModal({ winnerName, playersList }) {
  return (
    <UiModal
      isOpened={!!winnerName}
      onClose={() => console.log("closing modal")}
    >
      <UiModal.Header>Game Ended</UiModal.Header>
      <UiModal.Body>
        <div className="text-sm">
          Winner: <span className="text-teal-600">{winnerName}</span>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-2 justify-between">
          {playersList}
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
  );
}
