import { LinkButton, Title } from '@/shared';
import styles from './CartEmpty.module.scss';
function EmptyCart() {
    return (
        <section className={styles.empty}> 
            <div className="container"> 
                <div className={styles.title}>
                    <Title tag='h2'>К сожалению, Ваша корзина пуста</Title>
                </div>
                <p className={styles.description}>Вы можете это исправить: выберите в каталоге интересующий товар и нажмите кнопку “В корзину”.</p>
                <div className={styles.catalog}>
                    <LinkButton href='/products' size='lg'>Перейти в каталог</LinkButton>
                </div> 
            </div>
        </section>
    );
}

export default EmptyCart;