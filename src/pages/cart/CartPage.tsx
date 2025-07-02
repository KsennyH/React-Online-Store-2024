import { useDispatch, useSelector } from "react-redux";
import Cart from '@/components/cartItem/CartItem';
import CartEmpty from '@/components/cartItem/empty/CartEmpty';
import { clearCart } from '@/redux/cartSlice';
import { RootState } from '@/redux/store';
import styles from './CartPage.module.scss';

function CartPage() {
    const productsInCart = useSelector((state: RootState) => state.cart.products);  // массив товаров в корзине (изначально пустой)
    const count = useSelector((state: RootState) => state.cart.count);              // всего товаров в корзине 
    const priceTotal = useSelector((state: RootState) => state.cart.price);         // цена всех товаров в корзине
    const dispatch = useDispatch();

    const onClickClear = () => {
        if(window.confirm('Очистить корзину?')) {
            dispatch(clearCart());
        }
    }

    if (count === 0) {    // если товары в корзину не добавлены, выводим пустую корзину
        return (
            <>
                <CartEmpty />
            </>
        )
    }

    return(
        <>
            <section className={styles.cart}>
                <div className="container"> 
                    <div className={styles.cart__title}>
                        <h1 className="title">Корзина товаров</h1>
                    </div>
                    <div className={styles.cart__header}>
                        <div className={styles.cart__name}>Название</div>
                        <div className={styles.cart__count}>Количество</div>
                        <div className={styles.cart__price}>Цена</div>
                    </div>
                    <ul>
                        {productsInCart.map((obj) => (
                            <Cart key={obj.id} {...obj} />
                        ))}
                    </ul>
                    <div className={styles.cart__footer}>
                        <button onClick={onClickClear} className={styles.cart__clear}>Очистить корзину</button>
                        <div className={styles.cart__total}> 
                            <span>Всего:</span>
                            <span className={styles.cart__priceTotal}>{priceTotal}</span>
                            <span>руб.</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CartPage;