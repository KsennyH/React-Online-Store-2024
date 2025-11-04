import { JSX } from "react";
import styles from "./Tags.module.scss";
import Title from "@/components/ui/title/Title";
import { useGetTagsQuery } from "@/api/news/newsApi";

export type Tag = {
    id: number,
    name: string
}

function Tags(): JSX.Element {

    const { data, error } = useGetTagsQuery();
    
    if(error) { return <div>Ошибка</div> }

    return(
        <div className={styles.tags}>
            <div className={styles.tags__title}>
                <Title tag="h3">Теги</Title>
            </div>
            <ul className={styles.tags__list}>
                {

                    data && data.length > 0 && data.map((el: Tag) => (
                        <li key={el.id} className={styles.tags__item}>
                            <a className={styles.tags__link} href="#">{el.name}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
export default Tags;