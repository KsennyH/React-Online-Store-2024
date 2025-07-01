import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type SortItem = {
    name: string;
    sort: 'price' | 'rating' | 'title';
}

interface FilterSliceState {
    categoryId: number;
    sortType: SortItem;
    currentPage: number;
    value: string;
    types: string[];
}

const initialState: FilterSliceState = {
    categoryId: 0,
    sortType: {
        name: "цене",
        sort: "price"
    },
    currentPage: 1,
    value: '',
    types: []
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
            const {categoryId, sortType, currentPage, value, types} = action.payload;
            state.categoryId = categoryId;
            state.sortType = sortType;
            state.currentPage = currentPage;
            state.value = value;
            state.types = types;
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
        setTypes: (state, action: PayloadAction<string[]>) => {
            state.types = action.payload;
        }
    }
})

export const { setCategoryId, setSortType, setCurrentPage, setFilters, setSearchValue, setTypes } = filterSlice.actions;

export default filterSlice.reducer;