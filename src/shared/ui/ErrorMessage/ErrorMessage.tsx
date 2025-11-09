import { Ban } from "lucide-react";
import styles from './ErrorMessage.module.scss';
import { ErrorMessageProps } from "./ErrorMessageProps";
import { JSX } from "react";

export function ErrorMessage({ text }: ErrorMessageProps): JSX.Element {
    return (
        <div className={styles.message}>
            <Ban color="#ffffff" />
            <p>{ text }</p>
        </div>
    );
}