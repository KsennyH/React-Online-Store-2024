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
            <div className={styles.image}>
                <img className={styles.img} src={image} alt={title}/>
            </div>
            <div className={styles.content}>
                <div className={styles.contentTitle}>
                    <Title tag="h2">{title}</Title>
                </div>
                <div className={styles.intro}><p>{intro}</p>
                </div>
                <div className={styles.text}>
                    {parse(content)}
                </div>
                <div className={styles.info}>
                    <time className={styles.date}>{formatDate(created_at)}</time>
                    <div className={styles.author}>Автор: {authors?.name}</div>
                </div>
            </div>
        </article>
    );
}

export default Article;