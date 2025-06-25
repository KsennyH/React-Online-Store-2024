import { useEffect, useRef, useState } from "react";
import { SortItem } from "../../../redux/filterSlice";

export const sort: SortItem[] = [{name: 'цене', sort: 'price'}, {name: 'популярности', sort: 'rating'}, {name: 'алфавиту', sort: 'title'}];

type SortProps = {
    sortCriterion: SortItem;
    sortCriterionChange: (obj: SortItem) => void
}

const Sort: React.FC<SortProps> = ({sortCriterion, sortCriterionChange}) => {

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
        <div className="sort" ref={sortRef}>
            Сортировать по:
            <span onClick={() => setOpenSort(!openSort)} className='sort__criterion'>{sortCriterion.name}</span>
            {openSort && (<ul className="sort__list">
                {sort.map((obj) => (
                    <li onClick={() => onClickCriterion(obj)} key={obj.name} className={sortCriterion.name === obj.name ? "sort__item sort__item_active" : "sort__item"}>
                        {obj.name}
                    </li>
                ))}
            </ul>)}
        </div>
    );
}

export default Sort;