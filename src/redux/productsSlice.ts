import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import axios from 'axios';
import { createAppAsyncThunk } from "./redux-types/types";
import { RootState } from "./store";

type FetchProductsArgs = {
    categoryId: number;
    sortType: string;
    searchValue: string;
    currentPage: number;
    types: string[];
};

export type Product = {
    id: string;
    img: string;
    title: string;
    article: string;
    price: number;
    colors: string[];
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

interface ProductsSliceState {
    items: Product[];
    searchedItems: Product[];
    totalProducts: number;
    status: Status;
    error: string | null;
}

const initialState: ProductsSliceState = {
    items: [],
    searchedItems: [],
    totalProducts: 0,
    status: Status.LOADING,
    error: null,
}

// export const fetchProducts = createAsyncThunk<Product[],FetchProductsArgs>(
//     'products/fetchProductsStatus',
//     async ({ categoryId, sortType, searchValue, currentPage, types }, { rejectWithValue }) => {
//         try {
//             const params = new URLSearchParams();
//             params.append('page', String(currentPage));
//             if (categoryId) params.append('categories', String(categoryId));
//             if (sortType) params.append('sortBy', sortType);
//             if (searchValue) params.append('search', searchValue);
//             if (types.length > 0) {
//                 params.append('type', types[0]);
//             }
//             const { data } = await axios.get<Product[]>(`https://665b3a2e003609eda4604130.mockapi.io/products?${params.toString()}`);
//             return data;
//         } catch (err: unknown) {
//             if (err instanceof Error) {
//                 return rejectWithValue(err.message);
//             }
//             return rejectWithValue('Что-то пошло не так');
//         }
        
//     },
//   )

export const fetchSearchedData = createAppAsyncThunk(
    'products/fetchSearchedData',
    async ( value: string ) => {
        try{
            if(value.trim().length <= 2) return;
            const { data } = await axios.get<Product[]>(`https://665b3a2e003609eda4604130.mockapi.io/products?search=${value}`);
            return data;
        } catch(err: unknown) {
            if (err instanceof Error) {
                console.error(err.message);
            }
        }
    }
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
            // .addCase(fetchProducts.pending, (state) => {
            //     state.status = Status.LOADING;
            // })
            // .addCase(fetchProducts.fulfilled, (state, action) => {
            //     state.items = action.payload;
            //     state.totalProducts = action.payload.length;
            //     state.status = Status.SUCCESS;
            //     state.error = null; 
            // })
            // .addCase(fetchProducts.rejected, (state, action) => {
            //     state.status = Status.ERROR;
            //     state.error = action.payload as string;
            // });
            .addCase(fetchSearchedData.pending, (state) => {
                state.status = Status.LOADING;
            })
            .addCase(fetchSearchedData.fulfilled, (state, action) => {
                state.searchedItems = action.payload || [];
                state.status = Status.SUCCESS;
            })
            .addCase(fetchSearchedData.rejected, (state) => {
                state.status = Status.ERROR;
                state.error = "Ошибка при поиске товара";
            })
    },
})

export const { setProducts } = productsSlice.actions;
export const searchedProducts = (state: RootState) => state.products.searchedItems;

export default productsSlice.reducer;