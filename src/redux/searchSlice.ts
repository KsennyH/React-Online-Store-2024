import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, Status } from "./productsSlice";
import { createAppAsyncThunk } from "./redux-types/types";
import axios from "axios";
import { RootState } from "./store";

type SearchSliceState = {
    searchValue: string,
    searchedItems: Product[];
    status: Status;
    error: string | null;
}

const initialState: SearchSliceState = {
    searchValue: '',
    searchedItems: [],
    status: Status.LOADING,
    error: null,
}

export const fetchSearchedData = createAppAsyncThunk(
    'search/fetchSearchedData',
    async ( value: string ) => {
        try{
            if(value.trim().length <= 2) return;
            const { data } = await axios.get<Product[]>(`https://7dad84242a49210a.mokky.dev/products?title=${value}*`);
            return data;
        } catch(err: unknown) {
            if (err instanceof Error) {
                console.error(err.message);
            }
        }
    }
)

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchValueAdded: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
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
    }
});

export const { searchValueAdded } = searchSlice.actions;
export const searchedProducts = (state: RootState) => state.search.searchedItems;
export default searchSlice.reducer;