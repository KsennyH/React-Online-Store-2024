import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type CartItem = {
    id: string;
    img: string;
    title: string;
    price: number;
    color: string;
    productCount: number
}

interface CartSliceState {
    count: number;
    price: number;
    products: CartItem[]
}

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
            const findItem = state.products.find((obj) => obj.id === action.payload.id);
            if(findItem) {
                findItem.productCount++;
                state.count = state.count + 1;
                state.price = state.price + action.payload.price;
            } else {
                state.products.push({
                    ...action.payload,
                    productCount: 1
                });
                state.count = state.count + 1;
                state.price = state.price + action.payload.price;
            }           
        },
        productDecrement: (state, action: PayloadAction<CartItem>) => {
            const findItem = state.products.find((obj) => obj.id === action.payload.id);
            if(findItem) {
                findItem.productCount--;
            }
            state.count = state.count - 1;
            state.price = state.price - action.payload.price;
        },
        removeProduct: (state, action: PayloadAction<CartItem>) => {
            const findItem = state.products.find((obj) => obj.id === action.payload.id);
            if(findItem) {
                state.count = state.count - findItem.productCount;
                state.price = state.price - findItem.price * findItem.productCount;
            }
            state.products = state.products.filter((obj) => obj.id !== action.payload.id);
        },
        clearCart: (state) => {
            state.products = [];
            state.price = 0;
            state.count = 0;
        }
    }
})

export const { addProduct, removeProduct, productDecrement, clearCart } = cartSlice.actions;

export default cartSlice.reducer;