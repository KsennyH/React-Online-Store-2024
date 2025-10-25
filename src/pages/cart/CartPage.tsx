import Cart from '@/components/cartItem/CartItem';
import CartEmpty from '@/components/cartItem/empty/CartEmpty';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import styles from './CartPage.module.scss';
import { cartProducts, clearCart, totalPrice } from "@/redux/cartSlice";
import Title from "@/components/ui/title/Title";
import { formatPrice } from '@/lib/formatPrice';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import Button from '@/components/ui/Button';

function CartPage() {
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
            <><CartEmpty /></>
        )
    }

    return(
        <>
            <section className={styles.cart}>
                <div className="container"> 
                    <div className={styles.cart__title}>
                        <Title tag="h1">Корзина товаров</Title>
                    </div>
                    <ul>
                        {productsInCart.map((obj) => (
                            <Cart key={obj.variant.article} cartProducts={obj} />
                        ))}
                    </ul>
                    <div className={styles.cart__footer}>
                        <Button variant='secondary' onClick={onClickClear}>Очистить корзину</Button>
                        <div className={styles.cart__total}> 
                            <div>Всего: <strong>{ formatPrice(priceTotal) } руб.</strong></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CartPage;