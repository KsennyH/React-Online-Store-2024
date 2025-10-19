import Title from "@/components/ui/title/Title";
import styles from "./ContactPage.module.scss";
import ContactWidget from "@/components/ui/contact-widget/ContactWidget";
import YandexMap from "@/components/map/YandexMap";

export default function ContactPage() {
    return (
        <section className={styles.contacts}>
            <div className={styles.contacts__title}>
                <Title tag="h1">Свяжитесь с нами</Title>
            </div>
            <div className={styles.contacts__wrapper}>
                <ContactWidget title="Телефон">
                    <a href="tel:+74932134581">+7 (4932) 134-581</a>
                </ContactWidget>
                <ContactWidget title="Email">
                    <a href="mailto:motomirIvanovo@email.com">motomirIvanovo@email.com</a>
                </ContactWidget>
                <ContactWidget title="Адрес">
                    <p>Иваново, Посадский переулок, 8</p>
                </ContactWidget>
                <ContactWidget title="Время работы">
                    <p>Пн–Пт: 9:00 – 19:00</p>
                    <p>Сб: 9:00 - 17:00</p>
                </ContactWidget>
            </div>

      <div className={styles.contacts__map}>
        <YandexMap />
      </div>
    </section>
    );
}