import { JSX } from "react";
import styles from "./PostCategories.module.scss";
import { POST_CATEGORIES } from "@/constants/posts";
import Title from "@/components/ui/title/Title";

function PostCategories(): JSX.Element {
    return(
        <div className={styles.category}>
            <div className={styles.category__title}>
                <Title tag="h3">Категории</Title>
            </div>
            <ul className={styles.category__list}>
                {
                    POST_CATEGORIES.map((el, i:number) => (
                        <li key={i}>
                            <a className={styles.category__link} href="#">{el} (7)</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default PostCategories;