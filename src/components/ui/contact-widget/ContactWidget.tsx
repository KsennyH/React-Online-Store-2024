import { JSX } from "react";
import styles from "./ContactWidget.module.scss";
import { ContactWidgetProps } from "./ContactWidgetProps";
import { Title } from "@/shared";

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