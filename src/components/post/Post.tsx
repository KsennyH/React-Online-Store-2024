import { JSX } from "react";
import styles from "./Post.module.scss";
import Title from "@/components/ui/title/Title";
import { Link } from "react-router-dom";
import { formatDate } from "@/lib/formatDate";

export type Author = {
    name: string,
    avatar?: string
}

export interface Post {
    id: number,
    title: string,
    image: string,
    intro: string,
    authors: Author,
    created_at: string,
}

function Post({ post }: { post: Post }): JSX.Element {

    const { title, image, intro, authors, created_at } = post;

    return(
        <article className={styles.article}>
            <div className={styles.article__image}>
                <img className={styles.article__img} src={image} alt={title} />
            </div>
            <div className={styles.article__content}>
                <Link className={styles.article__contentTitle} to={`/blog/${post.id}`}>
                    <Title tag="h2">{title}</Title>
                </Link>
                <div className={styles.article__text}>
                    <p>{intro}</p>
                </div>
                <div className={styles.article__info}>
                    <time className={styles.article__date}>{formatDate(created_at)}</time>
                    <div className={styles.article__author}>Автор: {authors?.name}</div>
                </div>
            </div>
        </article>
    );
}
export default Post;