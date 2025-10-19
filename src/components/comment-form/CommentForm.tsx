import { JSX } from "react";
import styles from "./CommentForm.module.scss";
import Title from "../ui/title/Title";
import Button from "../ui/Button";
function CommentForm(): JSX.Element {
    return(
        <div className={styles.commentsForm}>
            <div className={styles.commentsForm__title}>
                <Title tag="h4">Добавить комментарий</Title>
            </div>
            <div className={styles.commentsForm__inputs}>
                <label className={styles.commentsForm__label} aria-label="Имя">
                    <input className={styles.commentsForm__input} type="text" placeholder="Имя:" />
                </label>
                <label className={styles.commentsForm__label} aria-label="Почта">
                    <input className={styles.commentsForm__input} type="email" placeholder="E-mail:" />
                </label>
            </div>
            <textarea className={styles.commentsForm__textarea}></textarea>
            <div className={styles.commentsForm__btn}><Button variant="primary">Отправить</Button></div>
        </div>
    );
}
export default CommentForm;