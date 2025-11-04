import { useParams } from "react-router-dom";
import styles from "./SingleArticle.module.scss";
import { JSX } from "react";
import PostCategories, { Category } from "@/components/post-category/PostCategories";
import Tags from "@/components/tags/Tags";
import Article from "@/components/article/Article";
import Comments from "@/components/comments/Comments";
import { useGetSingleNewsQuery } from "@/api/news/newsApi";
import { Author } from "@/components/post/Post";

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

function SingleArticle(): JSX.Element {

    const { id } = useParams<{ id: string }>();

    if(!id) {
        return <div>Статья не найдена</div>;
    }

    const { data, error } = useGetSingleNewsQuery(id);

    if(error) { return <div>Ошибка</div> }

    if (!data) return <div>Загрузка...</div>;

    return(
        <section className={styles.blogPage}>
            <div className="container">
                <div className={styles.blogPage__wrapper}>
                    <div className={styles.blogPage__content}>
                        <Article article={ data } />
                        <Comments />
                    </div>
                    <aside className={styles.blogPage__aside}>
                        <PostCategories />
                        <Tags /> 
                    </aside>
                </div>
            </div>
        </section>
    );
}

export default SingleArticle;