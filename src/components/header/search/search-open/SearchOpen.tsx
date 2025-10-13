import { useAppSelector } from "@/redux/store";
import styles from "./SearchOpen.module.scss";
import { searchedProducts } from "@/redux/productsSlice";
import { Link } from "react-router-dom";

type SearchOpenProps = {
    handleClick: () => void
}

function SearchOpen({ handleClick }: SearchOpenProps) {

    const searched = useAppSelector((state) => searchedProducts(state));

    return(

        searched.length > 0 && (
            <div className={styles.searchOpen} >
                <ul>
                    {
                        searched.map((el) => (
                            <li key={el.id} className={styles.searchOpen__item}>
                                <Link to={`products/${el.id}`} className={styles.searchOpen__link} onClick={handleClick}>
                                    <img src={el.img} alt={el.title} />
                                    <h3>{el.title}</h3>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )            
    );
}

export default SearchOpen;