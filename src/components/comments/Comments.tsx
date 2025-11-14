import { JSX } from "react";
import styles from "./Comments.module.scss";
import Comment from "../comment/Comment";
import CommentForm from "../comment-form/CommentForm";
import { Title } from "@/shared/ui";
import { COMMENTS } from "@/shared/constants";
function Comments(): JSX.Element {
    return (
        <div className={styles.comments}>
            <div className={styles.top}>
                <div className={styles.title}>
                    <Title tag="h4">Комментарии:</Title>
                </div>
                <ul className={styles.list}>
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