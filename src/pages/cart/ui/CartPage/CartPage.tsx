import Cart from '@/components/cartItem/CartItem';
import CartEmpty from '@/components/cartItem/empty/CartEmpty';
import { useAppDispatch, useAppSelector } from '@/app/store/store';
import styles from './CartPage.module.scss';
import { cartProducts, clearCart, totalPrice } from "@/redux/cartSlice";
import toast from 'react-hot-toast';
import { Button, formatPrice, LinkButton, Title } from '@/shared';

export function CartPage() {
    const productsInCart = useAppSelector(state => cartProducts(state));
    const priceTotal = useAppSelector(state => totalPrice(state));
    const dispatch = useAppDispatch();

    const onClickClear = () => {
        if(window.confirm('Очистить корзину?')) {
            dispatch(clearCart());
            toast.success('Корзина очищена', {
                position: 'top-right',
                duration: 2000
            });
        }
    }

    if (productsInCart.length === 0) {   
        return (
            <CartEmpty />
        )
    }

    return(
        <>
            <section className={styles.cart}>
                <div className="container"> 
                    <div className={styles.title}>
                        <Title tag="h1">Корзина товаров</Title>
                    </div>
                    <ul>
                        {productsInCart.map((obj) => (
                            <Cart key={obj.variant.article} cartProducts={obj} />
                        ))}
                    </ul>
                    <div className={styles.footer}>
                        <div className={styles.clear}>
                            <Button variant='secondary' onClick={onClickClear}>Очистить корзину</Button>
                        </div>
                        <div className={styles.total}> 
                            <div>Всего: <strong>{ formatPrice(priceTotal) } руб.</strong></div>
                        </div>
                    </div>
                    <div className={styles.checkout}>
                        <LinkButton href='/checkout'>Оформить заказ</LinkButton>
                    </div>
                </div>
            </section>
        </>
    );
}