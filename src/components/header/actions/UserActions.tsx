import { Link } from "react-router-dom";
import { useAppSelector } from "@/redux/store";
import styles from './UserActions.module.scss';
import { CircleUser, ShoppingCart } from "lucide-react";
import { totalCount, totalPrice } from "@/redux/cartSlice";
import { formatPrice } from "@/lib/formatPrice";

function UserActions() {
    const countProducts = useAppSelector(state => totalCount(state));
    const priceProduct = useAppSelector(state => totalPrice(state));
    return (
        <> 
            <a className={styles.user} href="#" aria-label="Личный кабинет">
                <CircleUser color="#ffffff" />
                <span className={styles.user__label}>Личный кабинет</span>
            </a>
            <Link to={'/cart'} className={styles.user} aria-label="Корзина">
                <div className={styles.user__counter}>
                      <ShoppingCart color="#ffffff" />
                      {countProducts > 0 && (
                        <span className={styles.user__quantity}>{countProducts}</span>
                      )}
                </div>
                <span className={styles.user__label}>{ formatPrice(priceProduct) } руб.</span>
            </Link>
        </>
    );
}

export default UserActions;