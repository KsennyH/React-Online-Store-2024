import { POSTS } from '@/constants/posts';
import Title from '../ui/title/Title';
import styles from './NewsCardList.module.scss';
import NewsCard from '../news-card/NewsCard';
import { Link } from 'react-router-dom';
function NewsCardList() {
    return(
        <section className={styles.motoNews}>
            <div className={styles.motoNews__title}>
                <Title tag='h2'>Новости и статьи</Title>
            </div>
            <ul className={styles.motoNews__list}>
                {
                    POSTS.map((el) => (
                        <li key={el.id}>
                            <NewsCard article={el} />
                        </li>
                    ))
                }   
            </ul>
            <div className={styles.motoNews__btn}>
                <Link to='/blog'>Все новости</Link>
            </div>
        </section>
    );
}

export default NewsCardList;