import PostCategories from "@/components/post-category/PostCategories";
import PostList from "@/components/post-list/PostList";
import Title from "@/components/ui/title/Title";
import Tags from "@/components/tags/Tags";
import styles from "./Articles.module.scss";

function Articles() {

    return(

            <div className={styles.articles}>
                <div className="container">
                    <div className={styles.wrapper}>
                        <section className={styles.news}>
                            <Title className={styles.title} tag="h1">Статьи и новости</Title>
                            <PostList />
                        </section>
                        <aside className={styles.aside}>
                            <PostCategories />
                            <Tags />
                        </aside>
                    </div>
                </div>
            </div>
    );
}
export default Articles;