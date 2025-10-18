import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import styles from './SingleProductPage.module.scss';
import Button from "@/components/ui/Button";
import { ShoppingCart } from "lucide-react";
import Features from "@/components/features/Features";
import { PRODUCT_CARD_CONTENT } from "@/constants/texts";
import { Product } from "@/redux/productsSlice";
import { formatPrice } from "@/lib/formatPrice";
import SliderProductCard from "@/components/slider-product-card/SliderProductCard";
import Loader from "@/components/ui/loader/Loader";

export default function SingleProductPage () {
  
  const { product } = useLoaderData() as { product: Product };
  const [motoColor, setMotoColor] = useState(0);
   
  if (!product) {
    return <Loader />;
  }

  return (
    <div className={styles.singlePage}>
      <div className={styles.singlePage__info}>
        <div className="container">
          <div className={styles.singlePage__wrapper}>
            <SliderProductCard images={product.variants[motoColor].images} />
            <div className={styles.singlePage__content}>
              <h2 className={styles.singlePage__title}>{product.title}</h2>
              <div className={styles.singlePage__article}>Артикул: {product.article}</div>
              <div className={styles.singlePage__colors}>
                  <div className={styles.singlePage__label}>Цвет:</div>
                  <ul className={styles.singlePage__colorList}>
                    {product.variants.map((el, i: number) => (
                        <li key={i}>
                            <button className={`${styles.singlePage__color} ${motoColor === i ? styles.active : ''}`} type="button" style={{ backgroundColor: el.color }} onClick={() => setMotoColor(i)}></button>
                        </li>
                        
                    ))}
                  </ul>
              </div>
              <span className={styles.singlePage__price}>{formatPrice(product.price)} руб.</span>
              <div className={styles.singlePage__buttons}>
                <Button>
                    <ShoppingCart color="#ffffff" />
                    <span>В корзину</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
        <div className={styles.singlePage__text}>
            <div className="container">
                {PRODUCT_CARD_CONTENT}
            </div>
        </div>
    </div>    
  );
}
