import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios';

type FetchProductsArgs = {
    // getCards: string;
    // getCardsWithSearch: string;
    // searchValue: string;
    // url: string;
    categoryId: number;
    sortType: string;
    searchValue: string;
    currentPage: number;
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
    totalProducts: number;
    status: Status;
    error: string | null;
}

const initialState: ProductsSliceState = {
    items: [],
    totalProducts: 0,
    status: Status.LOADING,
    error: null,
}

export const fetchProducts = createAsyncThunk<Product[],FetchProductsArgs>(
    'products/fetchProductsStatus',
    async ({ categoryId, sortType, searchValue, currentPage }, { rejectWithValue }) => {
        try {
            const params = new URLSearchParams();
            params.append('page', String(currentPage));
            if (categoryId) params.append('categories', String(categoryId));
            if (sortType) params.append('sortBy', sortType);
            if (searchValue) params.append('search', searchValue);
            // const { getCards, getCardsWithSearch, searchValue } = params;
            // const { data } = await axios.get<Product[]>(`${searchValue ? getCardsWithSearch : getCards}`);
            const { data } = await axios.get<Product[]>(`https://665b3a2e003609eda4604130.mockapi.io/products?${params.toString()}`);
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
                state.totalProducts = action.payload.length;
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