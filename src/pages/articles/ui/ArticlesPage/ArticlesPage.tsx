import { ArticleAside, PostsList } from "@/widgets/article";
import styles from "./ArticlesPage.module.scss";
import { Title } from "@/shared/ui";

export function ArticlesPage() {

    return(

            <div className={styles.articles}>
                <div className="container">
                    <div className={styles.wrapper}>
                        <section className={styles.news}>
                            <Title className={styles.title} tag="h1">Статьи и новости</Title>
                            <PostsList />
                        </section>
                        <ArticleAside />
                    </div>
                </div>
            </div>
    );
}