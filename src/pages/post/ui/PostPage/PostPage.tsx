import { useParams } from "react-router-dom";
import styles from "./PostPage.module.scss";
import { JSX } from "react";
import Comments from "@/components/comments/Comments";
import { ErrorMessage } from "@/shared/ui";
import { FullArticle } from "@/entities/article";
import { ArticleAside } from "@/widgets/article";

export function PostPage(): JSX.Element {

    const { id } = useParams<{ id: string }>();

    if(!id) {
        return <ErrorMessage text="Статья не найдена" />;
    }

    return(
        <section className={styles.blogPage}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <FullArticle id={id} />
                        <Comments />
                    </div>
                    <ArticleAside />
                </div>
            </div>
        </section>
    );
}