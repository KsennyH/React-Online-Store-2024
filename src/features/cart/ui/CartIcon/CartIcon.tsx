import { ShoppingCart } from "lucide-react";
import { JSX } from "react";
import { Link } from "react-router-dom";
import styles from './CartIcon.module.scss';
import { formatPrice, useAppSelector } from "@/shared/lib";
import { totalCount, totalPrice } from "@/features/cart";

export function CartIcon(): JSX.Element {

    const countProducts = useAppSelector(state => totalCount(state));
    const priceProduct = useAppSelector(state => totalPrice(state));

    return(
        <Link to={'/cart'} className={styles.cart} aria-label="Корзина">
            <div className={styles.counter}>
                    <ShoppingCart color="#ffffff" />
                    {countProducts > 0 && (
                    <span className={styles.quantity}>{countProducts}</span>
                    )}
            </div>
            <span className={styles.label}>{ countProducts > 0 ? `${formatPrice(priceProduct)} руб.` : 'Корзина' }</span>
        </Link>
    );
}