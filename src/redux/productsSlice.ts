import { createSlice } from "@reduxjs/toolkit"
import axios from 'axios';
import { createAppAsyncThunk } from "./redux-types/types";
import { RootState } from "./store";
import { PaginationType, SortItem } from "./filterSlice";

type FetchProductsArgs = {
    categoryId: number;
    pagination: PaginationType,
    sortTypeValue: SortItem
};

type ProductVariant = {
    available: boolean, 
    color: string,
    images: string[],
    stock: number
}

export type Product = {
    id: string;
    img: string;
    title: string;
    article: string;
    price: number;
    colors: string[];
    variants: ProductVariant[]
}

export enum Status {
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

export const fetchProducts = createAppAsyncThunk<Product[],FetchProductsArgs>(
    'products/fetchProducts',
    async ({ sortTypeValue, categoryId, pagination }, { rejectWithValue }) => {
    
        const queryString = new URLSearchParams();
        categoryId && queryString.append('categories', String(categoryId));
        sortTypeValue && queryString.append('sortBy', sortTypeValue.sort);
        pagination.currentPage && queryString.append('page', String(pagination.currentPage));
        pagination.limit && queryString.append('limit', String(pagination.limit));

        try{
            const { data } = await axios.get<Product[]>(`https://665b3a2e003609eda4604130.mockapi.io/products?${queryString.toString()}`);
            return data;
        } catch(err: unknown) {
            if (err instanceof Error) {  
                return rejectWithValue(err.message);
            }
            return rejectWithValue("Ошибка при загрузке товаров");
        }
    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = Status.LOADING;
            })
             .addCase(fetchProducts.fulfilled, (state, action) => {
                state.items = action.payload || [];
                state.status = Status.SUCCESS;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = Status.ERROR;
                state.error = "Ошибка при загрузке товаров";
            });
    },
})

export const getProducts = (state: RootState) => state.products;
export default productsSlice.reducer;