import { JSX } from "react";
import styles from './SortingProduct.module.scss';
import { CATEGORIES } from "@/constants/categories";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getCategory, setCategoryId } from "@/redux/filterSlice";

const SortingProduct = (): JSX.Element => {    

    const categoryId = useAppSelector((state) => getCategory(state));

    const dispatch = useAppDispatch();
    const onChangeCategory = (id:number) => dispatch(setCategoryId(id));
    

    return(
        <nav className={styles.sorting}> 
            <ul className={styles.sorting__list}> 
                {CATEGORIES.map((elem, i) => (
                    <li key={i}> 
                        <button onClick={() => onChangeCategory(i)} className={categoryId === i ? `${styles.sorting__btn} ${styles.active}` : `${styles.sorting__btn}`}>
                            <span>{elem}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default SortingProduct;