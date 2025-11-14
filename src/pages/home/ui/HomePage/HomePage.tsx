import parse from 'html-react-parser';
import styles from './HomePage.module.scss';
import { Title } from '@/shared/ui';
import { JSX } from 'react';
import { MAIN_TEXT } from '@/shared/constants';
import { PopularProductsList } from '@/widgets/product';
import { NewsCardList } from '@/widgets/article';

export function HomePage(): JSX.Element {
    return (
        <div className={styles.home}>
            <div className="container">
                <div className={styles.moto}>
                    <Title tag='h1' className={styles.title}>Мото-Мир - интернет-магазин мототехники в Иванове</Title>
                    <div className={styles.text}>
                        {parse(MAIN_TEXT)}
                    </div>
                </div>
                <PopularProductsList />
                <NewsCardList />
            </div> 
        </div>
    );
}