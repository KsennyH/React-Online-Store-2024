import { ProductVariant } from "./productTypes";

export type CartItem = {
    id: number;
    img: string;
    title: string;
    price: number;
    variant: ProductVariant;
    productCount: number;
    totalPrice: number
}

export interface CartSliceState {
    count: number;
    price: number;
    products: CartItem[]
}