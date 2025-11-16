import { JSX } from "react";
import styles from "./Tags.module.scss";
import Skeleton from "react-loading-skeleton";
import { ErrorMessage, LinkButton, Title } from "@/shared/ui";
import { useGetTagsQuery } from "@/entities/tag/api";
import { ArticleTagInterface } from "@/entities/tag/model";

export function Tags(): JSX.Element {

    const { data, isLoading, error } = useGetTagsQuery();
    
    if(error) { 
        console.error('Ошибка при загрузке тегов:', error);
        return <ErrorMessage text="Не удалось загрузить теги. Попробуйте позже." />        
    }

    return(
        <div className={styles.tags}>
            <div className={styles.title}>
                <Title tag="h3">Теги</Title>
            </div>
            <ul className={styles.list}>
                {
                    isLoading ? [...Array(6)].map((_,i: number) => (
                        <li key={i}>
                            <Skeleton height={28} width={100} borderRadius={18} />
                        </li>
                    )) :
                    data && data.length > 0 && data.map((el: ArticleTagInterface) => (
                        <li key={el.id} className={styles.item}>
                            <LinkButton href="#" variant="secondary" size="sm">{el.name}</LinkButton>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}