import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios';

type FetchProductsArgs = {
    getCards: string;
    getCardsWithSearch: string;
    searchValue: string;
};

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
    status: Status;
    error: string | null;
}

const initialState: ProductsSliceState = {
    items: [],
    status: Status.LOADING,
    error: null,
}

export const fetchProducts = createAsyncThunk<Product[],FetchProductsArgs>(
    'products/fetchProductsStatus',
    async (params, { rejectWithValue }) => {
        try {
            const { getCards, getCardsWithSearch, searchValue } = params;
            const { data } = await axios.get<Product[]>(`${searchValue ? getCardsWithSearch : getCards}`);
            return data;
        } catch (err: unknown) {
            if (err instanceof Error) {
                return rejectWithValue(err.message);
            }
            return rejectWithValue('Что-то пошло не так');
        }
        
    },
  )

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
            .addCase(fetchProducts.pending, (state) => {
                state.status = Status.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = Status.SUCCESS;
                state.error = null; 
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = Status.ERROR;
                state.error = action.payload as string;
            });
    },
})

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;