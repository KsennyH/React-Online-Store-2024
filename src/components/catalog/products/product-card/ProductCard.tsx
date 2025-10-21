import { JSX, memo, useState } from 'react';
import { addProduct, CartItem } from '@/redux/cartSlice';
import { useAppDispatch } from '@/redux/store';
import { Product } from '@/redux/productsSlice';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.scss';
import Button from '@/components/ui/Button';
import { formatPrice } from '@/lib/formatPrice';
import toast from 'react-hot-toast';

const Card = memo(( { singleProduct }: { singleProduct: Product } ): JSX.Element => {
    const { id, img, title, price, variants } = singleProduct;

    const [motoColor, setMotoColor] = useState(0);

    const dispatch = useAppDispatch();
    
    const onClickAddProduct = () => {
        const item: CartItem = {
            id,
            img,
            title,
            price,
            variant: variants[motoColor],
            productCount: 1,
            totalPrice: price
        }
        dispatch(addProduct(item));
        toast.success('Товар добавлен в корзину', {
            position: 'top-right',
            duration: 2000
        });
    }

    return(
        <article className={styles.productCard}>
                <div className={styles.productCard__img}>
                    <img src={variants[motoColor].images[0]} alt={title}/>
                </div>
                <div className={styles.productCard__info}> 
                    <Link to={`/products/${id}`} key={id}>
                        <h3 className={styles.productCard__title}>{title}</h3>
                    </Link>
                    <div> 
                        <div className={styles.colors}>
                            <div className={styles.colors__label}>Цвет:</div>
                            <ul className={styles.colors__list}>
                                {variants.map((el, i: number) => (
                                    <li key={i}>
                                        <button type="button" onClick={() => setMotoColor(i)} className={`${styles.colors__color} ${motoColor === i ? styles.active : ''}`} style={{ backgroundColor: el.color }}></button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.productCard__information}> 
                            <span className={styles.productCard__article}>Артикул: {variants[motoColor].article}</span>
                            <span className={styles.productCard__text}>{variants[motoColor].available ? `В наличии: ${variants[motoColor].stock}` : "Под заказ"}</span>
                        </div>
                    </div>
                </div>
            <div className={styles.productCard__price}>
                { formatPrice(price) } руб.
            </div>
            <Button onClick={onClickAddProduct}>
                <span>В корзину</span>
            </Button>
        </article>
    )
});

export default Card;