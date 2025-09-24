import styles from './Count.module.scss';


interface CountProps {
    count: number;
}

export default function Count({count}:CountProps) {
    return (
        <div className={styles.count}>{count}</div>
    );
}