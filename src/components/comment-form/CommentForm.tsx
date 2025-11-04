import { JSX } from "react";
import styles from "./CommentForm.module.scss";
import Title from "../ui/title/Title";
import Button from "../ui/Button";
function CommentForm(): JSX.Element {
    return(
        <div className={styles.commentsForm}>
            <div className={styles.title}>
                <Title tag="h4">Добавить комментарий</Title>
            </div>
            <div className={styles.inputs}>
                <label className={styles.label} aria-label="Имя">
                    <input className={styles.input} type="text" placeholder="Имя:" />
                </label>
                <label className={styles.label} aria-label="Почта">
                    <input className={styles.input} type="email" placeholder="E-mail:" />
                </label>
            </div>
            <textarea className={styles.textarea}></textarea>
            <div className={styles.btn}><Button variant="primary">Отправить</Button></div>
        </div>
    );
}
export default CommentForm;