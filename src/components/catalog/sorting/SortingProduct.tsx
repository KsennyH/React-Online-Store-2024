import React from "react";
import styles from './SortingProduct.module.scss';
import { CATEGORIES } from "@/constants/categories";

type SortingProps = {
    category: number;
    handleCategoryChange: (item: number) => void
}

const SortingProduct: React.FC<SortingProps> = ({category, handleCategoryChange}) => {    

    return(
        <nav className={styles.sorting}> 
            <ul className={styles.sorting__list}> 
                {CATEGORIES.map((elem, i) => (
                    <li key={i}> 
                        <button onClick={() => handleCategoryChange(i)} className={category === i ? `${styles.sorting__btn} ${styles.active}` : `${styles.sorting__btn}`}>
                            <span>{elem}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default SortingProduct;