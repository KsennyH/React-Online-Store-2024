import { CartItem, productDecrement, productIncrement, removeProduct } from "@/redux/cartSlice";
import styles from './CartItem.module.scss';
import Counter from "./counter/Counter";
import Button from "../ui/Button";
import { JSX } from "react";
import { useAppDispatch } from "@/redux/store";
import Title from "../ui/title/Title";
import { formatPrice } from "@/lib/formatPrice";

const Cart = ({ cartProducts }: { cartProducts: CartItem }): JSX.Element => {

    const { id, title, price, productCount, variant, totalPrice } = cartProducts;
    const currentVariant = variant.article;
    
    const dispatch = useAppDispatch();

    const increment = () => {
        dispatch(productIncrement({
            id,
            price,
            currentVariant
        }));
    }

    const decrement = () => {
        dispatch(productDecrement({ id, currentVariant, price }));
    }

    const onClickRemove = () => {
        dispatch(removeProduct({ currentVariant }));
    }

    return (
        <div className={styles.cartProduct}> 
            <div className={styles.cartProduct__img}> 
                <img src={variant.images[0]} alt={title}/>
            </div>
            <div>
                <div className={styles.cartProduct__title}>
                    <Title tag="h3">{title}</Title>
                </div>
                <div className={styles.cartProduct__colors}>
                    <div>Цвет</div>
                    <div className={styles.cartProduct__color} style={{backgroundColor: variant.color}}></div>
                </div>
            </div>
            <Counter onClickMinus={ decrement } onClickPlus={ increment } count={ productCount }  />
            <div className={styles.cartProduct__price}> 
                {formatPrice(totalPrice)} руб.
            </div>
            <div className={styles.cartProduct__delete}>
                <Button variant="close" onClick={onClickRemove} type="button"><span> </span></Button>
            </div>
        </div>
    )
}

export default Cart;