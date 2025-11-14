import cn from "classnames";
import { LinkButtonProps } from "./LinkButtonProps";
import styles from './LinkButton.module.scss';
import { Link } from "react-router-dom";
import { JSX } from "react";

export function LinkButton ({ children, href, className, variant='primary', size='lg', isActive, ...rest }: LinkButtonProps): JSX.Element {
    return (
        <Link to={href} className={cn(
                styles.link, 
                styles[variant], 
                styles[size],
                isActive && styles.active,
                className)
            } {...rest}>
            {children}
        </Link>
    );
}