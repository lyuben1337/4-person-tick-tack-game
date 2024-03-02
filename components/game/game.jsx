import styles from "./game.module.css";
import {useGameState} from "./use-game-state";
import {GameInfo} from "./game-info";
import {GameCell} from "./game-cell";

export default function Game() {
    const {cells,
        currentStep,
        winnerSequence,
        handelCellClick,
        handleClearFieldClick,
        winnerSymbol,
        isDraw } = useGameState();

    return (
        <div className={styles['game']}>
            <GameInfo
                isDraw={isDraw}
                currentStep={currentStep}
                winnerSymbol={winnerSymbol}
            />
            <div className={styles["game-field"]}>
                {cells.map((symbol, index) => {
                    return <GameCell
                        isWinner={winnerSequence?.includes(index)}
                        onClick={() => handelCellClick(index)}
                        symbol={symbol}
                    />
                })}
            </div>
            <div className={styles["game-panel"]}
                 onClick={handleClearFieldClick}
            >
                <button>
                    Очистить поле
                </button>
            </div>
        </div>
    )
}