import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store";
import { FilterSliceState, PaginationType, SetCheckedPayload, SortItem } from "@/types/filterTypes";

const initialState: FilterSliceState = {
    categoryId: 0,
    sortTypeValue: {
        name: "цене",
        sort: "price"
    },
    pagination: {
        currentPage: 1,
        limit: 9
    },
    selected: {
        typesChecked: [],
        brandsChecked: []
    }
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId: (state, action: PayloadAction<number>) => {
            state.categoryId = action.payload;
        },
        setSortType: (state, action: PayloadAction<SortItem>) => {
            state.sortTypeValue = action.payload;
        },
        setCurrentPage: (state, action: PayloadAction<PaginationType>) => {
            state.pagination = action.payload;
        },
        setQueryFromUrl: (state, action: PayloadAction<FilterSliceState>) => {
            const { categoryId, sortTypeValue, pagination, selected } = action.payload;
                state.categoryId = categoryId;
                state.sortTypeValue = sortTypeValue;
                state.pagination = pagination;
                if (selected !== undefined) {
                    state.selected = {
                        ...state.selected,
                        ...action.payload.selected
                    };
                } 
        },
        // setSearchValue: (state, action: PayloadAction<string>) => {
        //     state.value = action.payload;
        // },
        setSelectedFilters: (state, action: PayloadAction<SetCheckedPayload>) => {
            state.selected[action.payload.key] = action.payload.values
        }
    }
})

export const { setSortType, setCategoryId, setSelectedFilters, setCurrentPage, setQueryFromUrl } = filterSlice.actions;

export const getFiltersValue = (state: RootState) => state.filter;

export default filterSlice.reducer;