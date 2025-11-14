import { JSX } from "react";
import styles from "./ContactWidget.module.scss";
import { ContactWidgetProps } from "./ContactWidgetProps";

export function ContactWidget({ title, children }: ContactWidgetProps): JSX.Element {
    return(
        <div className={styles.contactWidget}>
            <div className={styles.title}>
                <strong>{title}</strong>
            </div>
            {children}
        </div>
    );
}