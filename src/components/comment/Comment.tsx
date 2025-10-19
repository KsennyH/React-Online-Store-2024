import { JSX } from "react";
import styles from "./Comment.module.scss";

type ArticleComment = {
  name: string;
  avatar: string;
  comment: string;
  date: string;
};

interface CommentProps {
    articleComment: ArticleComment;
}

function Comment({ articleComment }: CommentProps): JSX.Element {
    const { name, avatar, comment, date } = articleComment;
    return(
         <div className={styles.comment}>
            <div className={styles.comment__avatar}></div>
            <div className={styles.comment__info}>
                <div className={styles.comment__name}>{name}</div>
                <div className={styles.comment__text}><p>{comment}</p>
                </div>
                <time className={styles.comment__date}>{date}</time>
            </div>
        </div>
    );
}
export default Comment;