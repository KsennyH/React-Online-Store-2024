import styles from './PopularProductsList.module.scss';
import "keen-slider/keen-slider.min.css"
import { Title } from '@/shared/ui';
import { JSX } from 'react';
import { PopularProductSlider } from '../PopularProductsSlider/PopularProductsSlider';

export function PopularProductsList(): JSX.Element {
    
    return(
         <section className={styles.popularProducts}>
            <div className={styles.title}>
                <Title tag='h2'>Популярные</Title>
            </div>
            <PopularProductSlider />
        </section>
    );
}