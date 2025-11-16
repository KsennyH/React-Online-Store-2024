import { JSX, memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.scss';
import { ChangeColorButton } from '@/shared/ui';
import { formatPrice } from '@/shared/lib';
import { ProductCardProps } from '@/entities/product/model';

export const ProductCard = memo(( { product, slot, selectedVariant, onSelectedVariant }: ProductCardProps ): JSX.Element => {

    const { id, title, price, variants } = product;

    const variant = variants[selectedVariant];

    return(
        <article className={styles.productCard}>
                <div className={styles.img}>
                    <img src={variant.images[0]} alt={title}/>
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
                                        <ChangeColorButton color={el.color} isActive={selectedVariant === i} size='sm' onClick={() => onSelectedVariant(i)} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.information}> 
                            <span>Артикул: {variant.article}</span>
                            <span>{variant.available ? `В наличии: ${variant.stock}` : "Под заказ"}</span>
                        </div>
                    </div>
                </div>
            <div className={styles.price}>
                { formatPrice(price) } руб.
            </div>
            { slot ? slot : null }
        </article>
    )
});
