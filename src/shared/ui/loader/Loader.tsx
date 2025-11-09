import { RingLoader } from "react-spinners";
import styles from "./Loader.module.scss";
import { JSX } from "react";

export function Loader(): JSX.Element {
    return(
        <div className={styles.loadingWrapper}>
            <RingLoader color='#fff' />
        </div>
    );
}