import { JSX, ReactNode } from "react";
import styles from "./ContactWidget.module.scss";
import Title from "../title/Title";

type ContactWidgetProps = {
    title: string,
    children: ReactNode
}
function ContactWidget({ title, children }: ContactWidgetProps): JSX.Element {
    return(
        <div className={styles.contactWidget}>
            <div className={styles.title}>
                <Title tag="h3">{title}</Title>
            </div>
            {children}
        </div>
    );
}
export default ContactWidget;