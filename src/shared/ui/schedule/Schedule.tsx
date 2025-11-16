import { COMPANY_DATA } from "@/shared/constants";
import styles from "./Schedule.module.scss";
import { JSX } from "react";

export function Schedule(): JSX.Element {
    return(
        <div className={styles.schedule}>
            <h6 className={styles.title}>Режим работы:</h6>
            { COMPANY_DATA.schedule.map(el => <p key={el}>{el}</p>) }
        </div>
    );
}