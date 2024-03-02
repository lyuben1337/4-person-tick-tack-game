import styles from "./game.module.css";
import {GameSymbol} from "./game-symbol";

export function GameCell({isWinner, onClick, symbol }) {

    return (
        <button
            className={`${styles['cell']} ${isWinner ? styles['cell--win'] : ''}`}
            onClick={onClick}
        >
            <GameSymbol symbol={symbol}/>
        </button>
    )
}