import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store/store";

type SearchSliceState = {
    searchValue: string,
}

const initialState: SearchSliceState = {
    searchValue: '',
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchValueAdded: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        }
    },
});

export const { searchValueAdded } = searchSlice.actions;
export const getSearchValue = (state: RootState) => state.search.searchValue;
export default searchSlice.reducer;