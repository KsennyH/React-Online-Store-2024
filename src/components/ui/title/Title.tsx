import cn from "classnames";
import styles from "./Title.module.scss";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

interface TitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    tag: 'h1' | 'h2' | 'h3' | 'h4',
    children: ReactNode,
}

function Title({tag, children, className, ...props}: TitleProps) {
    return(
        <>
            {tag === 'h1' && <h1 {...props} className={cn(`${styles.title} ${styles.h1}`, className )} >{ children }</h1>}
            {tag === 'h2' && <h2 {...props} className={cn(`${styles.title} ${styles.h2}`, className )} >{ children }</h2>}
            {tag === 'h3' && <h3 {...props} className={cn(`${styles.title} ${styles.h3}`, className )} >{ children }</h3>}
            {tag === 'h4' && <h4 {...props} className={cn(`${styles.title} ${styles.h4}`, className )} >{ children }</h4>}
        </>
        
    );
}
export default Title;