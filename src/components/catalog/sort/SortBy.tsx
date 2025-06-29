import { useEffect, useRef, useState } from "react";
import { SortItem } from "../../../redux/filterSlice";
import styles from './SortBy.module.scss';

export const sort: SortItem[] = [{name: 'цене', sort: 'price'}, {name: 'популярности', sort: 'rating'}, {name: 'алфавиту', sort: 'title'}];

type SortProps = {
    sortCriterion: SortItem;
    sortCriterionChange: (obj: SortItem) => void
}

const SortBy: React.FC<SortProps> = ({sortCriterion, sortCriterionChange}) => {

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
        sortCriterionChange(obj);
        setOpenSort(false);
    }

    return(
        <div className={styles.sort} ref={sortRef}>
            Сортировать по:
            <span onClick={() => setOpenSort(!openSort)} className={styles.sort__criterion}>{sortCriterion.name}</span>
            {openSort && (<ul className={styles.sort__list}>
                {sort.map((obj) => (
                    <li onClick={() => onClickCriterion(obj)} key={obj.name} className={sortCriterion.name === obj.name ? `${styles.sort__item} ${styles.active}` : `${styles.sort__item}`}>
                        {obj.name}
                    </li>
                ))}
            </ul>)}
        </div>
    );
}

export default SortBy;