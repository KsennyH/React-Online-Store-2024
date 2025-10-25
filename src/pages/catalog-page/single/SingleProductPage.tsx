import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from './SingleProductPage.module.scss';
import Button from "@/components/ui/Button";
import { ShoppingCart } from "lucide-react";
import Features from "@/components/features/Features";
import { PRODUCT_CARD_CONTENT } from "@/constants/texts";
import { formatPrice } from "@/lib/formatPrice";
import SliderProductCard from "@/components/slider-product-card/SliderProductCard";
import Loader from "@/components/ui/loader/Loader";
import { addProduct } from "@/redux/cartSlice";
import { useAppDispatch } from "@/redux/store";
import toast from "react-hot-toast";
import { CartItem } from "@/types/cartTypes";
import { useGetProductQuery } from "@/api/product/productApi";

export default function SingleProductPage () {

  const { id } = useParams();
  if(!id) return;
  
  const { data, isLoading } = useGetProductQuery(id);

  const [motoColor, setMotoColor] = useState(0);
  const dispatch = useAppDispatch();

  if(!data) return;

  const onClickAddProduct = () => {
    const item: CartItem = {
        id: data.id,
        img: data.img,
        title: data.title,
        price: data.price,
        variant: data.variants[motoColor],
        productCount: 1,
        totalPrice: data.price
      }
      dispatch(addProduct(item));
      toast.success('Товар добавлен в корзину', {
        position: 'top-right',
        duration: 2000
      })
    }
   
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.singlePage}>
      <div className={styles.singlePage__info}>
        <div className="container">
          <div className={styles.singlePage__wrapper}>
            <SliderProductCard images={data.variants[motoColor].images} />
            <div className={styles.singlePage__content}>
              <h2 className={styles.singlePage__title}>{data.title}</h2>
              <div className={styles.singlePage__article}>Артикул: {data.variants[motoColor].article}</div>
              <div className={styles.singlePage__colors}>
                  <div className={styles.singlePage__label}>Цвет:</div>
                  <ul className={styles.singlePage__colorList}>
                    {data.variants.map((el, i: number) => (
                        <li key={i}>
                            <button className={`${styles.singlePage__color} ${motoColor === i ? styles.active : ''}`} type="button" style={{ backgroundColor: el.color }} onClick={() => setMotoColor(i)}></button>
                        </li>
                        
                    ))}
                  </ul>
              </div>
              <span className={styles.singlePage__price}>{formatPrice(data.price)} руб.</span>
              <div className={styles.singlePage__buttons}>
                <Button type="button" onClick={ onClickAddProduct }>
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
