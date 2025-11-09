import { JSX } from "react";
import styles from "./Checkbox.module.scss";
import { CheckboxProps } from "./CheckboxProps";

export function Checkbox({ name, checked, onChange }: CheckboxProps): JSX.Element {

    return(
        <label className={styles.checkboxBlock}>
            <input
                className={styles.input} 
                type="checkbox" 
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            <span className={styles.custom}></span>
            <span className={styles.name}>{name}</span>
        </label>
    );
}