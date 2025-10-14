import { useState } from "react";
import styles from "./Checkbox.module.scss";

interface CheckboxProps {
    name: string
}

function Checkbox({ name }: CheckboxProps) {
    const [isChecked, setIsChecked] = useState(false);
    return(
        <label className={styles.checkboxBlock}>
            <input
                className={styles.checkboxBlock__input} 
                type="checkbox" 
                checked={isChecked}
                onChange={() => setIsChecked(prev => !prev)}
            />
            <span className={styles.checkboxBlock__custom}></span>
            <span className={styles.checkboxBlock__name}>{name}</span>
        </label>
    );
}

export default Checkbox;