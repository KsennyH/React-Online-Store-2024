import { JSX } from "react";
import styles from "./PostCategories.module.scss";
import { useGetCategoriesQuery } from "@/api/news/newsApi";
import { ErrorMessage, Title } from "@/shared";
import Skeleton from "react-loading-skeleton";

export interface Category {
    id: number,
    name: string,
    news: {id: number}[]
}

function PostCategories(): JSX.Element {

    const { data, isLoading, error } = useGetCategoriesQuery();

    if(error) { 
        console.error('Ошибка при загрузке категорий:', error);
        return <ErrorMessage text="Не удалось загрузить категории. Попробуйте позже." />        
    }
    
    return(
        <div className={styles.category}>
            <div className={styles.title}>
                <Title tag="h3">Категории</Title>
            </div>
            <ul className={styles.list}>
                {
                    isLoading ? [...Array(5)].map((_,i: number) => (
                        <li key={i}>
                            <Skeleton height={20} />
                        </li>
                    )) :
                    data && data.length > 0 && data.map((el: Category)  => (
                        <li key={el.id}>
                            <a className={styles.link} href="#">{el.name} ({el.news.length})</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default PostCategories;