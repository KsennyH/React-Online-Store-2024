import { JSX } from "react";
import styles from "./Comments.module.scss";
import { COMMENTS } from "@/constants/posts";
import Comment from "../comment/Comment";
import Title from "../ui/title/Title";
import CommentForm from "../comment-form/CommentForm";
function Comments(): JSX.Element {
    return (
        <div className={styles.comments}>
            <div className={styles.comments__top}>
                <div className={styles.comments__title}>
                    <Title tag="h4">Комментарии:</Title>
                </div>
                <ul className={styles.comments__list}>
                    {
                        COMMENTS.map((el, i:number) => (
                            <Comment key={i} articleComment={el} />
                        ))
                    }
                </ul>
            </div>
            <CommentForm />                
        </div>
    );
}
export default Comments;