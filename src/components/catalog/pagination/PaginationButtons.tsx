import { JSX, memo } from 'react';
import styles from './PaginationButtons.module.scss';
import { PaginationType } from '@/redux/filterSlice';
import { MoveLeft, MoveRight } from 'lucide-react';

type PaginationProps = {
    totalPages: number;
    pagination: PaginationType;
    handleCurrentChange: (pagination: PaginationType) => void
}

const Pagination = memo(({ totalPages, pagination, handleCurrentChange }: PaginationProps): JSX.Element => {

    const { currentPage, limit } = pagination;

    return(
        <div className={styles.pagination}> 
            <ul className={styles.pagination__list}> 
                <li> 
                    <button className={`${styles.pagination__link} ${styles["pagination__link--noBorder"]}`} onClick={() =>  handleCurrentChange( {currentPage: currentPage - 1, limit})} disabled={currentPage <= 1}>
                        <MoveLeft color="#ffffff" stroke={currentPage <= 1 ? '#b1b9b9' : '#fff'} />
                    </button>
                </li>
                {[...new Array(totalPages)].map((_, i: number) => (
                    <li key={`page-${i+1}`}> 
                        <button className={currentPage === i+1 ? `${styles.pagination__link} ${styles.active}` : styles.pagination__link} onClick={() => handleCurrentChange({ currentPage: i + 1, limit })}>{i + 1}</button>
                    </li>
                ))}
                <li> 
                    <button className={`${styles.pagination__link} ${styles["pagination__link--noBorder"]}`} onClick={() =>  handleCurrentChange({currentPage: currentPage + 1, limit})} disabled={currentPage >= totalPages}>
                        <MoveRight color="#ffffff" stroke={currentPage >= totalPages ? '#b1b9b9' : '#fff'}/>
                    </button>
                </li>
            </ul>
        </div>
    );
})

export default Pagination;