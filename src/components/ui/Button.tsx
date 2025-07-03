import styles from './Button.module.scss';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'close';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: ButtonVariant;
    isActive?: boolean;
}

export default function Button ({children, className, variant='primary', isActive, ...rest}: ButtonProps) {
    return (
        <button className={clsx(styles.btn, styles[variant], variant === 'outline' && isActive && styles.outlineActive, className)} {...rest}>
            {children}
        </button>
    );
}