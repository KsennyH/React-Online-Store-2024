import PostCategories from "@/components/post-category/PostCategories";
import PostList from "@/components/post-list/PostList";
import Title from "@/components/ui/title/Title";
import Tags from "@/components/tags/Tags";
import styles from "./Articles.module.scss";

function Articles() {

    return(

            <div className={styles.articles}>
                <div className="container">
                    <div className={styles.articles__wrapper}>
                        <section className={styles.articles__news}>
                            <Title className={styles.articles__title} tag="h1">Статьи и новости</Title>
                            <PostList />
                        </section>
                        <aside className={styles.articles__aside}>
                            <PostCategories />
                            <Tags />
                        </aside>
                    </div>
                </div>
            </div>
    );
}
export default Articles;