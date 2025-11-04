import { Link } from 'react-router-dom';
import { Post } from '../post/Post';
import styles from './NewsCard.module.scss';
import Title from '../ui/title/Title';
import { formatDate } from '@/lib/formatDate';
function NewsCard({ article }: {article: Post}) {
    return(
        <article className={styles.newsCard}>
            <div className={styles.newsCard__img}>
                <img src={article.image} alt={article.title} />
            </div>
            <div className={styles.newsCard__information}>
                <Link to={`/blog/${article.id}`} className={styles.newsCard__titleLink}>
                    <div className={styles.newsCard__name}>
                        <Title tag='h3'>{article.title}</Title>
                    </div>
                </Link>
                <div className={styles.newsCard__preview}>
                    { article.intro }
                </div>
            </div>
            <div className={styles.newsCard__info}>
                <time className={styles.newsCard__date}>{ formatDate(article.created_at) }</time>
                <Link to={`/blog/${article.id}`} className={styles.newsCard__link}>Подробнее</Link>
            </div>
        </article>
    );
}

export default NewsCard;