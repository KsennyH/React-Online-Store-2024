import cn from "classnames";
import { CloseButtonProps } from "./CloseButtonProps";
import styles from './CloseButton.module.scss';
import { JSX } from "react";
export function CloseButton ({ className, size='sm', ...rest }: CloseButtonProps): JSX.Element {
    return (
        <button className={cn(
                styles.close,
                styles[size], 
                className)
            } {...rest} aria-label="Закрыть">
                <span></span>
        </button>
    );
}