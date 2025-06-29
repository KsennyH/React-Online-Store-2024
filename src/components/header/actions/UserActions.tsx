import { Link } from "react-router-dom";
import userLoginIcon from './user-login.svg';
import userCartIcon from './user-cart.svg';
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import styles from './UserActions.module.scss';

function UserActions() {
    const countProducts = useSelector((state: RootState) => state.cart.count);
    const priceProduct = useSelector((state: RootState) => state.cart.price);
    return (
        <> 
            <a className={styles.user} href="#" aria-label="Личный кабинет" data-user="user-login">
                <img className={styles.user__icon} src={userLoginIcon} alt="Logo"/>
                <span className={styles.user__label}>Личный кабинет</span>
            </a>
            <Link to={'/cart'} className={styles.user} aria-label="Корзина" data-user="user-cart">
                <div className={styles.user__counter}>
                      <img className={styles.user__icon} src={userCartIcon} alt="Logo"/>
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