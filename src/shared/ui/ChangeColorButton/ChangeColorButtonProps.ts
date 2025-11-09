type Size = 'lg' | 'sm';
export interface ChangeColorButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isActive?: boolean;
    size?: Size;
    color: string;
}