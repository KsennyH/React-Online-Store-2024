import { Link } from 'react-router-dom';
import { Post } from '../post/Post';
import styles from './NewsCard.module.scss';
import Title from '../ui/title/Title';
import { formatDate } from '@/lib/formatDate';
function NewsCard({ article }: {article: Post}) {
    return(
        <article className={styles.newsCard}>
            <div className={styles.img}>
                <img src={article.image} alt={article.title} />
            </div>
            <div className={styles.information}>
                <Link to={`/blog/${article.id}`} className={styles.titleLink}>
                    <Title tag='h3'>{article.title}</Title>
                </Link>
                <div className={styles.preview}>
                    { article.intro }
                </div>
            </div>
            <div className={styles.info}>
                <time className={styles.date}>{ formatDate(article.created_at) }</time>
                <Link to={`/blog/${article.id}`} className={styles.link}>Подробнее</Link>
            </div>
        </article>
    );
}

export default NewsCard;