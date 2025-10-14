import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import styles from './UserActions.module.scss';
import { CircleUser, ShoppingCart } from "lucide-react";

function UserActions() {
    const countProducts = useSelector((state: RootState) => state.cart.count);
    const priceProduct = useSelector((state: RootState) => state.cart.price);
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
                <span className={styles.user__label}>{priceProduct} руб.</span>
            </Link>
        </>
    );
}

export default UserActions;