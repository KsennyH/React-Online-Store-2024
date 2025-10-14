import styles from "./Schedule.module.scss";

function Schedule() {
    return(
        <div className={styles.schedule}>
            <h6 className={styles.schedule__title}>Режим работы:</h6>
            <p>Пн-пт: 9.00 - 19.00</p>
            <p>Сб: 9.00 - 17.00</p>
            <p>Воскресение: выходной</p>
        </div>
    );
}

export default Schedule;