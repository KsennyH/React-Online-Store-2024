import { JSX, memo, useState } from 'react';
import { addProduct } from '@/redux/cartSlice';
import { useAppDispatch } from '@/app/store/store';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.scss';
import toast from 'react-hot-toast';
import { Product } from '@/types/productTypes';
import { CartItem } from '@/types/cartTypes';
import { Button, ChangeColorButton, formatPrice } from '@/shared';

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
                <div className={styles.img}>
                    <img src={variants[motoColor].images[0]} alt={title}/>
                </div>
                <div className={styles.info}> 
                    <Link to={`/products/${id}`} key={id}>
                        <h3 className={styles.title}>{title}</h3>
                    </Link>
                    <div> 
                        <div className={styles.colors}>
                            <div className={styles.label}>Цвет:</div>
                            <ul className={styles.list}>
                                {variants.map((el, i: number) => (
                                    <li key={el.color}>
                                        <ChangeColorButton color={el.color} isActive={motoColor === i} size='sm' onClick={() => setMotoColor(i)} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.information}> 
                            <span>Артикул: {variants[motoColor].article}</span>
                            <span>{variants[motoColor].available ? `В наличии: ${variants[motoColor].stock}` : "Под заказ"}</span>
                        </div>
                    </div>
                </div>
            <div className={styles.price}>
                { formatPrice(price) } руб.
            </div>
            <Button onClick={onClickAddProduct}>
                <span>В корзину</span>
            </Button>
        </article>
    )
});

export default Card;