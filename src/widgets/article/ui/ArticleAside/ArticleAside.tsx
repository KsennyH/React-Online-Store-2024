import { JSX } from "react";
import styles from './ArticleAside.module.scss';
import { PostCategories } from "@/entities/article-category";
import { Tags } from "@/entities/tag";

export function ArticleAside(): JSX.Element {
    return(
        <aside className={styles.aside}>
            <PostCategories />
            <Tags />
        </aside>
    );
}