import { ChangeColorButtonProps } from "./ChangeColorButtonProps";
import styles from './ChangeColorButton.module.scss';
import cn from "classnames";
import { JSX } from "react";

export function ChangeColorButton({ color, className, isActive, size='lg', ...rest }: ChangeColorButtonProps): JSX.Element {
    return (
        <button 
            aria-label="Выбор цвета" 
            type="button" 
            className={cn(styles.color, styles[size], isActive && styles.active, className)} 
            {...rest}
            style={{ backgroundColor: color }}>
        </button>
    );
}