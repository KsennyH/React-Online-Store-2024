import { useParams } from "react-router-dom";
import styles from "./PostPage.module.scss";
import { JSX } from "react";
import PostCategories, { Category } from "@/components/post-category/PostCategories";
import Tags from "@/components/tags/Tags";
import Article from "@/components/article/Article";
import Comments from "@/components/comments/Comments";
import { useGetSingleNewsQuery } from "@/api/news/newsApi";
import { Author } from "@/components/post/Post";
import { ErrorMessage, Loader } from "@/shared";
import Skeleton from "react-loading-skeleton";

export interface SinglePost {
    id: number,
    title: string,
    image: string,
    intro: string,
    content: string,
    authors: Author,
    categories?: Category;
    created_at: string,
}

export function PostPage(): JSX.Element {

    const { id } = useParams<{ id: string }>();

    if(!id) {
        return <ErrorMessage text="Статья не найдена" />;
    }

    const { data, error } = useGetSingleNewsQuery(id);

    if(error) { 
        console.error('Ошибка при загрузке новости:', error);
        return <ErrorMessage text="Не удалось загрузить новость. Попробуйте позже." />        
    }

    return(
        <section className={styles.blogPage}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        { data && <Article article={ data } /> }
                        <Comments />
                    </div>
                    <aside className={styles.aside}>
                        <PostCategories />
                        <Tags /> 
                    </aside>
                </div>
            </div>
        </section>
    );
}