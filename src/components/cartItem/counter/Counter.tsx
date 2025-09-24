import styles from './Counter.module.scss';

interface CounterProps {
    count: number;
    onClickMinus: () => void;
    onClickPlus: () => void;
}

export default function Counter({count, onClickMinus, onClickPlus}:CounterProps) {
    return (
        <div className={styles.counter}> 
            <button onClick={onClickMinus} className={styles.counter__btn} type="button">-</button>
            <div className={styles.counter__input}>{count}</div>
            <button onClick={onClickPlus} className={styles.counter__btn} type="button">+</button>
        </div>
    );
}