import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product, Status } from "./productsSlice";
import axios from "axios";

interface SingleProductSliceState {
    product: Product | null;
    error: string | null;
    status: Status
}

const initialState: SingleProductSliceState = {
    product: null,
    error: null,
    status: Status.LOADING
}

export const fetchSingleProduct = createAsyncThunk<Product, string>(
    "singleProduct/fetchSingleProductStatus",
    async (id, { rejectWithValue }) => {
        try {
            const {data} = await axios.get<Product>(`https://665b3a2e003609eda4604130.mockapi.io/products/${id}`);
            return data;
        } catch (err: unknown) {
            if (err instanceof Error) {
                return rejectWithValue(err.message);
            }
            return rejectWithValue('Что-то пошло не так');
        }
    }
)

export const singleProductSlice = createSlice({
    name: 'singleProduct',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingleProduct.pending, (state) => {
                state.status = Status.LOADING;
            })
            .addCase(fetchSingleProduct.fulfilled, (state, action) => {
                state.product = action.payload;
                state.status = Status.SUCCESS;
                state.error = null;
            })
            .addCase(fetchSingleProduct.rejected, (state, action) => {
                state.status = Status.ERROR;
                state.error = action.payload as string;
            });
    }
})

export default singleProductSlice.reducer;