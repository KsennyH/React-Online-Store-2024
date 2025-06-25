import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios';

type FetchProductsArgs = Record<string, string>

export const fetchProducts = createAsyncThunk<Product[],FetchProductsArgs>(
    'products/fetchProductsStatus',
    async (params) => {
        const { getCards, getCardsWithSearch, searchValue } = params;
        const { data } = await axios.get<Product[]>(`${searchValue ? getCardsWithSearch : getCards}`);
        return data;
    },
  )

export type Product = {
    id: string;
    img: string;
    title: string;
    article: string;
    price: number;
    colors: string[]
}

enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

interface ProductsSliceState {
    items: Product[];
    status: Status
}

const initialState: ProductsSliceState = {
    items: [],
    status: Status.LOADING
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = Status.SUCCESS;
        });
    },
})

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;