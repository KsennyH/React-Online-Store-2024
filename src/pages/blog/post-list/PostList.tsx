import { POSTS } from "@/constants/posts";
import { JSX } from "react";
import Post from "../post/Post";
import styles from "./PostList.module.scss";

function PostList(): JSX.Element {
    return(
        <ul className={styles.news}>
            {
                POSTS.map(el => (
                    <li key={el.id} className={styles.news__item} >
                        <Post post={el} />
                    </li>
                ))

            }
        </ul>
    );
}
export default PostList;