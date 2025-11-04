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
            <div className={styles.avatar}></div>
            <div className={styles.info}>
                <div className={styles.name}>{name}</div>
                <div className={styles.text}><p>{comment}</p>
                </div>
                <time className={styles.date}>{date}</time>
            </div>
        </div>
    );
}
export default Comment;