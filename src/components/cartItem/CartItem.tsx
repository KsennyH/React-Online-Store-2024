import { productDecrement, productIncrement, removeProduct } from "@/redux/cartSlice";
import styles from './CartItem.module.scss';
import Counter from "./counter/Counter";
import Button from "../ui/Button";
import { JSX } from "react";
import { useAppDispatch } from "@/app/store/store";
import Title from "../ui/title/Title";
import { formatPrice } from "@/lib/formatPrice";
import toast from "react-hot-toast";
import { CartItem } from "@/types/cartTypes";

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
                    <div className={styles.color} style={{backgroundColor: variant.color}}></div>
                </div>
            </div>
            <Counter onClickMinus={ decrement } onClickPlus={ increment } count={ productCount }  />
            <div className={styles.price}> 
                {formatPrice(totalPrice)} руб.
            </div>
            <div className={styles.delete}>
                <Button variant="close" onClick={onClickRemove} type="button"><span> </span></Button>
            </div>
        </li>
    )
}

export default Cart;