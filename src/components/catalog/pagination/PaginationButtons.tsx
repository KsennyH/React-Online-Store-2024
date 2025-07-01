import styles from './PaginationButtons.module.scss';

type PaginationProps = {
    current: number;
    pagesCount: number;
    setCurrent: (num: number) => void
}

const Pagination: React.FC<PaginationProps> = ({ current, pagesCount, setCurrent }) => {

    return(
        <div className={styles.pagination}> 
            <ul className={styles.pagination__list}> 
                <li> 
                    <button onClick={() => current > 1 && setCurrent(current - 1)} className={`${styles.pagination__link} ${styles["pagination__link--noBorder"]}`}>
                        <svg className={`${styles.pagination__icon} ${current === 1 ? styles["pagination__icon--disabled"] : ''}`} width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31 8L1 8M1 8L7.5625 15M1 8L7.5625 1" stroke="white"></path>
                        </svg>
                    </button>
                </li>
                {[...new Array(pagesCount)].map((elem, i) => (
                    <li key={`page-${i+1}`}> <button onClick={() => setCurrent(i+1)} className={current === i+1 ? `${styles.pagination__link} ${styles.active}` : styles.pagination__link}>{i+1}</button>
                    </li>
                ))}
                <li> 
                    <button onClick={() => current < pagesCount && setCurrent( current + 1)} className={`${styles.pagination__link} ${styles["pagination__link--noBorder"]}`}>
                        <svg className={`${styles.pagination__icon} ${current === pagesCount ? styles["pagination__icon--disabled"] : ''}`} width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 8H30M30 8L23.4375 1M30 8L23.4375 15" stroke="white"></path>
                        </svg>
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;