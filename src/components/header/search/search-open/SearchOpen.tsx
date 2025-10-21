import { useAppSelector } from "@/redux/store";
import styles from "./SearchOpen.module.scss";
import { Link } from "react-router-dom";
import { searchedProducts } from "@/redux/searchSlice";

type SearchOpenProps = {
    handleClick: () => void
}

function SearchOpen({ handleClick }: SearchOpenProps) {

    const searched = useAppSelector((state) => searchedProducts(state));

    return(

        <div className={styles.searchOpen} >
            {searched.length > 0 ? (
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
            ) : 
            <p className={styles.searchOpen__notFound}>Ничего не найдено</p>
            }
        </div>           
    );
}

export default SearchOpen;