import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './SingleProductPage.module.scss';
import Button from "@/components/ui/Button";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { fetchSingleProduct } from "@/redux/singleProductSlice";
import { useSelector } from "react-redux";

export default function SingleProductPage () {
  
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const {product} = useAppSelector((state:RootState) => state.singleProduct);

  const [motoColor, setMotoColor] = useState(0);

  useEffect(() => {
    if(id) {
      dispatch(fetchSingleProduct(id))
    }
  }, [id, dispatch])

  if (!product) {
    return 'Загрузка...';
  }

  console.log(product);

  return (
    <div className={styles.singlePage}>
      <div className={styles.singlePage__info}>
        <div className="container">
          <div className={styles.singlePage__wrapper}>
            <div className={styles.singlePage__images}>
                <div className={styles.singlePage__image}>
                  <img src={product.img} alt={product.title} loading="lazy" />
                </div>
            </div>
            <div className={styles.singlePage__content}>
              <h2 className={styles.singlePage__title}>{product.title}</h2>
              <span className={styles.singlePage__article}>Артикул: {product.article}</span>
              <div className={styles.singlePage__color}>
                  <span className={styles.singlePage__label}>Цвет:</span>
                  <ul className={styles.singlePage__list}>
                    {product.colors.map((item, i) => (
                      <li key={item}>
                        <Button variant='outline' onClick={() => setMotoColor(i)} isActive={motoColor === i}>{item}</Button>
                      </li>
                    ))}
                  </ul>
              </div>
              <span className={styles.singlePage__price}>{product.price} руб.</span>
              <div className={styles.singlePage__buttons}>
                <Button>
                    <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.8094 4.69533C17.9683 4.88251 18.0278 5.10712 17.9881 5.36917L17.2335 9.44968C17.207 9.66187 17.1044 9.83651 16.9257 9.97378C16.747 10.111 16.5452 10.1797 16.3201 10.1797H5.31892L5.10048 11.3402H15.5854C15.8369 11.3402 16.0552 11.4244 16.2406 11.5929C16.426 11.7613 16.5186 11.9703 16.5186 12.2199C16.5186 12.4695 16.426 12.6785 16.2406 12.847C16.0552 13.0154 15.8369 13.0996 15.5854 13.0996H3.98845C3.71044 13.0996 3.47215 12.9936 3.27357 12.7815C3.08824 12.5693 3.01542 12.326 3.05514 12.0515L3.55158 9.50592L2.79699 2.35567L0.652361 1.71926C0.400831 1.64439 0.218802 1.50086 0.106275 1.28875C-0.00625149 1.07659 -0.0294188 0.852006 0.0367735 0.614914C0.116204 0.377822 0.271756 0.206242 0.503429 0.100175C0.735102 -0.00589263 0.970084 -0.0277301 1.20838 0.0346626L3.94874 0.858245C4.12084 0.908159 4.26315 1.00175 4.37568 1.13901C4.4882 1.27628 4.5577 1.43229 4.58418 1.60699L4.74304 3.02954L17.1739 4.33978C17.452 4.37713 17.6638 4.49567 17.8094 4.69533ZM5.39838 13.5863C5.79553 13.5863 6.13311 13.7173 6.41112 13.9794C6.68913 14.2414 6.82813 14.5597 6.82813 14.9341C6.82813 15.3083 6.68913 15.6297 6.41112 15.898C6.13311 16.1663 5.79553 16.3004 5.39838 16.3004C5.00122 16.3004 4.66364 16.1663 4.38564 15.898C4.10763 15.6298 3.96863 15.3084 3.96863 14.9341C3.96863 14.5597 4.10763 14.2414 4.38564 13.9794C4.66361 13.7173 5.00119 13.5863 5.39838 13.5863ZM13.8776 13.5863C14.2747 13.5863 14.6123 13.7173 14.8903 13.9794C15.1682 14.2414 15.3074 14.5597 15.3074 14.9341C15.3074 15.3083 15.1683 15.6297 14.8903 15.898C14.6123 16.1663 14.2747 16.3004 13.8776 16.3004C13.4804 16.3004 13.1428 16.1663 12.8649 15.898C12.5869 15.6298 12.4478 15.3084 12.4478 14.9341C12.4478 14.5597 12.5868 14.2414 12.8649 13.9794C13.1428 13.7173 13.4804 13.5863 13.8776 13.5863Z" fill="white"></path>
                  </svg>
                  <span>В корзину</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
