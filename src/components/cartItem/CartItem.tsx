import { productDecrement, productIncrement, removeProduct } from "@/redux/cartSlice";
import styles from './CartItem.module.scss';
import Counter from "./counter/Counter";
import { JSX } from "react";
import { useAppDispatch } from "@/app/store/store";
import toast from "react-hot-toast";
import { CartItem } from "@/types/cartTypes";
import { ChangeColorButton, CloseButton, formatPrice, Title } from "@/shared";

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
        toast.success('Товар удален', {
            position: 'top-right',
            duration: 2000
        });
    }

    return (
        <li className={styles.cartProduct}> 
            <div className={styles.img}> 
                <img src={variant.images[0]} alt={title}/>
            </div>
            <div className={styles.info}>
                <div className={styles.title}>
                    <Title tag="h3">{title}</Title>
                </div>
                <div className={styles.colors}>
                    <div>Цвет</div>
                    <ChangeColorButton color={variant.color} />
                </div>
            </div>
            <Counter onClickMinus={ decrement } onClickPlus={ increment } count={ productCount }  />
            <div className={styles.price}> 
                {formatPrice(totalPrice)} руб.
            </div>
            <div className={styles.delete}>
                <CloseButton onClick={onClickRemove} type="button" />
            </div>
        </li>
    )
}

export default Cart;