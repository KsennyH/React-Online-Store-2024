import { JSX } from "react";
import styles from "./Post.module.scss";
import { Link } from "react-router-dom";
import { formatDate, Title } from "@/shared";

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
            <div className={styles.image}>
                <img className={styles.img} src={image} alt={title} />
            </div>
            <div className={styles.content}>
                <Link className={styles.contentTitle} to={`/blog/${post.id}`}>
                    <Title tag="h2">{title}</Title>
                </Link>
                <div className={styles.text}>
                    <p>{intro}</p>
                </div>
                <div className={styles.info}>
                    <time className={styles.date}>{formatDate(created_at)}</time>
                    <div className={styles.author}>Автор: {authors?.name}</div>
                </div>
            </div>
        </article>
    );
}
export default Post;