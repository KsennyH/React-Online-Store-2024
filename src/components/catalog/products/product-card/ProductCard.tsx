import React, { useState } from 'react';
import { addProduct, CartItem } from '@/redux/cartSlice';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '@/redux/store';
import { Product } from '@/redux/productsSlice';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.scss';
import Button from '@/components/ui/Button';
import Count from '../count/Count';

const Card: React.FC<Product> = ({id, img, title, article, price, colors}) => {

    const [motoColor, setMotoColor] = useState(0);
    const color = colors[motoColor];
    const itemInCart = useSelector((state:RootState) => state.cart.products.find((obj) => obj.id === id));
    const dispatch = useDispatch();

    const addedCount:number = itemInCart ? itemInCart.productCount : 0;
    
    const onClickAddProduct = () => {
        const item: CartItem = {
            id,
            img,
            title,
            price,
            color,
            productCount: 0
        }
        dispatch(addProduct(item));
    }

    return(
        <article className={styles.productCard}>
                {addedCount > 0 && (
                    <Count count={addedCount} />
                )}
                <div className={styles.productCard__img}>
                    <img src={img} alt={title}/>
                </div>
                <div className={styles.productCard__info}> 
                    <Link to={`/products/${id}`} key={id}>
                        <h3 className={styles.productCard__title}>{title}</h3>
                    </Link>
                    <div> 
                        <ul className={styles.productCard__colors}>
                            {colors.map((item, i) => (
                                <li key={i}>
                                    <Button variant='outline' onClick={() => setMotoColor(i)} isActive={motoColor === i}>{item}</Button>
                                </li>
                            ))}
                        </ul>
                        <div className={styles.productCard__information}> 
                            <span className={styles.productCard__article}>Артикул: {article}</span>
                            <span className={styles.productCard__text}>В наличии</span>
                        </div>
                    </div>
                </div>
            <div className={styles.productCard__price}>
                {price} руб.
            </div>
            <Button onClick={onClickAddProduct}>
                <span>В корзину</span>
            </Button>
        </article>
    );
}

export default Card;