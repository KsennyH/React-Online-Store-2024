import { CartSliceState } from "@/entities/cart";

export const calculateCart = (state: CartSliceState) => {
    state.count = state.products.reduce((sum: number, item) => sum + item.productCount, 0);
    state.price = state.products.reduce((sum, item) => sum + item.totalPrice, 0);
};