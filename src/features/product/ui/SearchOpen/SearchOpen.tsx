import styles from "./SearchOpen.module.scss";
import { Link } from "react-router-dom";
import { JSX } from "react";
import { getSearchValue, SearchOpenProps } from "@/features/product/model";
import { ErrorMessage } from "@/shared/ui";
import { useAppSelector } from "@/shared/lib";
import { useGetSearchProductsQuery } from "@/entities/product";

export function SearchOpen({ handleClick }: SearchOpenProps): JSX.Element {

    const value = useAppSelector((state) => getSearchValue(state));
    const { data, error } = useGetSearchProductsQuery(value);

    if(error) {
        console.error(error);
        <ErrorMessage text="Ошибка при поиске товаров"/>
    }

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