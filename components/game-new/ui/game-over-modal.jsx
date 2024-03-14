import { UiButton, UiModal } from "../../uikit";

export function GameOverModal() {
  return (
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
  );
}
