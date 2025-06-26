import React from "react";

type SortingProps = {
    sort: number;
    sortChange: (i:number) => void
}

const Sorting: React.FC<SortingProps> = ({sort, sortChange}) => {

    const sortingArray: string[] = ['Все', 'Мотоциклы', 'Мопеды', 'Кроссовые', 'Спортивные'];
    

    return(
        <nav className="sorting"> 
            <ul className="sorting__list"> 
                {sortingArray.map((elem, i) => (
                    <li key={i} className="sorting__item"> 
                        <button onClick={() => sortChange(i)} className={sort === i ? 'sorting-btn active' : 'sorting-btn'}>
                            <span>{elem}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Sorting;