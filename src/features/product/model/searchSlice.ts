import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchSliceState } from "./types";

const initialState: SearchSliceState = {
    searchValue: '',
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchValueAdded: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        }
    },
});

export const { searchValueAdded } = searchSlice.actions;

export default searchSlice.reducer;