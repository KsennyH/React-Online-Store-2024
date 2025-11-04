import Title from '@/components/ui/title/Title';
import { MAIN_TEXT } from '@/constants/texts';
import parse from 'html-react-parser';
import styles from './HomePage.module.scss';
import NewsCardList from '@/components/news-card-list/NewsCardList';
import PopularProducts from '@/components/popular-products/PopularProducts';
function HomePage() {
    return (
        <div className={styles.home}>
            <div className="container">
                <div className={styles.moto}>
                    <Title tag='h1' className={styles.title}>Мото-Мир - интернет-магазин мототехники в Иванове</Title>
                    <div className={styles.text}>
                        {parse(MAIN_TEXT)}
                    </div>
                </div>
                <PopularProducts />
                <NewsCardList />
            </div> 
        </div>
    );
}

export default HomePage;