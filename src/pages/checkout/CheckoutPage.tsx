import { JSX, useState } from "react";
import styles from "./CheckoutPage.module.scss";
import Title from "@/components/ui/title/Title";
import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/checkbox/Checkbox";

function CheckoutPage(): JSX.Element {
    const [isChecked, setIsChecked] = useState(true);
    console.log(isChecked);
    return(
        <section className={styles.checkout}>
            <div className="container">
                <div className={styles.checkout__title}>
                    <Title tag="h1">Оформление заказа</Title>
                </div>
                <form className={styles.form}>
                    <label className={styles.form__label}>
                        <span className={styles.form__title}>Имя:</span>
                        <input className={styles.form__input} type="text" placeholder="Имя" />
                    </label>
                    <label className={styles.form__label}>
                        <span className={styles.form__title}>E-mail:</span>
                        <input className={styles.form__input} type="email" placeholder="E-mail" />
                    </label>
                    <label className={styles.form__label}>
                        <span className={styles.form__title}>Телефон:</span>
                        <input className={styles.form__input} type="tel" placeholder="Телефон" />
                    </label>
                    <label className={styles.form__label}>
                        <span className={styles.form__title}>Адрес:</span>
                        <input className={styles.form__input} type="text" placeholder="Адрес" />
                    </label>
                    <label className={styles.form__label}>
                        <Checkbox name="Я согласен на обработку персональных данных" checked={isChecked} onChange={(value) => setIsChecked(value)} />
                    </label>
                    <div className={styles.form__btn}>
                        <Button variant="primary" type="submit">Оформить заказ</Button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default CheckoutPage;