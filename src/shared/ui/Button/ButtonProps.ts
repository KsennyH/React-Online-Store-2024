type ButtonVariant = 'primary' | 'secondary';
type Size = 'lg' | 'sm';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: ButtonVariant;
    isActive?: boolean;
    size?: Size;
}