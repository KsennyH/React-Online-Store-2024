import { createSlice } from "@reduxjs/toolkit"
import axios from 'axios';
import { createAppAsyncThunk } from "./redux-types/types";
import { RootState } from "./store";
import { FilterSliceState, PaginationType, SortItem } from "./filterSlice";

type MetaProducts = {
    current_page: number,
    per_page: number,
    remaining_count: number,  
    total_items: number,
    total_pages: number,
}

interface FetchProducts{
    meta: MetaProducts,
    items: Product[],
}

type FetchProductsArgs = {
    categoryId: number;
    pagination: PaginationType,
    sortTypeValue: SortItem,
    selected: FilterSliceState['selected']
};

export type ProductVariant = {
    article: string,
    available: boolean, 
    color: string,
    images: string[],
    stock: number
}

export type Product = {
    id: number;
    img: string;
    title: string;
    price: number;
    variants: ProductVariant[]
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

interface ProductsSliceState {
    items: Product[];
    totalPages: number;
    currentPage: number;
    totalProducts: number;
    status: Status;
    error: string | null;
}

const initialState: ProductsSliceState = {
    items: [],
    totalPages: 1,
    currentPage: 1,
    totalProducts: 0,
    status: Status.LOADING,
    error: null,
}

export const fetchProducts = createAppAsyncThunk<FetchProducts,FetchProductsArgs>(
    'products/fetchProducts',
    async ({ sortTypeValue, categoryId, pagination, selected }, { rejectWithValue }) => {
    
        const queryString = new URLSearchParams();
        categoryId && queryString.append('categories[]', String(categoryId));
        sortTypeValue && queryString.append('sortBy', sortTypeValue.sort);
        pagination.currentPage && queryString.append('page', String(pagination.currentPage));
        pagination.limit && queryString.append('limit', String(pagination.limit));
        selected.brandsChecked.forEach((brand) => {
            queryString.append('brand[]', brand); 
        });
        selected.typesChecked.forEach((type) => {
            queryString.append('type[]', type);
        });
        try{
            // заменила на другой тестовый сервис для хранения данных, в старом были проблемы с пагинацией, не возвращался объект с количеством страниц
            // const { data } = await axios.get<Product[]>(`https://665b3a2e003609eda4604130.mockapi.io/products?${queryString.toString()}`);
            const { data } = await axios.get<FetchProducts>(`https://7dad84242a49210a.mokky.dev/products?${queryString.toString()}`);
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
                state.items = action.payload.items || [];
                state.totalPages = action.payload.meta.total_pages;
                state.currentPage = action.payload.meta.current_page;
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