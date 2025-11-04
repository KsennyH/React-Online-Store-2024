import { JSX } from "react";
import styles from "./PostCategories.module.scss";
import Title from "@/components/ui/title/Title";
import { useGetCategoriesQuery } from "@/api/news/newsApi";

export interface Category {
    id: number,
    name: string,
    news: {id: number}[]
}

function PostCategories(): JSX.Element {

    const { data, error } = useGetCategoriesQuery();

    if(error) { return <div>Ошибка</div> }
    
    return(
        <div className={styles.category}>
            <div className={styles.category__title}>
                <Title tag="h3">Категории</Title>
            </div>
            <ul className={styles.category__list}>
                {
                    data && data.length > 0 && data.map((el: Category)  => (
                        <li key={el.id}>
                            <a className={styles.category__link} href="#">{el.name} ({el.news.length})</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default PostCategories;