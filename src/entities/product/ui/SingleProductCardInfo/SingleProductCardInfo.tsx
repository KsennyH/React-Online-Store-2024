import { JSX } from "react";
import styles from './SingleProductCardInfo.module.scss';
import { ProductCardProps } from "@/entities/product/model";
import { ChangeColorButton } from "@/shared/ui";
import { formatPrice } from "@/shared/lib";

export function SingleProductCardInfo({ slot, product, selectedVariant, onSelectedVariant }: ProductCardProps): JSX.Element {

    const { title, price, variants } = product;

    return(
        <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.article}>Артикул: {variants[selectedVariant].article}</div>
            <div className={styles.colors}>
                <div className={styles.label}>Цвет:</div>
                <ul className={styles.colorList}>
                {variants.map((el, i: number) => (
                    <li key={el.color}>
                        <ChangeColorButton color={el.color} isActive={selectedVariant === i} onClick={() => onSelectedVariant(i)} />
                    </li>   
                ))}
                </ul>
            </div>
            <span className={styles.price}>{formatPrice(price)} руб.</span>
            <div className={styles.buttons}>
            { slot ? slot : null }
            </div>
        </div>
    );
}