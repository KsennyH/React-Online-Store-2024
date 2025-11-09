import { JSX } from "react";
import Post from "../post/Post";
import styles from "./PostList.module.scss";
import { useGetAllNewsQuery } from "@/api/news/newsApi";
import Skeleton from "react-loading-skeleton";
import { Ban } from "lucide-react";
import { ErrorMessage } from "@/shared";

function PostList(): JSX.Element {

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
                        <Post post={el} />
                    </li>
                ))

            }
        </ul>
    );
}
export default PostList;