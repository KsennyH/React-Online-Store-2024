import { JSX, memo, useEffect, useRef, useState } from "react";
import { SortItem } from "@/redux/filterSlice";
import { SORT_OPTIONS } from "@/constants/sortOptions";
import styles from './SortBy.module.scss';

type SortProps = {
    sortCriterion: SortItem;
    handleSortChange: (item: SortItem) => void
}

const SortBy = memo(({sortCriterion, handleSortChange}: SortProps): JSX.Element => {

    const [openSort, setOpenSort] = useState(false);
    const sortRef = useRef(null);

    useEffect(() => {
        const closeSort = (event: MouseEvent) => {
            if(sortRef.current&&!event.composedPath().includes(sortRef.current)) {
                setOpenSort(false);
            }
        }

        document.body.addEventListener('click', closeSort);

        return () => {
            document.body.removeEventListener('click', closeSort);
        }
    }, []);
    
    const onClickCriterion = (obj: SortItem) => {
        handleSortChange(obj);
        setOpenSort(false);
    }

    return(
        <div className={styles.sort} ref={sortRef}>
            Сортировать по:
            <span onClick={() => setOpenSort(prev => !prev)} className={styles.sort__criterion}>{sortCriterion.name}</span>
            {openSort && (<ul className={styles.sort__list}>
                {SORT_OPTIONS.map((obj) => (
                    <li onClick={() => onClickCriterion(obj)} key={obj.name} className={sortCriterion.name === obj.name ? `${styles.sort__item} ${styles.active}` : `${styles.sort__item}`}>
                        {obj.name}
                    </li>
                ))}
            </ul>)}
        </div>
    );
})

export default SortBy;