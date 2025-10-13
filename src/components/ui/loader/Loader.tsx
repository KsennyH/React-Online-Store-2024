import { RingLoader } from "react-spinners";
import styles from "./Loader.module.scss";

function Loader() {
    return(
        <div className={styles.loadingWrapper}>
            <RingLoader color='#414141' />
        </div>
    );
}

export default Loader;