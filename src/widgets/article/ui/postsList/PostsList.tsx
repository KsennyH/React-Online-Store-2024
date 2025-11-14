import { JSX } from "react";
import styles from "./PostsList.module.scss";
import Skeleton from "react-loading-skeleton";
import { ErrorMessage } from "@/shared/ui";
import { Post, useGetAllNewsQuery } from "@/entities/article";

export function PostsList(): JSX.Element {

    const { data, isLoading, error } = useGetAllNewsQuery();

    if(error) { 
        console.error('Ошибка при загрузке новостей:', error);
        return <ErrorMessage text="Не удалось загрузить новости. Попробуйте позже." />        
    }

    return(
        <ul className={styles.news}>
            {
                isLoading ? [...Array(2)].map((_, i: number) => (
                    <li key={i} className={styles.item} >
                        <Skeleton height={484} style={{borderRadius: 18}} />
                    </li>
                )) :
                data && data.length > 0 && data.map(el => (
                    <li key={el.id} className={styles.item} >
                        <Post {...el} />
                    </li>
                ))
            }
        </ul>
    );
}