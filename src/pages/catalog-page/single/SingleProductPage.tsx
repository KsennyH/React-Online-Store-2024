import { MutableRefObject, RefObject, useState } from "react";
import { useLoaderData } from "react-router-dom";
import styles from './SingleProductPage.module.scss';
import Button from "@/components/ui/Button";
import { CirclePlus, ShoppingCart } from "lucide-react";
import Features from "@/components/features/Features";
import { PRODUCT_CARD_CONTENT } from "@/constants/texts";
import { Product } from "@/redux/productsSlice";
import { formatPrice } from "@/lib/formatPrice";
import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { KeenSliderInstance, KeenSliderPlugin, useKeenSlider } from 'keen-slider/react'
import SliderProductCard from "@/components/slider-product-card/SliderProductCard";

// export default () => {
//   const [sliderRef, instanceRef] = useKeenSlider(
//     {
//       slideChanged() {
//         console.log('slide changed')
//       },
//     },
//     [
//       // add plugins here
//     ]
//   )

//   return (
//     <div ref={sliderRef} className="keen-slider">
//       <div className="keen-slider__slide">1</div>
//       <div className="keen-slider__slide">2</div>
//       <div className="keen-slider__slide">3</div>
//     </div>
//   )
// }

export default function SingleProductPage () {
  
  const { product } = useLoaderData() as { product: Product };
  console.log(product);

  const [motoColor, setMotoColor] = useState(0);
  console.log(motoColor);
   
  if (!product) {
    return 'Загрузка...';
  }


  return (
    <>    
    
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
    {/* <div className="card-block">
                <div className="card-block__info">
                    <div className="container">
                        <div className="card-block__wrapper">
                            <div className="card-block__images">
                                <div className="card-block__image">
                                    <img className="card-block__img js-img" id="white" src="images/content/wels-white.png" alt="Мотоцикл Wels Impulse 250cc белый" />
                                </div>
                                <div className="card-block__image">
                                    <img className="card-block__img js-img" id="red" src="images/content/wels-red.png" alt="Мотоцикл Wels Impulse 250cc красный" />
                                </div>
                                <div className="card-block__image">
                                    <img className="card-block__img js-img" id="black" src="images/content/wels-black.png" alt="Мотоцикл Wels Impulse 250cc черный" />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div> */}
    </>
    
  );
}
