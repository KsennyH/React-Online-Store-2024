import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type SortItem = {
    name: string;
    sort: 'price' | 'rating' | 'title'
}

interface FilterSliceState {
    categoryId: number;
    sortType: SortItem;
    currentPage: number;
    value: string
}

const initialState: FilterSliceState = {
    categoryId: 0,
    sortType: {
        name: "цене",
        sort: "price"
    },
    currentPage: 1,
    value: ''
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId: (state, action: PayloadAction<number>) => {
            state.categoryId = action.payload;
        },
        setSortType: (state, action: PayloadAction<SortItem>) => {
            state.sortType = action.payload;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setFilters: (state, action: PayloadAction<FilterSliceState>) => {
            state.categoryId = Number(action.payload.categoryId);
            state.sortType = action.payload.sortType;
            state.currentPage = Number(action.payload.currentPage);
            // console.log(action);
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
})

export const { setCategoryId, setSortType, setCurrentPage, setFilters, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;