import { useDispatch } from "react-redux";
import { addProduct, removeProduct, productDecrement, CartItem } from "@/redux/cartSlice";
import styles from './CartItem.module.scss';
import Counter from "./counter/Counter";
import Button from "../ui/Button";

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
        dispatch(productDecrement(id))
    }

    const onClickRemove = () => {
        dispatch(removeProduct(id));
    }

    return (
        <div className={styles.cartProduct}> 
            <div className={styles.cartProduct__img}> 
                <img src={img} alt={title}/>
            </div>
            <div>
                <div className={styles.cartProduct__title}>{title}</div>
                <div>{color}</div>
            </div>
            <Counter onClickMinus={onClickMinus} onClickPlus={onClickPlus} count={productCount}  />
            <div className={styles.cartProduct__price}> 
                {price * productCount}
            </div>
            <div className={styles.cartProduct__delete}>
                <Button variant="close" onClick={onClickRemove} type="button"><span> </span></Button>
            </div>
        </div>
    )
}

export default Cart;