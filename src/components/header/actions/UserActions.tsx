import { Link } from "react-router-dom";
import { useAppSelector } from "@/app/store/store";
import styles from './UserActions.module.scss';
import { CircleUser, ShoppingCart } from "lucide-react";
import { totalCount, totalPrice } from "@/redux/cartSlice";
import { formatPrice } from "@/shared";

function UserActions() {
    const countProducts = useAppSelector(state => totalCount(state));
    const priceProduct = useAppSelector(state => totalPrice(state));
    return (
        <> 
            <a className={styles.user} href="#" aria-label="Личный кабинет">
                <CircleUser color="#ffffff" />
                <span className={styles.label}>Личный кабинет</span>
            </a>
            <Link to={'/cart'} className={styles.user} aria-label="Корзина">
                <div className={styles.counter}>
                      <ShoppingCart color="#ffffff" />
                      {countProducts > 0 && (
                        <span className={styles.quantity}>{countProducts}</span>
                      )}
                </div>
                <span className={styles.label}>{ formatPrice(priceProduct) } руб.</span>
            </Link>
        </>
    );
}

export default UserActions;