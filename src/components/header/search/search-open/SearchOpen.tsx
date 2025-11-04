import { useAppSelector } from "@/redux/store";
import styles from "./SearchOpen.module.scss";
import { Link } from "react-router-dom";
import { getSearchValue } from "@/redux/searchSlice";
import { useGetSearchProductsQuery } from "@/api/product/productApi";

type SearchOpenProps = {
    handleClick: () => void
}

function SearchOpen({ handleClick }: SearchOpenProps) {

    const value = useAppSelector((state) => getSearchValue(state));
    const { data } = useGetSearchProductsQuery(value);

    return(

        <div className={styles.searchOpen} >
            {data && data.length > 0 ? (
                <ul>
                    {
                        data.map((el) => (
                            <li key={el.id} className={styles.item}>
                                <Link to={`products/${el.id}`} className={styles.link} onClick={handleClick}>
                                    <img src={el.img} alt={el.title} />
                                    <h3>{el.title}</h3>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            ) : 
            <p className={styles.notFound}>Ничего не найдено</p>
            }
        </div>           
    );
}

export default SearchOpen;