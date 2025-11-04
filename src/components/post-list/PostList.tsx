import { JSX } from "react";
import Post from "../post/Post";
import styles from "./PostList.module.scss";
import { useGetAllNewsQuery } from "@/api/news/newsApi";
import { NewsCardSkeleton } from "../ui/skeleton/NewsCardSkeleton";

function PostList(): JSX.Element {

    const { data, isLoading, error } = useGetAllNewsQuery();
    console.log(data);

    if(error) { return <div>Ошибка</div> }

    return(
        <ul className={styles.news}>
            {
                isLoading ? [...Array(2)].map((_, i: number) => (
                    <li key={i} className={styles.item} >
                        <NewsCardSkeleton />
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