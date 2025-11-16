import { Link } from 'react-router-dom';
import styles from './NewsCardMain.module.scss';
import { JSX } from 'react';
import { PostInterface } from '@/entities/article/model';
import { Title } from '@/shared/ui';
import { formatDate } from '@/shared/lib';

export function NewsCardMain({ id, image, title, intro, created_at }: PostInterface): JSX.Element {
    return(
        <article className={styles.newsCard}>
            <div className={styles.img}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.information}>
                <Link to={`/blog/${id}`} className={styles.titleLink}>
                    <Title tag='h3'>{title}</Title>
                </Link>
                <div className={styles.preview}>
                    { intro }
                </div>
            </div>
            <div className={styles.info}>
                <time className={styles.date}>{ formatDate(created_at) }</time>
                <Link to={`/blog/${id}`} className={styles.link}>Подробнее</Link>
            </div>
        </article>
    );
}