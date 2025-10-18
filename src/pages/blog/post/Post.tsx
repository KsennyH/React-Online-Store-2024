import { JSX } from "react";
import styles from "./Post.module.scss";
import Title from "@/components/ui/title/Title";

export type Post = {
    id: string,
    title: string,
    image: string,
    intro: string,
    author: string,
    date: string,
    category: number,
    tags: string[]
}

function Post({ post }: { post: Post }): JSX.Element {

    const { title, image, intro, author, date } = post;

    return(
        <article className={styles.article}>
            <div className={styles.article__image}>
                <img className={styles.article__img} src={image} alt={title} />
            </div>
            <div className={styles.article__content}>
                <a className={styles.article__contentTitle} href="article.html">
                    <Title tag="h2">{title}</Title>
                </a>
                <div className={styles.article__text}>
                    <p>{intro}</p>
                </div>
                <div className={styles.article__info}>
                    <div className={styles.article__date}>{date}</div>
                    <div className={styles.article__author}>Автор: {author}</div>
                </div>
            </div>
        </article>
    );
}
export default Post;