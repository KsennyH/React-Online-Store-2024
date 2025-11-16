import { CartItem } from "@/entities/cart";

export type AddToCartButtonProps = CartItem & {
    type?: 'sm' | 'lg';
};