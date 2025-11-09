import PostCategories from "@/components/post-category/PostCategories";
import PostList from "@/components/post-list/PostList";
import Tags from "@/components/tags/Tags";
import styles from "./ArticlesPage.module.scss";
import { Title } from "@/shared";

export function ArticlesPage() {

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