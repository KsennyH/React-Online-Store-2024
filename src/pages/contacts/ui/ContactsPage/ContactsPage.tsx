import styles from "./ContactsPage.module.scss";
import { Title, YandexMap } from "@/shared/ui";
import { WidgetsList } from "../WidgetsList/WidgetsList";

export function ContactsPage() {
    return (
        <section className={styles.contacts}>
            <div className={styles.title}>
                <Title tag="h1">Свяжитесь с нами</Title>
            </div>
            <WidgetsList />
            <div className={styles.map}>
                <YandexMap />
            </div>
    </section>
    );
}