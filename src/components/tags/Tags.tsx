import { JSX } from "react";
import styles from "./Tags.module.scss";
import { POST_TAGS } from "@/constants/posts";
import Title from "@/components/ui/title/Title";

function Tags(): JSX.Element {
    return(
        <div className={styles.tags}>
            <div className={styles.tags__title}>
                <Title tag="h3">Теги</Title>
            </div>
            <ul className={styles.tags__list}>
                {

                    POST_TAGS.map((el, i:number) => (
                        <li key={i} className={styles.tags__item}>
                            <a className={styles.tags__link} href="#">{el}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
export default Tags;