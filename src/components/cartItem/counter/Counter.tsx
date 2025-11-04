import styles from './Counter.module.scss';

interface CounterProps {
    count: number;
    onClickMinus: () => void;
    onClickPlus: () => void;
}

export default function Counter({count, onClickMinus, onClickPlus}:CounterProps) {
    return (
        <div className={styles.counter}> 
            <button onClick={ onClickMinus } className={styles.btn} type="button">-</button>
            <div className={styles.input}>{count}</div>
            <button onClick={ onClickPlus } className={styles.btn} type="button">+</button>
        </div>
    );
}