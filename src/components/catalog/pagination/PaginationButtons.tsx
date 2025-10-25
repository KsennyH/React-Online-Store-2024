import { JSX, memo } from 'react';
import styles from './PaginationButtons.module.scss';
import { getPagination, setCurrentPage } from '@/redux/filterSlice';
import { MoveLeft, MoveRight } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { PaginationType } from '@/types/filterTypes';

const Pagination = memo(({ totalPages }: { totalPages: number }): JSX.Element => {

    const dispatch = useAppDispatch();
    const pagination = useAppSelector((state) => getPagination(state));
    const onChangeCurrentPage = ( pagination : PaginationType) => dispatch(setCurrentPage(pagination));

    const { currentPage, limit } = pagination;

    return(
        <div className={styles.pagination}> 
            <ul className={styles.pagination__list}> 
                <li> 
                    <button className={`${styles.pagination__link} ${styles["pagination__link--noBorder"]}`} onClick={() =>  onChangeCurrentPage( {currentPage: currentPage - 1, limit})} disabled={currentPage <= 1}>
                        <MoveLeft color="#ffffff" stroke={currentPage <= 1 ? '#b1b9b9' : '#fff'} />
                    </button>
                </li>
                {[...new Array(totalPages)].map((_, i: number) => (
                    <li key={`page-${i+1}`}> 
                        <button className={currentPage === i+1 ? `${styles.pagination__link} ${styles.active}` : styles.pagination__link} onClick={() => onChangeCurrentPage({ currentPage: i + 1, limit })}>{i + 1}</button>
                    </li>
                ))}
                <li> 
                    <button className={`${styles.pagination__link} ${styles["pagination__link--noBorder"]}`} onClick={() =>  onChangeCurrentPage({currentPage: currentPage + 1, limit})} disabled={currentPage >= totalPages}>
                        <MoveRight color="#ffffff" stroke={currentPage >= totalPages ? '#b1b9b9' : '#fff'}/>
                    </button>
                </li>
            </ul>
        </div>
    );
})

export default Pagination;