import cn from "classnames";
import styles from "./Title.module.scss";
import { TitleProps } from "./TitleProps";
import { JSX } from "react";

export function Title({ tag, children, className, ...props }: TitleProps): JSX.Element {
    return(
        <>
            {tag === 'h1' && <h1 {...props} className={cn(`${styles.title} ${styles.h1}`, className )} >{ children }</h1>}
            {tag === 'h2' && <h2 {...props} className={cn(`${styles.title} ${styles.h2}`, className )} >{ children }</h2>}
            {tag === 'h3' && <h3 {...props} className={cn(`${styles.title} ${styles.h3}`, className )} >{ children }</h3>}
            {tag === 'h4' && <h4 {...props} className={cn(`${styles.title} ${styles.h4}`, className )} >{ children }</h4>}
        </>
        
    );
}