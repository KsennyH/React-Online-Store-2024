import { JSX } from "react";
import parse from 'html-react-parser';
import styles from "./Article.module.scss";
import Title from "../ui/title/Title";
import { SinglePost } from "@/pages/blog/single/SingleArticle";
import { formatDate } from "@/lib/formatDate";

function Article({ article }: { article: SinglePost }): JSX.Element {
    const { image, title, intro, content, created_at, authors } = article;
    return (
        <article className={styles.article}>
            <div className={styles.article__image}>
                <img className={styles.article__img} src={image} alt={title}/>
            </div>
            <div className={styles.article__content}>
                <div className={styles.article__contentTitle}>
                    <Title tag="h2">{title}</Title>
                </div>
                <div className={styles.article__intro}><p>{intro}</p>
                </div>
                <div className={styles.article__text}>
                    {parse(content)}
                </div>
                <div className={styles.article__info}>
                    <time className={styles.article__date}>{formatDate(created_at)}</time>
                    <div className={styles.article__author}>Автор: {authors?.name}</div>
                </div>
            </div>
        </article>
    );
}

export default Article;