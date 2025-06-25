import { Link } from "react-router-dom";
import userLoginIcon from './user-login.svg';
import userCartIcon from './user-cart.svg';
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

function Actions() {
    const countProducts = useSelector((state: RootState) => state.cart.count);
    const priceProduct = useSelector((state: RootState) => state.cart.price);
    return (
        <div className="users-wrapper"> 
            <a className="user js-login" href="#" aria-label="Личный кабинет" data-user="user-login">
                <img className="user__icon" src={userLoginIcon} alt="Logo"/>
                <span className="user__label">Личный кабинет</span>
            </a>
            <Link to={'/cart'} className="user" aria-label="Корзина" data-user="user-cart">
                <div className="user__counter">
                      <img className="user__icon" src={userCartIcon} alt="Logo"/>
                      {countProducts > 0 && (
                        <span className="user__quantity">{countProducts}</span>
                      )}
                </div>
                <span className="user__label">{priceProduct} руб.</span>
            </Link>
        </div>
    );
}

export default Actions;