import { useDispatch } from "react-redux";
import { addProduct, removeProduct, productDecrement, CartItem } from "../../../redux/cartSlice";

const Cart:React.FC<CartItem> = ({ id, title, img, color, price, productCount }) => {

    const dispatch = useDispatch();

    const onClickPlus = () => {
        dispatch(addProduct({
            id,
            title,
            img,
            color,
            price,
            productCount
        }));
    }

    const onClickMinus = () => {
        dispatch(productDecrement({
            id,
            title,
            img,
            color,
            price,
            productCount
        }))
    }

    const onClickRemove = () => {
        dispatch(removeProduct({
            id,
            title,
            img,
            color,
            price,
            productCount
        }));
    }

    return (
        <div className="cart-product"> 
            <div className="cart-product__img"> <img className="js-img-cart" src={img} alt={title}/></div>
            <div className="cart-product__info">
                <div className="cart-product__title">{title}</div>
                <div className="cart-product__color">{color}</div>
            </div>
            <div className="cart-product__counter">
                <div className="counter"> 
                    <button onClick={onClickMinus} className="counter__btn counter__btn--down" type="button" data-button="down">-</button>
                    <input className="counter__input" type="number" data-counter="data-counter" value={productCount}/>
                    <button onClick={onClickPlus} className="counter__btn counter__btn--up" type="button" data-button="up">+</button>
                </div>
            </div>
            <div className="cart-product__price"> 
                {price * productCount}
            </div>
            <button onClick={onClickRemove} className="cart-product__deleate btn-close" type="button" data-deleate="deleate"><span> </span></button>
        </div>
    )
}

export default Cart;