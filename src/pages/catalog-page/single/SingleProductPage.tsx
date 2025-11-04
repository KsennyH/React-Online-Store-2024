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

  const { data, isLoading } = useGetProductQuery(String(id));

  const [motoColor, setMotoColor] = useState(0);
  const dispatch = useAppDispatch();

  if (isLoading) {
    return <Loader />;
  }

  if(!data) return <div style={{textAlign: "center", padding: "40px"}}>Товар не найден</div>;

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

  return (
    <div className={styles.singlePage}>
      <div className={styles.info}>
        <div className="container">
          <div className={styles.wrapper}>
            <SliderProductCard images={data.variants[motoColor].images} />
            <div className={styles.content}>
              <h2 className={styles.title}>{data.title}</h2>
              <div className={styles.article}>Артикул: {data.variants[motoColor].article}</div>
              <div className={styles.colors}>
                  <div className={styles.label}>Цвет:</div>
                  <ul className={styles.colorList}>
                    {data.variants.map((el, i: number) => (
                        <li key={i}>
                            <button className={`${styles.color} ${motoColor === i ? styles.active : ''}`} type="button" style={{ backgroundColor: el.color }} onClick={() => setMotoColor(i)}></button>
                        </li>
                        
                    ))}
                  </ul>
              </div>
              <span className={styles.price}>{formatPrice(data.price)} руб.</span>
              <div className={styles.buttons}>
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
        <div className={styles.text}>
            <div className="container">
                {PRODUCT_CARD_CONTENT}
            </div>
        </div>
    </div>    
  );
}
