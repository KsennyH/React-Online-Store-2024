import { ProductVariant } from "@/shared/model";

export interface CartSliceState {
    count: number;
    price: number;
    products: CartItem[]
}

export type CartItem = {
    id: number;
    img: string;
    title: string;
    price: number;
    variant: ProductVariant;
    productCount: number;
    totalPrice: number
}