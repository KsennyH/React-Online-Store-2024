import Title from '../ui/title/Title';
import styles from './PopularProducts.module.scss';
import "keen-slider/keen-slider.min.css"
import PopularProductSlider from '../popular-products-slider/PopularProductsSlider';
function PopularProducts() {
    
    return(
         <section className={styles.popularProducts}>
            <div className={styles.popularProducts__title}>
                <Title tag='h2'>Популярные</Title>
            </div>
            <PopularProductSlider />
        </section>
    );
}
export default PopularProducts;