import { Link } from 'react-router-dom';
import styles from './CartEmpty.module.scss';
import Button from '@/components/ui/Button';
function EmptyCart() {
    return (
        <section className={styles.empty}> 
            <div className="container"> 
                <div className={styles.empty__title}>
                    <h2 className='title'>К сожалению, Ваша корзина пуста</h2>
                </div>
                <p className={styles.empty__description}>Вы можете это исправить: выберите в каталоге интересующий товар и нажмите кнопку “В корзину”.</p>
                <Link to={'/'}>
                    <Button>Перейти в каталог</Button>
                </Link>
            </div>
        </section>
    );
}

export default EmptyCart;