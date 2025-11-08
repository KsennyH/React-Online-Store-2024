type Size = 'lg' | 'sm';
export interface CloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: Size;
}