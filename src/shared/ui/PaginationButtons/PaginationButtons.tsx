import { JSX, memo } from 'react';
import styles from './PaginationButtons.module.scss';
import { MoveLeft, MoveRight } from 'lucide-react';
import { PaginationProps } from './PaginationButtonsProps';

export const PaginationButtons = memo(({ totalPages, currentPage, onPageChange }: PaginationProps): JSX.Element => {

    return(
        <div className={styles.pagination}> 
            <ul className={styles.list}> 
                <li> 
                    <button className={`${styles.link} ${styles["link--noBorder"]}`} onClick={() =>  onPageChange( currentPage - 1)} disabled={currentPage <= 1}>
                        <MoveLeft color="#ffffff" stroke={currentPage <= 1 ? '#b1b9b9' : '#fff'} />
                    </button>
                </li>
                {[...new Array(totalPages)].map((_, i: number) => (
                    <li key={`page-${i+1}`}> 
                        <button className={currentPage === i+1 ? `${styles.link} ${styles.active}` : styles.link} onClick={() => onPageChange( i + 1)}>{i + 1}</button>
                    </li>
                ))}
                <li> 
                    <button className={`${styles.link} ${styles["link--noBorder"]}`} onClick={() =>  onPageChange(currentPage + 1)} disabled={currentPage >= totalPages}>
                        <MoveRight color="#ffffff" stroke={currentPage >= totalPages ? '#b1b9b9' : '#fff'}/>
                    </button>
                </li>
            </ul>
        </div>
    );
});