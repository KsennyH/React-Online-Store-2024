import { useState } from "react";
import styles from "./Checkbox.module.scss";

interface CheckboxProps {
    name: string,
    checked: boolean,
    onChange: (checked: boolean) => void;
}

function Checkbox({ name, checked, onChange }: CheckboxProps) {

    return(
        <label className={styles.checkboxBlock}>
            <input
                className={styles.checkboxBlock__input} 
                type="checkbox" 
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            <span className={styles.checkboxBlock__custom}></span>
            <span className={styles.checkboxBlock__name}>{name}</span>
        </label>
    );
}

export default Checkbox;