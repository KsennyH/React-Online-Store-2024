import { JSX, useEffect, useRef, useState } from "react";
import { SORT_OPTIONS } from "@/constants/sortOptions";
import styles from './SortBy.module.scss';
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { SortItem } from "@/types/filterTypes";
import { getSort, setSortType } from "@/redux/filterSlice";

const SortBy = (): JSX.Element => {

    const sortTypeValue = useAppSelector((state) => getSort(state));
    const dispatch = useAppDispatch();
    const onChangeSort = (item: SortItem) => dispatch(setSortType(item));

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
        onChangeSort(obj);
        setOpenSort(false);
    }

    return(
        <div className={styles.sort} ref={sortRef}>
            Сортировать по:
            <span onClick={() => setOpenSort(prev => !prev)} className={styles.criterion}>{sortTypeValue.name}</span>
            {openSort && (<ul className={styles.list}>
                {SORT_OPTIONS.map((obj) => (
                    <li onClick={() => onClickCriterion(obj)} key={obj.name} className={sortTypeValue.name === obj.name ? `${styles.item} ${styles.active}` : `${styles.item}`}>
                        {obj.name}
                    </li>
                ))}
            </ul>)}
        </div>
    );
}

export default SortBy;