import { JSX } from "react";
import parse from 'html-react-parser';
import styles from "./Article.module.scss";
import { Post } from "../post/Post";
import Title from "../ui/title/Title";

function Article({ article }: { article: Post }): JSX.Element {
    const { image, title, intro, content, date, author } = article;
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
                    <time className={styles.article__date}>{date}</time>
                    <div className={styles.article__author}>Автор: {author}</div>
                </div>
            </div>
        </article>
    );
}

export default Article;