import { JSX } from "react";
import parse from 'html-react-parser';
import styles from "./FullArticle.module.scss";
import Skeleton from "react-loading-skeleton";
import { useGetSingleNewsQuery } from "@/entities/article/api";
import { ErrorMessage, Title } from "@/shared/ui";
import { formatDate } from "@/shared/lib";

export function FullArticle({ id }: { id: string }): JSX.Element {

    const { data, isLoading, error } = useGetSingleNewsQuery(id);

    if(error) { 
        console.error('Ошибка при загрузке новости:', error);
        return <ErrorMessage text="Не удалось загрузить новость. Попробуйте позже." />        
    }

    if(!data) {
        return <Skeleton height={550} />
    }

    return (
        isLoading ? <Skeleton height={550} borderRadius={18} /> :
        <article className={styles.article}>
            <div className={styles.image}>
                <img className={styles.img} src={data?.image} alt={data.title}/>
            </div>
            <div className={styles.content}>
                <div className={styles.contentTitle}>
                    <Title tag="h2">{data.title}</Title>
                </div>
                <div className={styles.intro}><p>{data.intro}</p>
                </div>
                <div className={styles.text}>
                    {parse(data.content)}
                </div>
                <div className={styles.info}>
                    <time className={styles.date}>{formatDate(data.created_at)}</time>
                    <div className={styles.author}>Автор: {data.authors?.name}</div>
                </div>
            </div>
        </article>
    );
}