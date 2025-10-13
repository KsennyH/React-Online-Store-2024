import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SearchSliceState = {
    searchValue: string
}

const initialState: SearchSliceState = {
    searchValue: ''
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchValueAdded: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        }
    }
});

export const { searchValueAdded } = searchSlice.actions;
export default searchSlice.reducer;