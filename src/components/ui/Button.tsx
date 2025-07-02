import styles from './Button.module.scss';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: ButtonVariant;
}

export default function Button ({children, className, variant='primary', ...rest}: ButtonProps) {
    return (
        <button className={clsx(styles.btn, styles[variant], className)} {...rest}>
            {children}
        </button>
    );
}