import { useParams } from "react-router-dom";
import styles from "./SingleArticle.module.scss";
import { JSX } from "react";
import PostCategories from "@/components/post-category/PostCategories";
import Tags from "@/components/tags/Tags";
import { POSTS } from "@/constants/posts";
import Article from "@/components/article/Article";
import Comments from "@/components/comments/Comments";

function SingleArticle(): JSX.Element {

    const { id } = useParams<{ id: string }>();

    // Пока не перенесу данные статей на сервер, получаю статьи из константы
    let article;

    if (id) {
        const index = parseInt(id, 10);
        article = POSTS[index]; 
    }

    if(!article) {
        return <div>"Статья не найдена"</div>;
    }

    return(
        <section className={styles.blogPage}>
            <div className="container">
                <div className={styles.blogPage__wrapper}>
                    <div className={styles.blogPage__content}>
                        <Article article={article} />
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