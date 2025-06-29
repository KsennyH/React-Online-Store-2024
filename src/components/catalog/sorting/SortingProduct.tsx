import React from "react";
import styles from './SortingProduct.module.scss';

type SortingProps = {
    sort: number;
    sortChange: (i:number) => void
}

const SortingProduct: React.FC<SortingProps> = ({sort, sortChange}) => {

    const sortingArray: string[] = ['Все', 'Мотоциклы', 'Мопеды', 'Кроссовые', 'Спортивные'];
    

    return(
        <nav className={styles.sorting}> 
            <ul className={styles.sorting__list}> 
                {sortingArray.map((elem, i) => (
                    <li key={i}> 
                        <button onClick={() => sortChange(i)} className={sort === i ? `${styles.sorting__btn} ${styles.active}` : `${styles.sorting__btn}`}>
                            <span>{elem}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default SortingProduct;