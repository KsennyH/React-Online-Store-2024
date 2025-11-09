type ButtonVariant = 'primary' | 'secondary';
type Size = 'lg' | 'sm';
export interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    href: string;
    variant?: ButtonVariant;
    isActive?: boolean;
    size?: Size;
}