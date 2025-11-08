import cn from "classnames";
import { ButtonProps } from "./ButtonProps";
import styles from './Button.module.scss';
import { JSX } from "react";
export function Button ({ children, className, variant='primary', size='sm', isActive, ...rest }: ButtonProps): JSX.Element {
    return (
        <button className={cn(
                styles.btn, 
                styles[variant], 
                styles[size],
                isActive && styles.active,
                className)
            } {...rest}>
            {children}
        </button>
    );
}