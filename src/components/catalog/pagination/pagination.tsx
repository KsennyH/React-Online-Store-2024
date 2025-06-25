type PaginationProps = {
    current: number;
    setCurrent: (num: number) => void
}

const Pagination: React.FC<PaginationProps> = ({ current, setCurrent }) => {

    return(
        <div className="pagination"> 
            <ul className="pagination__list"> 
                <li className="pagination__item"> <a className="pagination__link pagination__link--no-border">
                    <svg className="pagination__link-icon pagination__link-icon--disabled" width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31 8L1 8M1 8L7.5625 15M1 8L7.5625 1" stroke="white"></path>
                    </svg></a>
                </li>
                {[...new Array(4)].map((elem, i) => (
                    <li onClick={() => setCurrent(i+1)} key={i} className="pagination__item"> <a className={current === i+1 ? 'pagination__link pagination__link--active' : 'pagination__link'}>{i+1}</a>
                    </li>
                ))}
                <li className="pagination__item"> <a className="pagination__link pagination__link--no-border" href="#">
                    <svg className="pagination__link-icon" width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8H30M30 8L23.4375 1M30 8L23.4375 15" stroke="white"></path>
                    </svg></a>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;