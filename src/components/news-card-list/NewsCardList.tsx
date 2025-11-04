import Title from '../ui/title/Title';
import styles from './NewsCardList.module.scss';
import NewsCard from '../news-card/NewsCard';
import { Link } from 'react-router-dom';
import { useGetLatestNewsQuery } from '@/api/news/newsApi';
function NewsCardList() {
    const { data, error } = useGetLatestNewsQuery();
    
    if(error) { return <div>Ошибка</div> }

    return(
        <section className={styles.motoNews}>
            <div className={styles.motoNews__title}>
                <Title tag='h2'>Новости и статьи</Title>
            </div>
            <ul className={styles.motoNews__list}>
                {
                    data && data.length > 0 && data.map((el) => (
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