import { JSX } from "react";
import styles from "./Post.module.scss";
import { Link } from "react-router-dom";
import { PostInterface } from "@/entities/article/model";
import { Title } from "@/shared/ui";
import { formatDate } from "@/shared/lib";

export function Post({ id, title, image, intro, authors, created_at }:  PostInterface ): JSX.Element {

    return(
        <article className={styles.article}>
            <div className={styles.image}>
                <img className={styles.img} src={image} alt={title} />
            </div>
            <div className={styles.content}>
                <Link className={styles.contentTitle} to={`/blog/${id}`}>
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