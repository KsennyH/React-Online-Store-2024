import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store";
import { calculateCart } from "@/lib/calculateCart";
import { CartItem, CartSliceState } from "@/types/cartTypes";

const initialState: CartSliceState = {
    count: 0,
    price: 0,
    products: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<CartItem>) => {
            const findItem = state.products.find((obj) => obj.variant.article === action.payload.variant.article);
            if(findItem) {
                findItem.productCount++;
                findItem.totalPrice += action.payload.price;
            } else {
                state.products.push({
                    ...action.payload
                });
            }

            calculateCart(state); 
        },
        productDecrement: (state, action: PayloadAction<{ id: number; currentVariant: string, price: number }>) => {
            const findItem = state.products.find((obj) => obj.variant.article === action.payload.currentVariant);

            if(!findItem) return;
        
            if(findItem.productCount > 1) {
                findItem.productCount--;
                findItem.totalPrice -= action.payload.price;
            }
            
            calculateCart(state);
        },
        productIncrement: (state, action: PayloadAction<{ id: number; currentVariant: string, price: number }>) => {
            const findItem = state.products.find((obj) => obj.variant.article === action.payload.currentVariant);

            if(!findItem) return;

            findItem.productCount++;
            findItem.totalPrice += action.payload.price;

            calculateCart(state);
        },
        removeProduct: (state, action: PayloadAction<{ currentVariant: string }>) => {
            state.products = state.products.filter((obj) => obj.variant.article !== action.payload.currentVariant);

            calculateCart(state);
        },
        clearCart: (state) => {
            state.products = [];
            state.price = 0;
            state.count = 0;
        }
    }
})

export const { addProduct, clearCart, removeProduct, productDecrement, productIncrement } = cartSlice.actions;
export const cartProducts = (state: RootState) => state.cart.products;
export const totalPrice = (state: RootState) => state.cart.price;
export const totalCount = (state: RootState) => state.cart.count;

export default cartSlice.reducer;