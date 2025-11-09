import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from './ProductPage.module.scss';
import { ShoppingCart } from "lucide-react";
import Features from "@/components/features/Features";
import { PRODUCT_CARD_CONTENT } from "@/constants/texts";
import SliderProductCard from "@/components/slider-product-card/SliderProductCard";
import { addProduct } from "@/redux/cartSlice";
import { useAppDispatch } from "@/app/store/store";
import toast from "react-hot-toast";
import { CartItem } from "@/types/cartTypes";
import { useGetProductQuery } from "@/api/product/productApi";
import { Button, ChangeColorButton, ErrorMessage, formatPrice, Loader } from "@/shared";

export function ProductPage () {

  const { id } = useParams();

  const { data, isLoading, error } = useGetProductQuery(String(id));

  const [motoColor, setMotoColor] = useState(0);
  const dispatch = useAppDispatch();

  if(error) { 
    console.error('Ошибка при загрузке товара:', error);
    return <ErrorMessage text="Не удалось загрузить товар. Попробуйте позже." />        
  }

  if (isLoading) {
    return <Loader />;
  }

  if(!data) return <ErrorMessage text="Товар не найден" />

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
                        <li key={el.color}>
                            <ChangeColorButton color={el.color} isActive={motoColor === i} onClick={() => setMotoColor(i)} />
                        </li>   
                    ))}
                  </ul>
              </div>
              <span className={styles.price}>{formatPrice(data.price)} руб.</span>
              <div className={styles.buttons}>
                <Button size="lg" type="button" onClick={ onClickAddProduct }>
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
